import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { WalletProvider } from '@idp2p/wallet-react-core'
import LocalWalletStore from './store.ts'
import "@picocss/pico"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WalletProvider store={new LocalWalletStore()}>
       <App />
    </WalletProvider>
  </React.StrictMode>,
)
