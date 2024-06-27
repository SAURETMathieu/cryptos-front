"use client";

import { useLocale } from "next-intl";

import useStore from "@/hooks/useStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProfitsCardProps {
  wallet?: any;
}

export default function ProfitsCard({ wallet }: ProfitsCardProps) {
  const locale = useLocale();
  const profitOfWallet: any = wallet?.profits;
  const profitsOfAllWallets: any = useStore((state) => state.profitsTotal);
  const profitsTotal: any = wallet ? profitOfWallet : profitsOfAllWallets;
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
              ? "text-green-500"
              : profitsTotal < 0
              ? "text-red-500"
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
