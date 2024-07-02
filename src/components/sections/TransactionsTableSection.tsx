"use client";

import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import useCurrentWalletStore from "@/hooks/useCurrentWalletStore";
import TransactionsTable from "@/components/tables/TransactionsTable";

export default function TransactionsTableSection() {
  const balance:any = useCurrentWalletStore((state) => state.currentBalance);

  return (
    <section className="w-full gap-4 p-4 pt-0">
      <Card className="h-fit w-full max-w-full">
        <CardHeader className="w-full">
          <CardTitle className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
            {balance?.logo_url && (
              <Image
                src={balance.logo_url}
                alt={balance.name + " lllogo"}
                className="rounded-full"
                width={32}
                height={32}
              />
            )}
              {balance?.asset}
            </div>
          </CardTitle>
          <CardDescription>
            Your transactions with {balance?.asset}
          </CardDescription>
        </CardHeader>
        <CardContent className="">
        <TransactionsTable/>
        </CardContent>
      </Card>
    </section>
  );
}
