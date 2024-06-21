import { redirect } from "next/navigation";
import fetchApi from "@/services/api/fetchApi";

import { auth } from "@/lib/auth";

import WalletPage from "./WalletPage";
import ErrorPage from "@/src/app/ErrorPage";

export default async function Page({ params }: { params: { id: string } }) {
  const session = await auth();
  let walletWithCryptos = {} as any;
  const walletId = parseInt(params.id);
  if (session) {
    const fetchedWallet: any = await fetchApi(
      "GET",
      `wallets/${params.id}`,
      null,
      session.account.id_token
    );

    if (fetchedWallet.status === 401) {
      return <ErrorPage statusCode={401} message={fetchedWallet.message}/>;
    } else if (fetchedWallet.status === 404) {
      return <ErrorPage statusCode={404} message={fetchedWallet.message}/>;
    }

    walletWithCryptos = fetchedWallet;
  } else {
    //TODO récupérer des données fakes
    redirect("/login");
  }

  return <WalletPage walletWithCryptos={walletWithCryptos} walletId={walletId}/>;
}
