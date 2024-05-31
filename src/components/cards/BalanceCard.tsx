import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BalanceCard() {
  return (
    <Card className="">
      <CardHeader className="">
        <CardTitle className="text-xl font-medium">Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$45,231.89</div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
  );
}
