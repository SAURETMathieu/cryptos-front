"use client";

import React, { useMemo } from 'react';
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Settings } from "lucide-react";
import formatIdx from '@/utils/formatIdx';
import CopyButton from '@/components/buttons/copyButton';
import useCurrentWalletStore from "@/hooks/useCurrentWalletStore";

export default function InfosBlock({isTransactionsPage=false}) {

  const wallet = useCurrentWalletStore((state) => state.wallet);
  const currentBalance = useCurrentWalletStore((state) => state.currentBalance);

  const cardContent = useMemo(() => {
    let nbTransactions: number | undefined;
    if (isTransactionsPage) {
      nbTransactions = currentBalance?.transactions?.length ?? 0;
    } else {
      nbTransactions = wallet?.balances.reduce((acc: number, balance: any) => {
        return balance.transactions?.length ? acc + balance.transactions?.length : acc + 0;
      }, 0);
    }

    return (
      <CardContent className="flex justify-between p-6 py-2">
        <div className="flex w-10/12 items-center justify-evenly gap-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-base font-medium">Blockchain:</span>
            <span className="text-muted-foreground">{wallet?.blockchain}</span>
          </div>
          <div className="hidden gap-2 sm:flex sm:items-center sm:justify-between">
            <span className="text-base font-medium">Transactions:</span>
            <span className="text-muted-foreground">{nbTransactions}</span>
          </div>
          <div className="hidden gap-2 md:flex md:items-center md:justify-between lg:hidden xl:flex">
            <span className="text-base font-medium">Address:</span>
            <span className="text-muted-foreground" title={wallet?.address ?? ""}>{formatIdx(wallet?.address ?? "")}</span>
            <CopyButton toCopy={wallet?.address ?? ""}/>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Settings className="size-5" />
        </Button>
      </CardContent>
    );
  }, [wallet, currentBalance, isTransactionsPage]);

  return (
    <section className="w-full p-4 py-2 pb-0">
      <Card className="h-fit w-full max-w-full">
        {cardContent}
      </Card>
    </section>
  );
}
