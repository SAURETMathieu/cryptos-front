import fetchApi from "@/services/api/fetchApi";
import { create } from "zustand";

import {
  WalletStoreState,
  WalletWithBalancesAndTransactions,
} from "@/types/store";

export const useWalletStore = create<WalletStoreState>((set, get) => ({
  wallet: null as WalletWithBalancesAndTransactions | null,
  currentBalance: null,
  balanceTotal: 0,
  profitsTotal: 0,
  devise: "USD",
  nbTransactions: 0,
  currentAsset: null as null | string,

  setCurrentBalance: (asset) => {
    if (asset) {
      const currentBalance = get().wallet?.balances.find(
        (balance) => balance?.asset.toLowerCase() === asset.toLowerCase()
      );
      set({ currentBalance });
    }
  },

  fetchWalletsById: async (id: number, token: string) => {
    try {
      const wallets = await fetchApi<any>("GET", `wallets/${id}`, null, token);

      if (Array.isArray(wallets) && wallets.length > 0) {
        const { balance, profits } = wallets[0];
        set({
          wallet: wallets[0],
          balanceTotal: balance,
          profitsTotal: profits,
        });
        get().setCurrentBalance("");
        return true;
      }
      set({ wallet: null });
      return false;
    } catch (error) {
      console.error("Failed to fetch data", error);
      return false;
    }
  },

  setCurrentAsset: (asset: string | null) => {
    set((state) => {
      if (state.currentAsset !== asset) {
        return { currentAsset: asset };
      }
      return state;
    });
  },

  resetWallet: () => set({ wallet: null }),

  initializeWallets: (wallet: WalletWithBalancesAndTransactions) =>
    set({ wallet }),
  // calcProfitsTotal: () => {
  //   const profitsTotal = get().wallet.reduce(
  //     (acc, wallet) => acc + wallet.profits,
  //     0
  //   );
  //   set({ profitsTotal });
  // },
  setDevise: (devise: string) => {
    set((state) => {
      if (state.devise !== devise) {
        return { devise };
      }
      return state;
    });
  },
  
  setNbTransactions: () => {
    set({ nbTransactions:0 })
  },
}));

export default useWalletStore;
