import fetchApi from "@/services/api/fetchApi";
import { create } from "zustand";
import { StoreState, WalletWithBalancesAndTransactions } from "@/types/store";

export const useStore = create<StoreState>((set, get) => ({
  wallets: [],
  balanceTotal: 0,
  balanceOfAllWallets: [],
  profitsTotal: 0,
  devise: "USD",
  fetchWallets: async (token: string) => {
    try {
      const wallets = await fetchApi("GET", "wallets", null, token);
      if (wallets instanceof Array) {
        set({ wallets });
        get().calcBalanceTotal();
        get().calcBalanceOfAllWallets();
        get().calcProfitsTotal();
      }
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  },
  resetWallets: () => set({ wallets: [] }),
  initializeWallets: (wallets: WalletWithBalancesAndTransactions[]) => set({ wallets }),
  calcBalanceTotal: () => {
    const balanceTotal = get().wallets.reduce(
      (acc, wallet) => acc + wallet.balance,
      0
    );
    set({ balanceTotal });
  },
  calcBalanceOfAllWallets: () => {
    const balanceOfAllWallets = get().wallets.map((wallet) => ({
      id: wallet.id,
      balance: wallet.balance,
    }));
    set({ balanceOfAllWallets });
  },
  calcProfitsTotal: () => {
    const profitsTotal = get().wallets.reduce(
      (acc, wallet) => acc + wallet.profits,
      0
    );
    set({ profitsTotal });
  },
  setDevise: (devise: string) => set({ devise }),
}));

export const addWallet = (wallet: WalletWithBalancesAndTransactions) => {
  const {
    wallets,
    calcBalanceTotal,
    calcBalanceOfAllWallets,
    calcProfitsTotal,
  } = useStore.getState();
  useStore.setState({ wallets: [...wallets, wallet] });
  calcBalanceTotal();
  calcBalanceOfAllWallets();
  calcProfitsTotal();
};

export const updateWallet = (updatedWallet: WalletWithBalancesAndTransactions) => {
  const { wallets } = useStore.getState();
  useStore.setState({
    wallets: wallets.map((wallet) =>
      wallet.id === updatedWallet.id
        ? { ...wallet, name: updatedWallet.name }
        : wallet
    ),
  });
};

export const deleteWallet = (id: number) => {
  const {
    wallets,
    calcBalanceTotal,
    calcBalanceOfAllWallets,
    calcProfitsTotal,
  } = useStore.getState();
  useStore.setState({ wallets: wallets.filter((wallet) => wallet.id !== id) });
  calcBalanceTotal();
  calcBalanceOfAllWallets();
  calcProfitsTotal();
};

export default useStore;
