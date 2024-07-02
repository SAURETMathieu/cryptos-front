import CurrentWalletProvider from "@/src/context/walletStoreProvider";

import WalletPage from "./WalletPage";
import ErrorPage from "@/src/app/ErrorPage";

export default async function Page({ params }: { params: { id: string } }) {
  const walletId = parseInt(params.id);

  if (isNaN(walletId)) {
    return <ErrorPage statusCode={404} message="Wallet ID should be a number" />;
  }

  return (
    <CurrentWalletProvider id={walletId}>
      <WalletPage />
    </CurrentWalletProvider>
  );
}
