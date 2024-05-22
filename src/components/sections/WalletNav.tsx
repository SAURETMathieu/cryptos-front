import { Button } from "@/src/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";

export default function WalletNav() {
  return (
    <section className="flex w-full gap-4 p-4 py-2 max-lg:flex-col sm:pt-0 lg:justify-between">
      <Tabs
        defaultValue="$"
        className="mx-auto w-full max-w-[450px] gap-4 lg:mx-0"
      >
        <TabsList className="w-full">
          <TabsTrigger value="$" className="w-1/3">
            $
          </TabsTrigger>
          <TabsTrigger value="€" className="w-1/3">
            €
          </TabsTrigger>
          <TabsTrigger value="btc" className="w-1/3">
            BTC
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mx-auto flex w-full max-w-[450px] items-center justify-center gap-4 self-end lg:mx-0">
        <Button variant="outline" className="w-1/2 text-xs">
          All Cryptos
        </Button>
        <Button variant="outline" className="w-1/2 text-xs">
          All Transactions
        </Button>
      </div>
    </section>
  );
}
