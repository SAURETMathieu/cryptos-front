import Table from "@/src/components/tables/Table";
import { columns } from "@/src/data/cryptosColumns";

//import { cryptos } from "@/src/utils/generateRandomCryptos";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function CryptosTableSection({ walletWithCryptos }: any) {
  const { balances } = walletWithCryptos;

  return (
    <section className="w-full gap-4 p-4 pt-0">
      <Card className="h-fit w-full max-w-full">
        <CardHeader className="">
          <CardTitle className="text-xl font-medium">Cryptos</CardTitle>
          <CardDescription className="max-w-lg text-balance text-sm leading-relaxed">
            Track your cryptos
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          <Table data={balances} columns={columns} rawLink="asset"/>
        </CardContent>
      </Card>
    </section>
  );
}
