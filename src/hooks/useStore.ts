import fetchApi from "@/services/api/fetchApi";
import { create } from "zustand";

export const useStore = create((set: any) => ({
  wallets: [] as any[],
  balanceTotal: 0,
  balanceOfAllWallets: [] as any[],
  profitsTotal: 0,
  devise: "USD",
  fetchWallets: async (token: string) => {
    try {
      const wallets = await fetchApi("GET", "wallets", null, token);
      useStore.getState().calcBalanceTotal();
      useStore.getState().calcBalanceOfAllWallets();
      useStore.getState().calcProfitsTotal();
      set({ wallets });
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  },
  resetWallets: () => set({ wallets: [] }),
  initializeWallets: (wallets: any) => set({ wallets }),
  calcBalanceTotal: () => {
    const wallets = useStore.getState().wallets;
    const balanceTotal = wallets.reduce(
      (acc: number, wallet: any) => acc + wallet.balance,
      0
    );
    set({ balanceTotal });
  },
  calcBalanceOfAllWallets: () => {
    const wallets = useStore.getState().wallets;
    const balanceOfAllWallets = wallets.map((wallet: any) => ({
      id: wallet.id,
      balance: wallet.balance,
    }));
    set({ balanceOfAllWallets });
  },
  calcProfitsTotal: () => {
    const wallets = useStore.getState().wallets;
    const profitsTotal = wallets.reduce(
      (acc: number, wallet: any) => acc + wallet.profits,
      0
    );
    set({ profitsTotal });
  },
  setDevise: (devise: string) => set({ devise }),
}));

export const addWallet = (wallet: any) => {
  const wallets = useStore.getState().wallets;
  useStore.setState({ wallets: [...wallets, wallet[0]] });
  useStore.getState().calcBalanceTotal();
  useStore.getState().calcBalanceOfAllWallets();
  useStore.getState().calcProfitsTotal();
};

export const updateWallet = (updatedWallet: any) => {
  const wallets = useStore.getState().wallets;
  useStore.setState({
    wallets: wallets.map((wallet: any) =>
      wallet.id === updatedWallet.id ? { ...wallet, name: updatedWallet.name } : wallet
    ),
  });
};

export const deleteWallet = (id: number) => {
  const wallets = useStore.getState().wallets;
  useStore.setState({
    wallets: wallets.filter((wallet: any) => wallet.id !== id),
  });
  useStore.getState().calcBalanceTotal();
  useStore.getState().calcBalanceOfAllWallets();
  useStore.getState().calcProfitsTotal();
};

export default useStore;
