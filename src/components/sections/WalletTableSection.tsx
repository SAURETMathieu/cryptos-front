import Table from "@/src/components/tables/Table";
import { blockchains } from "@/src/data/tableLabels";
import { columns } from "@/src/data/walletsColumns";

import { ColumnConfig } from "@/types/datasTable";

import { auth } from "@/lib/auth";
import fetchApi from "@/services/api/fetchApi";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const columnConfigs: ColumnConfig[] = [
  {
    id: "blockchain",
    title: "Blockchain",
    options: blockchains,
  },
];

export default async function WalletTableSection() {

  const session = await auth();
  let wallets:any= [];
  if (session) {
    wallets = await fetchApi("GET","wallets", null, session.account.id_token);
    console.log(wallets);
  }else{
    //TODO récupérer des données fakes
    redirect("/login");
  }

  return (
    <section className="w-full gap-4 p-4 pt-0">
      <Card className="h-fit w-full max-w-full">
        <CardHeader className="">
          <CardTitle className="text-xl font-medium">Wallets</CardTitle>
          <CardDescription className="max-w-lg text-balance text-sm leading-relaxed">
            Track your wallets
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          <Table
            data={wallets}
            columns={columns}
            columnConfigs={columnConfigs}
          />
        </CardContent>
      </Card>
    </section>
  );
}
