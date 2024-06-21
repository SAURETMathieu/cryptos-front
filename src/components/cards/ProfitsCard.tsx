"use client";

import { useLocale } from "next-intl";

import useStore from "@/hooks/useStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfitsCard() {
  const locale = useLocale();
  const profitsTotal: any = useStore((state) => state.profitsTotal);
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
        <CardTitle className="text-xl font-medium">Profits</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$ {totalProfitsFormatted}</div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
  );
}
