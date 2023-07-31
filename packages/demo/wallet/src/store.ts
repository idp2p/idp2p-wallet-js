import { WalletStore } from "@idp2p/wallet-react-core";

type PublicKey = {
    id: string,
    pk: Uint8Array
};

type WalletSession = {
    ttl: number,
    created_at: number
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

export type AuthorizeRequest = {
    id: string,
    client_uri: string,
    query: string
};

// only demo
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

export default class LocalWalletStore implements WalletStore {
    async invoke(cmd: string, args: Record<string, unknown>): Promise<unknown> {
        console.log("cmd is ", cmd, "args is ", args);

        switch (cmd) {
            case "load_wallet":
                // convert wallet to state
            case "create_wallet":
                // create two key pairs for next and recovery
                // create assertions and authentications
                // create salt and iv for encryption
                // encrypt with password
                // create session
            case "login":
                // create session
            case "authorize":
                /* 
                  - client requests a challenge from server
                  - server generates a challenge and add it to cookie
                  - client sends the token(challenge, query) to wallet
                  - wallet signs the token and info and persist it to session 
                  - client call signin to exchange challenge with session cookie 

                  {
                     "client_uri" : "https://x.com",
                     "payload": "token(challenge, query)"
                  } 

                  "query" : {
                     personal {
                        name
                        phone
                     }
                   }

                  https://x.com?idp2p.json -> id, keys, endpoints(signout?) ...
                */
            case "change_password":
            case "create_key":
            case "revoke_key":
            case "import_sdt":
        }
        return "";
    }
}


            // agreements
            // name, surname, birthdate
            // phone, email, addresses, links