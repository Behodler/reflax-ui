import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { ConstractAddresses_nullable, ContractAddresses_unsettable, defaultContractAddresses_nullable, defaultContractAddresses_unsettable } from '../types/ContractAddreses';
import { useAccount, useChainId, useSimulateContract } from 'wagmi';
import { useAddresses } from '../hooks/useAddresses';
import { chain, create } from 'lodash';
import { useReadAVaultBalanceOf, useReadAVaultConfig, useReadFlaxBalanceOf, useReadFlaxLockerUnclaimedSFlax, useReadFlaxLockerUserStakingInfo, useReadSFlaxBalanceOf, useReadUsdcV1MaxStake, useSimulateAVault, useWatchAVaultEvent } from '../hooks/contract/reflax';
import { useBlockchainContext } from './BlockchainContextProvider';
import { useUserStakingInfo } from '../hooks/useUserStakingInfo';

export type big_optional = bigint | undefined

interface LockerStats {
    totalLockedFlax: big_optional,
    userLockedFlax:big_optional,
    unclaimedSFlax:big_optional,
    timeRemaining:big_optional
}


interface LockerProviderProps {
    children: ReactNode;
}

const LockerContext = createContext<LockerStats>({
    totalLockedFlax: undefined,
    userLockedFlax:undefined,
    unclaimedSFlax:undefined,
    timeRemaining:undefined
})

export function LockerContextProvider(props: LockerProviderProps) {
    const { addresses, account } = useBlockchainContext()


    const { data: lockedFlax } = useReadFlaxBalanceOf({ address: addresses.Flax, args: [addresses.FlaxLocker || "0x0"], "blockTag": "latest" })
    const userStakingInfo = useUserStakingInfo(addresses.FlaxLocker,account)
    const {data:unclaimedSFlax} = useReadFlaxLockerUnclaimedSFlax({address:addresses.FlaxLocker,args:[account]})
    return (<LockerContext.Provider value={{
        totalLockedFlax: lockedFlax,
        userLockedFlax:userStakingInfo?.lockedFlax,
        unclaimedSFlax,
        timeRemaining:userStakingInfo?.timeRemaining
    }} >
        {props.children}
    </LockerContext.Provider>
    )
}

export const useLockerContext = () => {
    const context = useContext(LockerContext);
    if (!context) {
        throw new Error('useLockerContext must be used within a LockerContextProvider');
    }
    return context;
};
