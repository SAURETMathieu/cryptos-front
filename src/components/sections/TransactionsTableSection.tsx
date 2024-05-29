import Table from "@/src/components/tables/Table";
import { transactionsType } from "@/src/data/tableLabels";
import { columns } from "@/src/data/transactionsColumns";
import { Icons } from "@/src/icons/icons";
import { transactions } from "@/src/utils/generateRandomTransactions";

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

export default function TransactionsTableSection() {
  return (
    <section className="w-full gap-4 p-4 pt-0">
      <Card className="h-fit w-full max-w-full">
        <CardHeader className="w-full">
          <CardTitle className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <Icons.logo
                className="size-8"
                aria-label="Logo de l'application"
              />
              BTC
            </div>
          </CardTitle>
          <CardDescription>Your transactions with BTC</CardDescription>
        </CardHeader>
        <CardContent className="">
          <Table
            data={transactions}
            columns={columns}
            columnConfigs={columnConfigs}
            filter={false}
          />
        </CardContent>
      </Card>
    </section>
  );
}
