"use client";

import Image from "next/image";
import DevisesTabs from "@/src/components/tabs/DevisesTabs";
import { Button } from "@/src/components/ui/button";
import { BarChartBig, CandlestickChart } from "lucide-react";

import useCurrentWalletStore from "@/hooks/useCurrentWalletStore";
import { useMemo } from "react";

export default function TransactionsNav() {
  const currentBalance: any = useCurrentWalletStore(
    (state) => state.currentBalance
  );

  const { logo_url, asset, cryptoName } = useMemo(() => {
    return {
      logo_url: currentBalance?.logo_url,
      asset: currentBalance?.asset,
      cryptoName: currentBalance?.cryptoName,
    };
  }, [currentBalance]);

  return (
    <section className="flex w-full gap-4 p-4 py-2 max-lg:flex-col sm:pt-0 lg:justify-between">
      <DevisesTabs />

      <div className="relative order-first mx-auto flex w-full items-center justify-between gap-2 lg:order-last lg:mx-0">
        <div className="flex w-full items-center justify-center gap-2 lg:justify-start xl:justify-center">
          {logo_url && (
            <Image
              src={logo_url}
              alt={cryptoName + " logo"}
              className="rounded-full"
              width={32}
              height={32}
            />
          )}
          <span>{asset}</span>
          <span
            className="hidden max-w-[300px] truncate sm:block lg:hidden 2xl:block"
            title={`(${cryptoName})`}
          >
            ({cryptoName})
          </span>
        </div>
        <div className="absolute right-0 flex items-center">
          <Button size="icon" variant="ghost">
            <BarChartBig className="size-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <CandlestickChart className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
