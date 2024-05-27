import { DataTable } from "@/src/components/tables/DataTable";
import { columns } from "@/src/data/transactionsColumns";
import { Icons } from "@/src/icons/icons";
import { transactions } from "@/src/utils/generateRandomTransactions";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

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
          <DataTable data={transactions} columns={columns} />
        </CardContent>
      </Card>
    </section>
  );
}
