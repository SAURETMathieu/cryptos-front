import CurrentWalletProvider from "@/src/context/walletStoreProvider";
import TransactionsPage from "./TransactionsPage";
import ErrorPage from "@/src/app/ErrorPage";

export default async function Page({ params }: { params: { asset: string, id:number } }) {

  const walletId = params.id;

  if (isNaN(walletId)) {
    return <ErrorPage statusCode={404} message="Wallet ID should be a number" />;
  }

  return (
    <CurrentWalletProvider id={walletId} asset={params.asset}>
      <TransactionsPage />
    </CurrentWalletProvider>
  );
}
