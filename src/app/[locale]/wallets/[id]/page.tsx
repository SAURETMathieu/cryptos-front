import { redirect } from "next/navigation";
import fetchApi from "@/services/api/fetchApi";

import { auth } from "@/lib/auth";

import WalletPage from "./WalletPage";

export default async function Page({ params }: { params: { id: number } }) {
  const session = await auth();
  let walletWithCryptos = {} as any;
  if (session) {
    const fetchedWallet = await fetchApi("GET", `wallets/${params.id}`, null, session.account.id_token);
    walletWithCryptos = fetchedWallet;
  } else {
    //TODO récupérer des données fakes
    redirect("/login");
  }

  return (
    <WalletPage walletWithCryptos={walletWithCryptos}/>
  );
}
