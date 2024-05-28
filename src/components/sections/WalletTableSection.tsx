import { Suspense } from "react";
import { DataTable } from "@/src/components/tables/DataTable";
import { columns } from "@/src/data/walletsColumns";
import { wallets } from "@/src/utils/generateRandomWallets";

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
          <Suspense fallback={<div>Loading...</div>}>
            <DataTable data={wallets} columns={columns} />
          </Suspense>
        </CardContent>
      </Card>
    </section>
  );
}
