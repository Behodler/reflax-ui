import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { ConstractAddresses_nullable, ContractAddresses_unsettable, defaultContractAddresses_nullable, defaultContractAddresses_unsettable } from '../types/ContractAddreses';
import { useAccount, useChainId, useSimulateContract } from 'wagmi';
import { useAddresses } from '../hooks/useAddresses';
import { chain, create } from 'lodash';
import { useReadAVaultBalanceOf, useReadAVaultConfig, useReadFlaxBalanceOf, useReadFlaxLockerUnclaimedSFlax, useReadFlaxLockerUserStakingInfo, useReadSFlaxBalanceOf, useReadUsdcV1MaxStake, useSimulateAVault } from '../hooks/contract/reflax';

export type big_optional = bigint | undefined

interface TokenBalances {
    flaxBalance: big_optional,
    sFlaxBalance: big_optional
    usdcBalance: big_optional
    unclaimedSFlax: big_optional
}

interface VaultStats {
    TVIPS: big_optional
    totalDeposits: big_optional,
    maxStake: big_optional
    deposit: big_optional
    unclaimed: big_optional
}

interface BlockChainContextType {
    connected: boolean
    addresses: ConstractAddresses_nullable
    account: `0x${string}` | undefined
    balances: TokenBalances,
    vaultStats: VaultStats
}


interface BlockchainProviderProps {
    children: ReactNode;
}

const BlockchainContext = createContext<BlockChainContextType>({
    connected: false,
    account: "0x0",
    addresses: defaultContractAddresses_nullable,
    balances: {
        flaxBalance: undefined,
        sFlaxBalance: undefined,
        usdcBalance: undefined,
        unclaimedSFlax: undefined
    },
    vaultStats: {
        TVIPS: undefined,
        totalDeposits: undefined,
        maxStake: undefined,
        deposit: undefined,
        unclaimed: undefined

    }
})

export function BlockchainContextProvider(props: BlockchainProviderProps) {
    const [connected, setConnected] = useState<boolean>(false)
    const chainId = useChainId()
    const addresses = useAddresses(chainId)
    const account = (useAccount()).address || '0x0'


    const { data: usdcBalance } = useReadFlaxBalanceOf({ address: addresses.USDC, args: [account] })
    const { data: sFlaxBalance } = useReadSFlaxBalanceOf({ address: addresses.SFlax, args: [account] })
    const { data: flaxBalance } = useReadFlaxBalanceOf({ address: addresses.Flax, args: [account] })
    const { data: unclaimedSFlax } = useReadFlaxLockerUnclaimedSFlax({ address: addresses.FlaxLocker, args: [account] });
    const { data: config } = useReadAVaultConfig({ address: addresses.vault })

    const TVIPS = config ? config[5] : undefined;

    const totalVaultDepositQuery = useReadFlaxBalanceOf({ address: addresses.USDC, args: [addresses.vault || '0x0'] })

    const { data: deposit } = useReadAVaultBalanceOf({ address: addresses.vault, args: [account] })
    const { data: maxStake } = useReadUsdcV1MaxStake({ address: addresses.vault })


    const { data: unclaimedFlax } = useSimulateAVault({
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        functionName: 'updateAccounting',
        args: [
            account,
        ],
    })


    useEffect(() => {
        if (chainId && addresses) {
            setConnected(true)
        }
        setConnected(false)
    }, [chainId, addresses])


    const balances: TokenBalances = {
        usdcBalance,
        flaxBalance,
        sFlaxBalance,
        unclaimedSFlax
    }

    const vaultStats: VaultStats = {
        TVIPS,
        totalDeposits: totalVaultDepositQuery?.data,
        maxStake,
        deposit,
        unclaimed:unclaimedFlax?.result[0]
    }
    // console.log('balances ' + JSON.stringify(balances, null, 4))
    return (<BlockchainContext.Provider value={{
        connected,
        addresses,
        account,
        balances,
        vaultStats
    }} >
        {props.children}
    </BlockchainContext.Provider>
    )
}

export const useBlockchainContext = () => {
    const context = useContext(BlockchainContext);
    if (!context) {
        throw new Error('useBlockchainContext must be used within a BlockchainContextProvider');
    }
    return context;
};
