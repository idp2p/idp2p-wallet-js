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
        console.log("cmd is ", cmd, "args is ", args);

        switch (cmd) {
            case "load_wallet":
            case "create_wallet":
            // create two key pairs for next and recovery
            // create assertions and authentications
            // create salt and iv for encryption
            // encrypt with password

            case "login":
            case "authorize":
            case "change_password":
            case "create_key":
            case "revoke_key":
            case "import_data":
        }
        return "";
    }
}


            // agreements
            // name, surname, birthdate
            // phone, email, addresses, links