"use client";

import { useLocale } from "next-intl";

import useStore from "@/hooks/useStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BalanceCardProps {
  wallet?: any;
}

export default function BalanceCard({wallet}: BalanceCardProps) {
  const locale = useLocale();
  const balanceOfWallet: any = wallet?.balance;
  const balanceOfAllWallets: any = useStore((state) => state.balanceTotal);
  const balanceTotal: any = wallet ? balanceOfWallet : balanceOfAllWallets;
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const totalBalanceFormatted = new Intl.NumberFormat(locale, options).format(
    balanceTotal
  );
  return (
    <Card className="">
      <CardHeader className="">
        <CardTitle className="text-2xl font-medium">Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${totalBalanceFormatted}</div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
  );
}
