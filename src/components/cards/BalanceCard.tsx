"use client";

import { useLocale } from "next-intl";

import useCurrentWalletStore from "@/hooks/useCurrentWalletStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useStore from "@/hooks/useStore";

interface BalanceCardProps {
  isWalletsPage?: boolean;
}

export default function BalanceCard({isWalletsPage=false}: BalanceCardProps) {
  const locale = useLocale();
  const balanceOfAllWallets = useStore((state) => state.balanceTotal);
  const balanceOfWallet = useCurrentWalletStore((state) => state.wallet?.balance);
  const balanceTotal = isWalletsPage ? balanceOfAllWallets : balanceOfWallet;
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const totalBalanceFormatted = new Intl.NumberFormat(locale, options).format(
    balanceTotal ?? 0
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
