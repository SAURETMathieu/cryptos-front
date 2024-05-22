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

export default function BotTable() {
  return (
    <section className="w-full gap-4 p-4 pt-0">
      <Tabs defaultValue="all">
        <TabsContent value="all" className="w-full">
          <Card className="h-fit w-full max-w-full">
            <CardHeader className="w-full">
              <CardTitle className="flex w-full items-center justify-between">
                Bots
                <FilterButton />
              </CardTitle>
              <CardDescription>
                Manage your bots and their settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[12px] p-0">
                      <span className="sr-only">Status</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Wallet
                    </TableHead>
                    <TableHead>Dates</TableHead>
                    <TableHead className="hidden md:table-cell">Opened</TableHead>
                    <TableHead className="hidden md:table-cell">Closed</TableHead>
                    <TableHead>Fees</TableHead>
                    <TableHead>Asset</TableHead>
                    <TableHead>Strategy</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="bg-red-500 rounded-tl-lg rounded-bl-lg p-0">
                      <span className="sr-only">status</span>
                    </TableCell>
                    <TableCell>Bot Solana</TableCell>
                    <TableCell className="hidden sm:table-cell">Binance</TableCell>
                    <TableCell>
                      12/03/21 12/03/21
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      250
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      6500
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      6500.00$
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      SOL/USDT
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      0.5%
                    </TableCell>
                    <TableCell>
                      <TableActions />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-10</strong> of <strong>15</strong> bots
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
