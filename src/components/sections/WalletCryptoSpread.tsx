"use client";

import { PieChartGraph } from "@/src/components/charts/PieChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { aggregateBalances } from "@/utils/aggregateBalances";
import useCurrentWalletStore from "@/hooks/useCurrentWalletStore";

export default function WalletCryptoSpread() {
  const wallet = useCurrentWalletStore((state) => state.wallet);
  const cryptosBalancesOfWallet = aggregateBalances([wallet]);

  return (
    <section className="w-full p-4 pt-0 lg:pl-0">
      <Card className="h-fit w-full max-w-full">
        <CardHeader className="w-full pb-2">
          <CardTitle className="flex w-full items-center justify-between">
            Spread of Cryptos
          </CardTitle>
          <CardDescription>
            Spread of your cryptos balances for the wallet :
            <span className="pl-2 text-lg font-bold">{wallet?.name}</span>.
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full p-2">
          <PieChartGraph datas={cryptosBalancesOfWallet} />
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            This section shows the spread of your wallet cryptos balances in
            percent.
          </p>
          <p className="text-sm text-muted-foreground">
            Cryptos with less than 0.1% are not displayed in percentage.
          </p>
        </CardFooter>
      </Card>
    </section>
  );
}
