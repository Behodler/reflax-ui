import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { ContractAddresses, defaultContractAddresses } from '../types/ContractAddreses';
import { useAccount, useChainId } from 'wagmi';
import { useAddresses } from '../hooks/useAddresses';
import { chain, create } from 'lodash';


interface BlockChainContextType {
    connected: boolean
    addresses: ContractAddresses
    account: `0x${string}` | undefined
}


interface BlockchainProviderProps {
    children: ReactNode;
}

const BlockchainContext = createContext<BlockChainContextType>({
    connected: false,
    account: "0x0",
    addresses: defaultContractAddresses
})

export function BlockchainContextProvider(props: BlockchainProviderProps) {

    const [connected, setConnected] = useState<boolean>(false)
    const chainId = useChainId()
    const addresses = useAddresses(chainId)
    const account = (useAccount()).address

    useEffect(() => {
        if (chainId && addresses) {
            setConnected(true)
        }
        setConnected(false)
    }, [chainId, addresses])

    return (<BlockchainContext.Provider value={{
        connected,
        addresses,
        account
    }} >
        {props.children}
    </BlockchainContext.Provider>
    )
}
