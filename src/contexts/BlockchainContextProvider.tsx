import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { ConstractAddresses_nullable, ContractAddresses_unsettable, defaultContractAddresses_nullable, defaultContractAddresses_unsettable } from '../types/ContractAddreses';
import { useAccount, useChainId, useSimulateContract } from 'wagmi';
import { useAddresses } from '../hooks/useAddresses';
import { chain, create } from 'lodash';
import { useReadAVaultBalanceOf, useReadAVaultConfig, useReadFlaxBalanceOf, useReadFlaxLockerUnclaimedSFlax, useReadFlaxLockerUserStakingInfo, useReadSFlaxBalanceOf, useReadUsdcV1MaxStake, useSimulateAVault, useWatchAVaultEvent } from '../hooks/contract/reflax';

export type big_optional = bigint | undefined

interface BlockChainContextType {
    connected: boolean
    addresses: ConstractAddresses_nullable
    account: `0x${string}`
}


interface BlockchainProviderProps {
    children: ReactNode;
}

const BlockchainContext = createContext<BlockChainContextType>({
    connected: false,
    account: "0x0",
    addresses: defaultContractAddresses_nullable
})

export function BlockchainContextProvider(props: BlockchainProviderProps) {
    const [connected, setConnected] = useState<boolean>(false)
    const chainId = useChainId()
    const addresses = useAddresses(chainId)
    const account = (useAccount()).address || '0x0'
    useEffect(() => {
        if (chainId && addresses) {
            setConnected(true)
        }
        setConnected(false)
    }, [chainId, addresses])

    return (<BlockchainContext.Provider value={{
        connected,
        addresses,
        account,
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
