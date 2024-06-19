import fetchApi from "@/services/api/fetchApi";
import { create } from "zustand";

export const useStore = create((set: any) => ({
  wallets: [] as any[],
  hasFetched: false,
  fetchWallets: async (token: string) => {
    try {
      const wallets = await fetchApi("GET", "wallets", null, token);
      set({ wallets });
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  },
  resetWallets: () => set({ wallets: [], hasFetched: false }),
  initializeWallets: (wallets: any) => set({ wallets, hasFetched: false }),
}));

export const addWallet = (wallet: any) => {
  const wallets = useStore.getState().wallets;
  useStore.setState({ wallets: [...wallets, wallet] });
};

export const updateWallet = (updatedWallet: any) => {
  const wallets = useStore.getState().wallets;
  useStore.setState({
    wallets: wallets.map((wallet: any) =>
      wallet.id === updatedWallet.id ? updatedWallet : wallet
    ),
  });
};

export const deleteWallet = (id: number) => {
  const wallets = useStore.getState().wallets;
  useStore.setState({
    wallets: wallets.filter((wallet: any) => wallet.id !== id),
  });
};

export default useStore;
