import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { CreateWalletSheet } from "@/src/components/buttons/createWallet";
import { Plus, Settings } from "lucide-react";

export default function CardsSection() {
  return (
    <section className="grid gap-4 p-4 py-0 sm:grid-cols-2 md:gap-2 xl:grid-cols-4">
      <Card className="">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-medium">Your wallets</CardTitle>
          <CardDescription className="max-w-lg text-balance text-sm leading-relaxed">
            Track your assets and transactions
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <CreateWalletSheet />
        </CardFooter>
      </Card>
      <Card className="">
        <CardHeader className="pb-3">
          <CardTitle className="flex justify-between gap-2 text-xl font-medium">
            Bots
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Plus className="size-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="size-5" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-s text-muted-foreground">Actifs 4</div>
          <div className="text-s text-muted-foreground">Lancés 4</div>
        </CardContent>
      </Card>
      <Card className="">
        <CardHeader className="">
          <CardTitle className="text-xl font-medium">Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card className="">
        <CardHeader className="">
          <CardTitle className="text-xl font-medium">Profit</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
