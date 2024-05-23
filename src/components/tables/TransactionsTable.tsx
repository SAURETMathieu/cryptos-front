import FilterButton from "@/src/components/buttons/filterButton";
import TableActions from "@/src/components/buttons/tableActions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Tabs, TabsContent } from "@/src/components/ui/tabs";
import { Icons } from "@/src/icons/icons";
import { ArrowRightLeft, CandlestickChart } from "lucide-react";

export default function TransactionsTable() {
  return (
    <section className="w-full gap-4 p-4 pt-0">
      <Tabs defaultValue="all">
        <TabsContent value="all" className="w-full">
          <Card className="h-fit w-full max-w-full">
            <CardHeader className="w-full">
              <CardTitle className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icons.logo
                    className="size-8"
                    aria-label="Logo de l'application"
                  />
                  Cryptos
                </div>
                <FilterButton />
              </CardTitle>
              <CardDescription>Manage your cryptos</CardDescription>
            </CardHeader>
            <CardContent>
              <Table className="text-xs">
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[40px] xl:table-cell">
                      N°
                    </TableHead>
                    <TableHead className="w-[20px] pr-0">Logo</TableHead>
                    <TableHead className="hidden md:table-cell lg:hidden">
                      Name
                    </TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Asset
                    </TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="hidden xl:table-cell">24h</TableHead>
                    <TableHead className="hidden xl:table-cell">7d</TableHead>
                    <TableHead className="hidden xl:table-cell">30d</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Quantity
                    </TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead className="hidden w-[20px] xl:table-cell">
                      Trades
                    </TableHead>
                    <TableHead className="hidden w-[20px] xl:table-cell">
                      Chart
                    </TableHead>
                    <TableHead className="sm:w-[20px] sm:px-0 xl:hidden">
                      More
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="hidden xl:table-cell">
                      100000
                    </TableCell>
                    <TableCell className="w-[20px] pr-0">
                      <Icons.logo
                        className="size-8"
                        aria-label="Logo de l'application"
                      />
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden">
                      Bitcoin
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      BTC/USDT
                    </TableCell>
                    <TableCell>85000</TableCell>
                    <TableCell className="hidden xl:table-cell">
                      +2.5%
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      +8.5%
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      +8.5%
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      0.004154151
                    </TableCell>
                    <TableCell>250.35</TableCell>
                    <TableCell className="hidden w-[20px] xl:table-cell">
                      <ArrowRightLeft className="size-5 cursor-pointer" />
                    </TableCell>
                    <TableCell className="hidden w-[20px] xl:table-cell">
                      <CandlestickChart className="size-5 cursor-pointer" />
                    </TableCell>
                    <TableCell className="sm:w-[20px] sm:px-0 xl:hidden">
                      <TableActions />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-10</strong> of <strong>15</strong> wallets
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
