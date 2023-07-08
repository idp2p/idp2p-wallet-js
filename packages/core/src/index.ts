import WalletProvider, { useWallet } from "./hooks/useWallet";
import  useCreateWalletForm from "./hooks/useCreateWalletForm";

export interface WalletStore {
    invoke(cmd: string, args?: Record<string, unknown>): Promise<unknown>;
}
export { useWallet, WalletProvider, useCreateWalletForm };

