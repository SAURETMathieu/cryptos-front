"use client";

import { useLocale } from "next-intl";

import useStore from "@/hooks/useStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BalanceCard() {
  const locale = useLocale();
  const wallets: any = useStore((state) => state.wallets);
  const totalBalance = wallets.reduce(
    (acc: any, wallet: any) => acc + wallet.balance,
    0
  );
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const totalBalanceFormatted = new Intl.NumberFormat(locale, options).format(
    totalBalance
  );
  return (
    <Card className="">
      <CardHeader className="">
        <CardTitle className="text-xl font-medium">Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${totalBalanceFormatted}</div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
  );
}
