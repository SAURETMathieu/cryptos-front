import { redirect } from "next/navigation";
import fetchApi from "@/services/api/fetchApi";
import { WalletProvider } from "@/src/context/walletsProvider";

import { auth } from "@/lib/auth";

import WalletPage from "./WalletPage";

export default async function Page() {
  const session = await auth();
  let wallets: any[] = [];
  if (session) {
    const fetchedWallets = await fetchApi<any[] | null>("GET", "wallets", null, session.account.id_token);
    if (fetchedWallets && Array.isArray(fetchedWallets)) {
      wallets = fetchedWallets;
    }
  } else {
    //TODO récupérer des données fakes
    redirect("/login");
  }

  return (
    <WalletProvider initialWallets={wallets}>
      <WalletPage />
    </WalletProvider>
  );
}
