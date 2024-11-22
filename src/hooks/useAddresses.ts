import { useState, useEffect, useDeferredValue } from 'react';
import { ConstractAddresses_nullable, ContractAddresses_unsettable, defaultContractAddresses_nullable, defaultContractAddresses_unsettable, unsettableAddress } from '../types/ContractAddreses';
import { ChainId } from '../types/ChainId';
import _ from 'lodash'

const sanitizeAddress = (address: unsettableAddress): `0x${string}` | undefined => {
    if (address == 'UNSET')
        return undefined
    return address
}

export const useAddresses = (chainId: ChainId | undefined) => {
    const [addresses, setAddresses] = useState<ContractAddresses_unsettable>(defaultContractAddresses_unsettable)
    const deferredChainId = useDeferredValue(chainId)
    const deferredAddresses = useDeferredValue(addresses)
    const [addresses_nullable, setAddresses_nullable] = useState<ConstractAddresses_nullable>(defaultContractAddresses_nullable)


    useEffect(() => {
        console.log('chain id changed')
        if (deferredChainId) {

            if (deferredChainId == ChainId.anvil) {
                (async () => {

                    const response = await fetch('http://localhost:3010/api/contract-addresses', { mode: 'cors', method: 'GET', credentials: "omit", cache: "no-cache" })
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data: ContractAddresses_unsettable = await response.json();
                    if (!_.isEqual(data, addresses)) {
                        setAddresses(data)
                    }
                })()

            } else if (deferredChainId == ChainId.arbitrum) {
                setAddresses({
                    USDC: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
                    USDe: '0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34',
                    USDx: '0xb2F30A7C980f052f02563fb518dcc39e6bf38175',
                    Flax: 'UNSET',
                    SFlax: 'UNSET',
                    FlaxLocker: 'UNSET',
                    USDe_USDx_crv: 'UNSET',
                    USDC_USDe_crv: 'UNSET',
                    convexPool: '0xe062e302091f44d7483d9D6e0Da9881a0817E2be',
                    convexBooster: '0xF403C135812408BFbE8713b5A23a04b3D48AAE31',
                    vault: 'UNSET',
                    yieldSource: 'UNSET',
                    oracle: 'UNSET',
                    refPair: 'UNSET', // FLX/Weth
                    rewardPairAddress: '0xbe3B9c3700171183b2B3F827D8833212d0197a96', // Crv/Weth
                    boosterV1: 'UNSET',
                })
            }
        }
    }, [deferredChainId])


    useEffect(() => {
        if (deferredChainId) {
            const unsetAddresses = Object.keys(deferredAddresses).filter((addressKey: string) => (addresses as any)[addressKey] == 'UNSET')
            if (!_.isEqual(deferredAddresses, defaultContractAddresses_unsettable) && unsetAddresses.length > 0) {
                console.warn('The following addresses have not been set for this chain ' + JSON.stringify(unsetAddresses, null, 4))
            }
            else {
                console.log('All addresses loaded')
                let nullable = { ...addresses } as ConstractAddresses_nullable

                Object.keys(addresses)
                    .forEach((key: string) => {
                        const value = (addresses as any)[key] as string

                        (nullable as any)[key] = value == 'UNSET' ? undefined : value;
                    })
                setAddresses_nullable(nullable)
            }
        }
    }, [deferredAddresses, deferredChainId])
    return useDeferredValue(addresses_nullable)
}
