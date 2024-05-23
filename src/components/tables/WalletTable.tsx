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

export default function WalletTable() {
  return (
    <section className="w-full gap-4 p-4 pt-0">
      <Tabs defaultValue="all">
        <TabsContent value="all" className="w-full">
          <Card className="h-fit w-full max-w-full">
            <CardHeader className="w-full">
              <CardTitle className="flex w-full items-center justify-between">
                Wallets
                <FilterButton />
              </CardTitle>
              <CardDescription>
                Manage your wallets to centralize your analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[40px] sm:table-cell">
                      N°
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Blockchain
                    </TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead className="hidden md:table-cell">24h</TableHead>
                    <TableHead className="hidden md:table-cell">7d</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="hidden md:table-cell">
                      100000
                    </TableCell>
                    <TableCell>Binance</TableCell>
                    <TableCell className="hidden sm:table-cell">All</TableCell>
                    <TableCell className="font-medium">25.35</TableCell>
                    <TableCell className="hidden md:table-cell">
                      +2.5%
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      +8.5%
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
                Showing <strong>1-10</strong> of <strong>15</strong> wallets
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
