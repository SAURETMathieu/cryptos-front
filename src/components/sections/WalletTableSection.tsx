import { DataTable } from "@/src/components/tables/DataTable";
import { wallets } from "@/src/utils/generateRandomWallets";
import { columns } from "@/src/data/walletsColumns";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function WalletTableSection() {
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
          <DataTable data={wallets} columns={columns} />
        </CardContent>
      </Card>
    </section>
  );
}
