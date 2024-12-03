import React, { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ConstractAddresses_nullable, ContractAddresses_unsettable, defaultContractAddresses_nullable, defaultContractAddresses_unsettable, MAX_UINT } from '../types/ContractAddreses';
import { useAccount, useBlockNumber, useChainId, useSimulateContract, useWaitForTransactionReceipt } from 'wagmi';
import { useAddresses } from '../hooks/useAddresses';
import { chain, create } from 'lodash';
import { useReadAVaultBalanceOf, useReadAVaultConfig, useReadFlaxAllowance, useReadFlaxBalanceOf, useReadFlaxLockerUnclaimedSFlax, useReadFlaxLockerUserStakingInfo, useReadSFlaxBalanceOf, useReadUsdcV1MaxStake, useSimulateAVault, useWatchAVaultEvent, useWriteFlaxApprove } from '../hooks/contract/reflax';
import { useBlockchainContext } from './BlockchainContextProvider';
import { useUserStakingInfo } from '../hooks/useUserStakingInfo';
import { useQueryClient } from '@tanstack/react-query';
import useERC20Allowance from '../hooks/useERC20Allowance';
import useApproveERC20 from '../hooks/useApproveERC20';
import { TX_status } from '../types/TX_Status';

export type big_optional = bigint | undefined

interface LockerStats {
    totalLockedFlax: big_optional,
    userLockedFlax: big_optional,
    unclaimedSFlax: big_optional,
    timeRemaining: big_optional,
    allowance: big_optional,
    approveLocker: () => any
    approveLockerStatus: TX_status

}


interface LockerProviderProps {
    children: ReactNode;
}

const LockerContext = createContext<LockerStats>({
    totalLockedFlax: undefined,
    userLockedFlax: undefined,
    unclaimedSFlax: undefined,
    timeRemaining: undefined,
    allowance: undefined,
    approveLocker: () => { return Promise.resolve("loading") },
    approveLockerStatus: TX_status.idle

})

export function LockerContextProvider(props: LockerProviderProps) {
    const { addresses, account } = useBlockchainContext()
    const { data: lockedFlax } = useReadFlaxBalanceOf({ address: addresses.Flax, args: [addresses.FlaxLocker || "0x0"], "blockTag": "latest" })
    const userStakingInfo = useUserStakingInfo(addresses.FlaxLocker, account)
    const { data: unclaimedSFlax } = useReadFlaxLockerUnclaimedSFlax({ address: addresses.FlaxLocker, args: [account] })
    const { data: blockNumber } = useBlockNumber({ watch: true })
    const { allowance, queryKey } = useERC20Allowance({ token: addresses.Flax, target: addresses.FlaxLocker, account, blockNumber: Number(blockNumber) })
    const { status: approveLockerStatus, approve: approveLocker } = useApproveERC20({ flax: addresses.Flax, target: addresses.FlaxLocker, watchKey: queryKey })

    return (<LockerContext.Provider value={{
        totalLockedFlax: lockedFlax,
        userLockedFlax: userStakingInfo?.lockedFlax,
        unclaimedSFlax,
        timeRemaining: userStakingInfo?.timeRemaining,
        allowance,
        approveLocker,
        approveLockerStatus
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
