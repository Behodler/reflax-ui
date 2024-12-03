import { useEffect, useState } from "react"
import { address, address_nonnull } from "../types/ContractAddreses"
import { useReadFlaxAllowance } from "./contract/reflax"
import { QueryKey, useQueryClient } from "@tanstack/react-query"
import { big_optional } from "../contexts/BlockchainContextProvider"

interface props {
    blockNumber: number
    account: address_nonnull,
    target: address
    token: address
}

export default function useERC20Allowance({ token, blockNumber, account, target }: props): { allowance: big_optional, queryKey: QueryKey } {
    const { data: allowance, queryKey } = useReadFlaxAllowance({ address: token, args: [account, target || '0x0'], blockTag: "latest" })
 
    const queryClient = useQueryClient()
    const [updateCounter, setUpdateCounter] = useState<number>(0)
    useEffect(() => {
        if (blockNumber % 10 == 0)
            setUpdateCounter(updateCounter + 1);
    }, [blockNumber])

    useEffect(() => {
        queryClient.invalidateQueries({ queryKey })
    }, [updateCounter])

    return { allowance, queryKey }
}

