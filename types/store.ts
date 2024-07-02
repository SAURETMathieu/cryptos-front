import { Wallet, Balance, Transaction } from '@prisma/client';

export type WalletWithBalancesAndTransactions = Wallet & {
  balance: number;
  profits: number;
  balances: (Balance & {
    balanceUsd: number;
    asset: string;
    cryptoId: number;
    cryptoName: string;
    digit: number;
    logo_url: string;
    currency: string;
    transactions: Transaction[];
    day: number;
    day7: number;
    month: number;
    fees: number;
    quantity: number;
    profits: number;
  })[];
};

export interface StoreState {
  wallets: WalletWithBalancesAndTransactions[];
  balanceTotal: number;
  balanceOfAllWallets: { id: number; balance: number }[];
  profitsTotal: number;
  devise: string;
  fetchWallets: (token: string) => Promise<void>;
  resetWallets: () => void;
  initializeWallets: (wallets: WalletWithBalancesAndTransactions[]) => void;
  calcBalanceTotal: () => void;
  calcBalanceOfAllWallets: () => void;
  calcProfitsTotal: () => void;
  setDevise: (devise: string) => void;
}

export interface FetchWalletByIdResponse {
  status: number;
  message: string;
}

export interface WalletStoreState {
  wallet: WalletWithBalancesAndTransactions | null;
  currentBalance: any;
  nbTransactions: number;
  balanceTotal: number;
  profitsTotal: number;
  devise: string;
  setCurrentBalance: (asset:string) => void;
  fetchWalletsById: (id:number, token: string) => Promise<boolean>;
  resetWallet: () => void;
  initializeWallets: (wallet: WalletWithBalancesAndTransactions) => void;
  //calcProfitsTotal: () => void;
  currentAsset: string | null;
  setCurrentAsset: (asset: string | null) => void;
  setDevise: (devise: string) => void;
}