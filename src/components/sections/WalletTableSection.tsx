import Table from "@/src/components/tables/Table";
import { networks } from "@/src/data/tableLabels";
import { columns } from "@/src/data/walletsColumns";
import { wallets } from "@/src/utils/generateRandomWallets";

import { ColumnConfig } from "@/types/datasTable";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const columnConfigs: ColumnConfig[] = [
  {
    id: "network",
    title: "Network",
    options: networks,
  },
];

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
