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

export default function CryptoTable() {
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
                  BTC
                </div>
                <FilterButton />
              </CardTitle>
              <CardDescription>Your transactions with BTC</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[12px] p-0">
                      <span className="sr-only">Idx</span>
                    </TableHead>
                    <TableHead>Dates</TableHead>
                    <TableHead>Heure</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Devise
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      De
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      à
                    </TableHead>
                    <TableHead>Prix</TableHead>
                    <TableHead>Quantité</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Frais</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="rounded-l-lg bg-red-500 p-0">
                      <span className="sr-only">type</span>
                    </TableCell>
                    <TableCell><time dateTime="2023-11-23">23/11/23</time></TableCell>
                    <TableCell className="hidden sm:table-cell">
                      11:25:25
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      USDT
                    </TableCell>
                    <TableCell>0x9cD...7A6cf</TableCell>
                    <TableCell className="hidden md:table-cell">0x9cD...7A6cf</TableCell>
                    <TableCell className="hidden md:table-cell">
                      6500.00$
                    </TableCell>
                    <TableCell className="hidden md:table-cell">6500</TableCell>
                    <TableCell className="hidden md:table-cell">
                      Terminé
                    </TableCell>
                    <TableCell className="hidden md:table-cell">0.25$</TableCell>
                    <TableCell className="hidden md:table-cell">25000.25$</TableCell>
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
