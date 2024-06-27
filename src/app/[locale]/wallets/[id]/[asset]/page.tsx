import { redirect } from "next/navigation";
import fetchApi from "@/services/api/fetchApi";

import { auth } from "@/lib/auth";

import TransactionsPage from "./TransactionsPage";
import ErrorPage from "@/src/app/ErrorPage";

export default async function Page({ params }: { params: { asset: string, id:number } }) {
  const session = await auth();
  let walletsWithCryptos = {} as any;
  const walletId = params.id;
  if (session) {
    const fetchedWallet: any = await fetchApi(
      "GET",
      `wallets/${walletId}`,
      null,
      session.account.id_token
    );

    if (fetchedWallet.status === 401) {
      return <ErrorPage statusCode={401} message={fetchedWallet.message}/>;
    } else if (fetchedWallet.status === 404) {
      return <ErrorPage statusCode={404} message={fetchedWallet.message}/>;
    }
    walletsWithCryptos = fetchedWallet;
  } else {
    //TODO récupérer des données fakes
    redirect("/login");
  }

  return <TransactionsPage walletsWithCryptos={walletsWithCryptos} asset={params.asset}/>;
}
