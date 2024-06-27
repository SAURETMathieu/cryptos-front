import Image from "next/image";
import Table from "@/src/components/tables/Table";
import { transactionsType } from "@/src/data/tableLabels";
import { columns } from "@/src/data/transactionsColumns";

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
    id: "type",
    title: "Type",
    options: transactionsType,
  },
];

export default function TransactionsTableSection({ wallet }: any) {
  const { balances } = wallet;
  const balancesWithTransactions = balances[0] ?? {};
  
  return (
    <section className="w-full gap-4 p-4 pt-0">
      <Card className="h-fit w-full max-w-full">
        <CardHeader className="w-full">
          <CardTitle className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
            {balancesWithTransactions.logo_url && (
              <Image
                src={balancesWithTransactions.logo_url}
                alt={balancesWithTransactions.name + " logo"}
                className="rounded-full"
                width={32}
                height={32}
              />
            )}
              {balancesWithTransactions?.asset}
            </div>
          </CardTitle>
          <CardDescription>
            Your transactions with {balancesWithTransactions?.asset}
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          <Table
            data={balancesWithTransactions.transactions}
            columns={columns}
            columnConfigs={columnConfigs}
            filter={false}
          />
        </CardContent>
      </Card>
    </section>
  );
}
