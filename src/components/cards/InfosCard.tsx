import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InfosCard() {
  return (
    <Card className="">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-medium">Infos</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
        <div className="text-sm font-medium">
            Address :
            <span className="text-xs text-muted-foreground">250505</span>
          </div>
          <div className="text-sm font-medium">
            Transactions :
            <span className="text-xs text-muted-foreground">250505</span>
          </div>
          <div className="text-sm font-medium">
            Fees :<span className="text-xs text-muted-foreground">25.06 $</span>
          </div>
        </CardContent>
      </Card>
  );
}
