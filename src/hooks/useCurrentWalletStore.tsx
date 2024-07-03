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
  currentAsset: null as null | string,
  currentTransactionsIndexes: null as null | number[],
  indexOfTransactions: 0,

  setCurrentBalance: (asset) => {
    if (asset) {
      const currentBalance = get().wallet?.balances.find(
        (balance) => balance?.asset.toLowerCase() === asset.toLowerCase()
      );
      set({ currentBalance });
      set({ indexOfTransactions: 0 });
    }
  },

  setCurrentTransactionsIndexes: (rowsTransactions: any) => {
    const transactionsIndexes = rowsTransactions.map((row: any) => row.index);
    set({ currentTransactionsIndexes: transactionsIndexes });
  },

  setIndexOfTransactions: (index: number) => {
    if(!index || index < 0 || isNaN(index)){
      index = 0;
    }
    set({ indexOfTransactions: index });
  },

  setIndexOfTransactionsDiff: (indexDiff: number) => {
    const currentIndex = get().indexOfTransactions;
    const nbTransactions = get().currentTransactionsIndexes?.length ?? 0;
    let newIndex = currentIndex + indexDiff;

    if (newIndex < 0) {
      newIndex = nbTransactions + newIndex;
      newIndex = Math.max(0, newIndex);
    } else {
      newIndex = newIndex % nbTransactions;
    }
    set({ indexOfTransactions: newIndex });
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

  setDevise: (devise: string) => {
    set((state) => {
      if (state.devise !== devise) {
        return { devise };
      }
      return state;
    });
  },
}));

export default useWalletStore;
