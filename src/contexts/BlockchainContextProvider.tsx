import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { ConstractAddresses_nullable, ContractAddresses_unsettable, defaultContractAddresses_nullable, defaultContractAddresses_unsettable } from '../types/ContractAddreses';
import { useAccount, useChainId } from 'wagmi';
import { useAddresses } from '../hooks/useAddresses';
import { chain, create } from 'lodash';
import { useReadAVaultConfig, useReadFlaxBalanceOf, useReadFlaxLockerUnclaimedSFlax, useReadFlaxLockerUserStakingInfo, useReadSFlaxBalanceOf } from '../hooks/contract/reflax';


interface TokenBalances {
    flaxBalance: bigint | undefined,
    sFlaxBalance: bigint | undefined
    usdcBalance: bigint | undefined
    unclaimedSFlax: bigint|undefined
}

interface VaultStats{
    TVIPS:bigint|undefined
}

interface BlockChainContextType {
    connected: boolean
    addresses: ConstractAddresses_nullable
    account: `0x${string}` | undefined
    balances: TokenBalances,
    vaultStats:VaultStats
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
        unclaimedSFlax:undefined
    },
    vaultStats:{
        TVIPS:undefined
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
    const {data:unclaimedSFlax} = useReadFlaxLockerUnclaimedSFlax({address:addresses.FlaxLocker,args:[account]});
    const {data:config} = useReadAVaultConfig({address:addresses.vault})
const TVIPS = config?config[5]:undefined;
    
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

    const vaultStats:VaultStats = {
        TVIPS
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
