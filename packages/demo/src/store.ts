import { WalletStore } from "@idp2p/wallet-react-core";
export default class LocalWalletStore implements WalletStore{
    async invoke(cmd: string, args: Record<string, unknown>): Promise<unknown> {
        console.log(cmd, args);
        return 0;
    }
}