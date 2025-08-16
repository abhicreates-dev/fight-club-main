// import { useState } from 'react'
import Header1 from './header.jsx'
import Home from "./home.jsx"
import './App.css'
import { useMemo } from 'react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import "@solana/wallet-adapter-react-ui/styles.css";


const App = () =>{

  const endpoint = clusterApiUrl("devnet");
  const wallets = useMemo(() => [], []);


    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                  <Header1 />
                  <Home />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}


export default App
