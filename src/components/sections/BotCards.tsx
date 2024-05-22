import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export default function CardsSection() {
  return (
    <section className="grid gap-4 p-4 lg:pt-0 sm:grid-cols-2 md:gap-2 xl:grid-cols-4">
      <Card className="">
        <CardHeader className="">
          <CardTitle className="text-sm font-medium">Total revenues</CardTitle>
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
          <CardTitle className="text-sm font-medium">Balance</CardTitle>
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
          <CardTitle className="text-sm font-medium">logos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-s text-muted-foreground">
            Nombre de bots actifs 4
          </div>
          <div className="text-s text-muted-foreground">
            Nombre de bots lancés 4
          </div>
        </CardContent>
      </Card>
      <Card className="">
        <CardHeader className="">
          <CardTitle className="text-2xl font-bold">Infos</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="text-sm font-medium">
            Transactions : <span className="text-xs text-muted-foreground">250505</span>
          </div>
          <div className="text-sm font-medium">
            Frais : <span className="text-xs text-muted-foreground">250505</span>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
