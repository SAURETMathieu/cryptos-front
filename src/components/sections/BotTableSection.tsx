
import Table from "@/src/components/tables/Table";
import { columns } from "@/src/data/botsColumns";
import { bots } from "@/src/data/botsData";
import { statuses, strategies } from "@/src/data/tableLabels";

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
    id: "status",
    title: "Status",
    options: statuses,
  },
  {
    id: "strategy",
    title: "Strategy",
    options: strategies,
  },
];

export default function BotTableSection() {
  return (
    <section className="w-full gap-4 p-4 pt-0">
      <Card className="h-fit w-full max-w-full">
        <CardHeader className="">
          <CardTitle className="text-xl font-medium">Bots</CardTitle>
          <CardDescription className="max-w-lg text-balance text-sm leading-relaxed">
            Track your bots
          </CardDescription>
        </CardHeader>
        <CardContent className="">
        <Table
            data={bots}
            columns={columns}
            columnConfigs={columnConfigs}
            filter={false}
          />
        </CardContent>
      </Card>
    </section>
  );
}
