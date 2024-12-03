import { useWaitForTransactionReceipt } from "wagmi"
import { address, MAX_UINT } from "../types/ContractAddreses"
import { useWriteFlaxApprove } from "./contract/reflax"
import { useEffect, useMemo } from "react"
import { TX_status } from "../types/TX_Status"
import { QueryClient, QueryKey, useQueryClient } from "@tanstack/react-query"

interface props {
    flax: address
    target: address,
    watchKey: QueryKey
}

interface ReturnProps {
    status: TX_status
    approve: () => void

}

export default function useApproveERC20({ flax, target, watchKey }: props): ReturnProps {
    const { writeContract, status, data: hash } = useWriteFlaxApprove()
    const queryClient = useQueryClient()
    const { isLoading, isSuccess } =
        useWaitForTransactionReceipt({
            hash,
        })


    const approve = useMemo(() => {
        if (!flax || !target) {
            return () => console.log("Addresses are not loaded yet");
        }
        return () => {
            writeContract({
                address: flax,
                args: [target!, MAX_UINT]
            });

        }
    }, [flax, target, writeContract]);

    //this seems to not fire?
    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => { queryClient.invalidateQueries({ queryKey: watchKey }) }, 12000);
        }
    }, [isSuccess])

    return {
        approve,
        status: isLoading ? TX_status.loading : (isSuccess ? TX_status.success : TX_status.idle)
    }
}