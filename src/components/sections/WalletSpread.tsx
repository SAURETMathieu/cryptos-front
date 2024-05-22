import PieChart from "@/src/components/charts/PieChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export default function WalletSpread() {
  return (
    <section className="w-full p-4 pt-0 lg:pl-0">
      <Card className="h-fit w-full max-w-full">
        <CardHeader className="w-full pb-2">
          <CardTitle className="flex w-full items-center justify-between">
            Spread of Wallets
          </CardTitle>
          <CardDescription>
            Spread of wallets across different cryptos or wallets
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full p-2">
          <PieChart />
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            This section will show the spread of wallets across different
            cryptos or wallets
          </p>
        </CardFooter>
      </Card>
    </section>
  );
}
