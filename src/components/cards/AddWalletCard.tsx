import { Button } from "@/src/components/ui/button";

import { LeftSheetForm } from "@/components/modals/LeftSheetForm";
import WalletFormTabs from "@/components/tabs/WalletFormTabs";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AddWalletCard() {
  return (
    <Card className="items-between flex flex-col">
      <CardHeader className="">
        <CardTitle className="text-xl font-medium">Your wallets</CardTitle>
        <CardDescription className="max-w-lg text-balance text-sm leading-relaxed">
          Track your wallets
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
