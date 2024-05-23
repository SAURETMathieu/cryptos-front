import DevisesTabs from "@/src/components/tabs/DevisesTabs";
import { Button } from "@/src/components/ui/button";
import { Icons } from "@/src/icons/icons";
import { BarChartBig, CandlestickChart } from "lucide-react";

export default function CryptoNav() {
  return (
    <section className="flex w-full gap-4 p-4 py-2 max-lg:flex-col sm:pt-0 lg:justify-between">
      <DevisesTabs />

      <div className="relative order-first mx-auto flex w-full items-center justify-between gap-2 lg:order-last lg:mx-0">
        <div className="flex w-full items-center justify-center gap-2 lg:justify-start xl:justify-center">
          <Icons.logo className="size-8" aria-label="Logo de l'application" />
          BTC (Bitcoin)
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
