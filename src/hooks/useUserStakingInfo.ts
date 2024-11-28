import { useReadFlaxLockerUserStakingInfo } from "./contract/reflax";
import {address} from '../types/ContractAddreses'
import { big_optional } from "../contexts/BlockchainContextProvider";
interface UserStakingInfo {
    timeRemaining:big_optional; //converted to seconds
    weight:big_optional; //basis_points multiplier. anything above 10_000 is boosted.
    lastUpdate:big_optional;
    lockedFlax:big_optional;
}

export function useUserStakingInfo (address:address,account:address):UserStakingInfo|undefined{

    const {data:userStakingInfo} = useReadFlaxLockerUserStakingInfo({address,args:[account||"0x0"]})
    let info:UserStakingInfo | undefined = undefined
    if(userStakingInfo){
        info = {
            timeRemaining:userStakingInfo[0],
            weight:userStakingInfo[1],
            lastUpdate:userStakingInfo[2],
            lockedFlax:userStakingInfo[3]
        }
    }
    return info
}