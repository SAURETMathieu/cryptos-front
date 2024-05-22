import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/src/components/ui/pagination";
import { Separator } from "@/src/components/ui/separator";
import { ChevronLeft, ChevronRight, Settings } from "lucide-react";

export default function BotDetails() {
  return (
    <section className="w-full p-4 pt-0 lg:pl-0">
      <Card className="h-fit w-full max-w-full">
        <CardHeader className="flex flex-row items-start bg-muted/50 py-3 pr-2">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Nom du bot
            </CardTitle>
            <CardDescription>Date: November 23, 2023</CardDescription>
          </div>
          <div className="ml-auto flex items-center">
            <Button size="icon" variant="ghost">
              <Settings className="size-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="flex w-full flex-col gap-2 p-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">ID :</span>
            <span className="font-semibold">5428757245</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Asset :</span>
            <span className="font-semibold">SOL/USDT</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Stratégie :</span>
            <span className="font-semibold">- 0.5% / + 0.5%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Wallet :</span>
            <span className="font-semibold">Binance</span>
          </div>
          <span className="text-center font-semibold">Actif</span>
          <Separator className="my-2" />
          <div className="grid grid-cols-2 gap-2">
            <div className="grid auto-rows-max gap-3">
              <div className="font-semibold">Opened</div>
              <div className="grid gap-2 text-muted-foreground">
                <span>2050</span>
              </div>
            </div>
            <div className="grid auto-rows-max gap-3">
              <div className="font-semibold">Closed</div>
              <div className="grid gap-2 text-muted-foreground">
                <span>25000</span>
              </div>
            </div>
          </div>
          <Separator className="my-2" />
          <div className="grid grid-cols-2 gap-2">
            <div className="grid auto-rows-max gap-3">
              <div className="font-semibold">Début</div>
              <div className="grid gap-2 text-muted-foreground">
                <span>November 23, 2023</span>
                <span>10h00</span>
              </div>
            </div>
            <div className="grid auto-rows-max gap-3">
              <div className="font-semibold">Fin</div>
              <div className="grid gap-2 text-muted-foreground">
                <span>November 23, 2023</span>
                <span>10h00</span>
              </div>
            </div>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Balance :</span>
            <span>$ 45645.25 $</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Max investis :</span>
            <span>$ 54287.00 $</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Prix moyen :</span>
            <span>250.0520520 $</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Frais :</span>
            <span>50.52 $</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Bénéfices :</span>
            <span className="font-bold">$ 5800.50 $</span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Updated <time dateTime="2023-11-23">November 23, 2023</time>
          </div>
          <Pagination className="ml-auto mr-0 w-auto">
            <PaginationContent>
              <PaginationItem>
                <Button size="icon" variant="outline" className="size-6">
                  <ChevronLeft className="size-3.5" />
                  <span className="sr-only">Previous Order</span>
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button size="icon" variant="outline" className="size-6">
                  <ChevronRight className="size-3.5" />
                  <span className="sr-only">Next Order</span>
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </section>
  );
}
