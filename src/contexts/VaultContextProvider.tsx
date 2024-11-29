import React, { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { flaxAbi, useReadAVaultBalanceOf, useReadAVaultConfig, useReadFlaxAllowance, useReadFlaxBalanceOf, useReadFlaxLockerUnclaimedSFlax, useReadFlaxLockerUserStakingInfo, useReadSFlaxBalanceOf, useReadUsdcV1MaxStake, useSimulateAVault, useWatchAVaultEvent, useWriteFlaxApprove } from '../hooks/contract/reflax';
import { useBlockchainContext } from './BlockchainContextProvider';
import { MAX_UINT } from '../types/ContractAddreses';

export type big_optional = bigint | undefined

interface VaultStats {
    TVIPS: big_optional
    totalDeposits: big_optional,
    maxStake: big_optional
    deposit: big_optional
    unclaimed: big_optional
    allowance: big_optional,
    approveVault: () => void
}

interface VaultStatsProviderProps {
    children: ReactNode;
}

const LockerContext = createContext<VaultStats>({
    TVIPS: undefined,
    totalDeposits: undefined,
    maxStake: undefined,
    deposit: undefined,
    unclaimed: undefined,
    allowance: undefined,
    approveVault: () => { console.log('loading') }
})

export function VaultContextProvider(props: VaultStatsProviderProps) {
    const { addresses, account } = useBlockchainContext()

    const { data: config } = useReadAVaultConfig({ address: addresses.vault })

    const TVIPS = config ? config[5] : undefined;

    const totalVaultDepositQuery = useReadFlaxBalanceOf({ address: addresses.USDC, args: [addresses.vault || '0x0'], "blockTag": "latest" })

    const { data: deposit } = useReadAVaultBalanceOf({ address: addresses.vault, args: [account] })
    const { data: maxStake } = useReadUsdcV1MaxStake({ address: addresses.vault })
    const { data: allowance } = useReadFlaxAllowance({ address: addresses.USDC, args: [account, addresses.vault || '0x0'] })

    const { writeContract } = useWriteFlaxApprove()
    const approveVault = useMemo(() => {
        if (!addresses?.Flax || !addresses?.vault) {
            return () => console.error("Addresses are not loaded yet");
        }
        return () => {
            writeContract({
                address: addresses.USDC!,
                args: [addresses.vault!, MAX_UINT],
            });
            console.log('executed')
        }
    }, [addresses, writeContract]);

    const { data: unclaimedFlax } = useSimulateAVault({
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        functionName: 'updateAccounting',
        args: [
            account,
        ],
    })

    return (<LockerContext.Provider value={{
        TVIPS,
        totalDeposits: totalVaultDepositQuery?.data,
        maxStake,
        deposit,
        unclaimed: unclaimedFlax?.result[0],
        allowance,
        approveVault
    }} >
        {props.children}
    </LockerContext.Provider>
    )
}

export const useVaultContext = () => {
    const context = useContext(LockerContext);
    if (!context) {
        throw new Error('useVaultContext must be used within a VaultContextProvider');
    }
    return context;
};
