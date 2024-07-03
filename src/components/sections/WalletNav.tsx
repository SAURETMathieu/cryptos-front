import Link from "next/link";
import DevisesTabs from "@/src/components/tabs/DevisesTabs";
import { Button } from "@/src/components/ui/button";

interface WalletNavProps {
  deviseTab?: boolean;
  cryptoButton?: boolean;
  transactionButton?: boolean;
  cryptoLink?: string;
  transactionLink?: string;
}

export default function WalletNav({
  deviseTab = true,
  cryptoButton = true,
  transactionButton = true,
  cryptoLink = "/wallets/my-cryptos",
  transactionLink = "/wallets/my-transactions",
}: WalletNavProps) {
  return (
    <section className="flex w-full gap-4 p-4 py-2 max-lg:flex-col sm:pt-0 lg:justify-between">
      {deviseTab && <DevisesTabs />}

      <div className="mx-auto flex w-full max-w-[450px] items-center justify-end gap-2 self-end lg:mx-0">
        {cryptoButton && (
          <Link className="w-1/2" href={cryptoLink}>
            <Button variant="outline" className="w-full bg-card text-xs">
              All Cryptos
            </Button>
          </Link>
        )}
        {transactionButton && (
          <Link className="w-1/2" href={transactionLink}>
            <Button variant="outline" className="w-full bg-card text-xs">
              All Transactions
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
}
