import { Suspense } from "react";
import { DataTable } from "@/src/components/tables/DataTable";
import { columns } from "@/src/data/botsColumns";
import { bots } from "@/src/data/botsData";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

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
          <Suspense fallback={<div>Loading...</div>}>
            <DataTable data={bots} columns={columns} />
          </Suspense>
        </CardContent>
      </Card>
    </section>
  );
}
