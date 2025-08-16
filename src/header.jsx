import { publicKey } from "@project-serum/anchor/dist/cjs/utils";
import "./App.css";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton, WalletModalProvider } from "@solana/wallet-adapter-react-ui";

function Header1() {
  const { connected , publicKey } = useWallet();
  return (
    <>
      <header className="flex items-center justify-between px-6 py-3 
      bg-black/100 backdrop-blur-md border border-white/20 shadow-md 
      rounded-lg max-w-5xl mx-auto mt-4">
        <div className="flex items-center gap-2">
          <div>
            <h1 style={{ color: "white", fontWeight: "700", fontSize: "20px" }}>
              Fight<span style={{ color: "#FF90E8" }}>Club</span>
            </h1>
          </div>
        </div>

        <nav className="flex gap-6 text-gray-200 text-sm font-medium">
          <a href="#">Features</a>
          <a href="#">Integrations</a>
        </nav>

        <div>
            <WalletMultiButton />
        </div>
        {/* <button className="bg-[#FF90E8] hover:bg-[#FF6DE2] text-black px-4 py-2 rounded-md font-medium shadow-sm">
          Select Wallet
        </button> */}
      </header>
    </>
  );
}


export default Header1;

