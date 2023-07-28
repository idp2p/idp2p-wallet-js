import { WalletStore } from "@idp2p/wallet-react-core";

type PublicKey = {
    id: string,
    pk: Uint8Array
};

type WalletSession = {
    ttl: number,
    created_at: number
};

export type Wallet = {
    id: string,
    name: string,
    next_pk_digest: Uint8Array,
    next_rec_pk_digest: Uint8Array,
    salt: Uint8Array,
    iv: Uint8Array,
    cipher: Uint8Array,
    assertions: PublicKey[],
    authentications: PublicKey[],
    agreements: PublicKey[],
    session?: WalletSession,
};

export type WalletState = {
    id: string,
    name: string,
    next_pk_digest: Uint8Array,
    next_rec_pk_digest: Uint8Array,
    assertions: PublicKey[],
    authentications: PublicKey[],
    agreements: PublicKey[],
    session?: WalletSession
}

export default class LocalWalletStore implements WalletStore {
    async invoke(cmd: string, args: Record<string, unknown>): Promise<unknown> {
        console.log(cmd, args);
        return 0;
    }
}