"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface WalletProviderProps {
  children: ReactNode;
  initialWallets: any[];
}

interface WalletContextType {
  wallets: any[];
  addWallet: (wallet: any) => void;
  updateWallet: (updatedWallet: any) => void;
  deleteWallet: (id: number) => void;
}

const WalletContext = createContext<WalletContextType | null>(null);

export function useWalletsContext() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallets must be used within a WalletsProvider");
  }
  return context;
};

export const WalletProvider: React.FC<WalletProviderProps> = ({
  children,
  initialWallets,
}) => {
  const [wallets, setWallets] = useState(initialWallets);

  const addWallet = (wallet: any) => {
    setWallets((prevWallets) => [...prevWallets, wallet]);
  };

  const updateWallet = (updatedWallet: any) => {
    console.log(updatedWallet);

    setWallets((prevWallets) =>
      prevWallets.map((wallet) =>
        wallet.id === updatedWallet.id ? updatedWallet : wallet
      )
    );
  };

  const deleteWallet = (id: number) => {
    setWallets((prevWallets) => prevWallets.filter((wallet) => wallet.id !== id));
  }

  return (
    <WalletContext.Provider value={{ wallets, addWallet, updateWallet, deleteWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
