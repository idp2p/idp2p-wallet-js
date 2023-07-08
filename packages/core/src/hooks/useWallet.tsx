import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode
} from "react";
import { WalletStore } from "..";

interface WalletProps {
    children?: ReactNode;
    store: WalletStore
}

type Wallet = {
    session?: AccountSession;
};

type AccountSession = {
    id: string;
};

interface WalletContextType {
    wallet: Wallet | null;
    setWallet: (wallet: Wallet | null) => void;
    store: WalletStore
}
// Sign in
// Sign out
// Sign up 
export const WalletContext = createContext<WalletContextType | null>(null);

const WalletProvider = ({ children, store }: WalletProps) => {
    const [wallet, setWallet] = useState<Wallet | null>(null);
    async function fetchWallet() {
        const persisted: any = await store.invoke("load_wallet");
        if (persisted) {
            setWallet(persisted);
        }
    }

    useEffect(() => {
        fetchWallet();
    }, []);
    useEffect(() => {
        store.invoke("persist_wallet", wallet!);
    }, [wallet]);
    return (
        <WalletContext.Provider value={{  wallet, setWallet, store }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWallet = () => {
    return useContext(WalletContext) as WalletContextType;
};

export default WalletProvider;