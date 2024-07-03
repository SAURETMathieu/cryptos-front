"use client";

import { useLocale } from "next-intl";
import useCurrentWalletStore from "@/hooks/useCurrentWalletStore";
import useStore from "@/hooks/useStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProfitsCardProps {
  isWalletsPage?: boolean;
  isTransactionPage?: boolean;
}

export default function ProfitsCard({isWalletsPage=false, isTransactionPage=false}: ProfitsCardProps) {
  const locale = useLocale();
  const profitsOfAllWallets = useStore((state) => state.profitsTotal) || 0;
  const profitOfWallet = useCurrentWalletStore((state) => state.wallet?.profits) || 0;
  const profitOfAsset = useCurrentWalletStore((state) => state.currentBalance?.unrealizedProfit) || 0;

  const profitsTotal = isTransactionPage ? profitOfAsset : (isWalletsPage ? (profitsOfAllWallets ?? 0) : (profitOfWallet ?? 0));
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const totalProfitsFormatted = new Intl.NumberFormat(locale, options).format(
    profitsTotal
  );
  return (
    <Card className="">
      <CardHeader className="">
        <CardTitle className="text-2xl font-medium">Profits</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={`text-2xl font-bold ${
            profitsTotal > 0
              ? "text-[#119e45]"
              : profitsTotal < 0
              ? "text-red-600"
              : ""
          }`}
        >
          $ {totalProfitsFormatted}
        </div>
        <p className="text-xs text-muted-foreground">--% from last month</p>
      </CardContent>
    </Card>
  );
}
