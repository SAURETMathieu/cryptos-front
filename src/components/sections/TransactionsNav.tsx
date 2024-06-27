import Image from "next/image";
import DevisesTabs from "@/src/components/tabs/DevisesTabs";
import { Button } from "@/src/components/ui/button";
import { BarChartBig, CandlestickChart } from "lucide-react";

interface TransactionsNavProps {
  options: {
    asset: string;
    logo: string;
    cryptoName: string;
  };
}

export default function TransactionsNav({ options }: TransactionsNavProps) {
  return (
    <section className="flex w-full gap-4 p-4 py-2 max-lg:flex-col sm:pt-0 lg:justify-between">
      <DevisesTabs />

      <div className="relative order-first mx-auto flex w-full items-center justify-between gap-2 lg:order-last lg:mx-0">
        <div className="flex w-full items-center justify-center gap-2 lg:justify-start xl:justify-center">
          <Image
            src={options.logo}
            alt={options.cryptoName + " logo"}
            className="rounded-full"
            width={32}
            height={32}
          />
          {`${options.asset} (${options.cryptoName})`}
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
