"use client";

import { Button } from "@/src/components/ui/button";
import formatIdx from "@/utils/formatIdx";

import useWalletStore from "@/hooks/useCurrentWalletStore";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CopyButton from "@/components/buttons/copyButton";
import { LeftSheetForm } from "@/components/modals/LeftSheetForm";
import WalletFormTabs from "@/components/tabs/WalletFormTabs";

export default function AddWalletCard({ isWalletsPage = false }) {
  let wallet = useWalletStore((state) => state.wallet);
  if (isWalletsPage) {
    wallet = null;
  }

  return (
    <Card className="items-between flex flex-col">
      <CardHeader className="">
        <CardTitle
          className="truncate text-2xl font-medium"
          title={wallet ? wallet.name : ""}
        >
          {wallet ? wallet.name : "Your wallets"}
        </CardTitle>
        <CardDescription className="flex max-w-lg gap-2 text-sm leading-relaxed">
          <span className="max-w-[80%]" title={wallet?.address ?? ""}>
            {wallet ? formatIdx(wallet?.address ?? "", 6) : "Your wallets"}
          </span>
          {wallet && <CopyButton toCopy={wallet?.address ?? ""} />}
        </CardDescription>
      </CardHeader>
      <CardFooter className="">
        <LeftSheetForm
          title="Create your wallet"
          description="Create your wallet for tracking your cryptos"
          triggerButton={<Button>Add a wallet</Button>}
        >
          <WalletFormTabs />
        </LeftSheetForm>
      </CardFooter>
    </Card>
  );
}
