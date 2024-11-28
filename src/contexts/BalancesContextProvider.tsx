import { ReactNode, createContext, useContext } from 'react';
import { useReadFlaxBalanceOf, useReadFlaxLockerUnclaimedSFlax, useReadSFlaxBalanceOf } from '../hooks/contract/reflax';
import { useBlockchainContext } from './BlockchainContextProvider';

export type big_optional = bigint | undefined

interface TokenBalances {
    flaxBalance: big_optional,
    sFlaxBalance: big_optional
    usdcBalance: big_optional
    unclaimedSFlax: big_optional
}

interface BalancesProviderProps {
    children: ReactNode;
}

const BalancesContext = createContext<TokenBalances>({

    flaxBalance: undefined,
    sFlaxBalance: undefined,
    usdcBalance: undefined,
    unclaimedSFlax: undefined
})

export function BalancesContextProvider(props: BalancesProviderProps) {

    const { addresses, account } = useBlockchainContext()

    const { data: usdcBalance } = useReadFlaxBalanceOf({ address: addresses.USDC, args: [account] })
    const { data: sFlaxBalance } = useReadSFlaxBalanceOf({ address: addresses.SFlax, args: [account] })
    const { data: flaxBalance } = useReadFlaxBalanceOf({ address: addresses.Flax, args: [account] })
    const { data: unclaimedSFlax } = useReadFlaxLockerUnclaimedSFlax({ address: addresses.FlaxLocker, args: [account] });

    return (<BalancesContext.Provider value={{
        usdcBalance,
        flaxBalance,
        sFlaxBalance,
        unclaimedSFlax
    }} >
        {props.children}
    </BalancesContext.Provider>
    )
}

export const useBalancesContext = () => {
    const context = useContext(BalancesContext);
    if (!context) {
        throw new Error('useBalancesContext must be used within a BalancesContextProvider');
    }
    return context;
};
