import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export default function CardsSection() {
  return (
    <section className="grid gap-4 p-4 py-0 sm:grid-cols-2 md:gap-2 xl:grid-cols-4">
      <Card className="">
        <CardHeader className="">
          <CardTitle className="text-sm font-medium">
            Vos portefeuilles
          </CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Ajoutez vos portefeuilles cryptos
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>Créer un portefeuille</Button>
        </CardFooter>
      </Card>
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
          <CardTitle className="text-sm font-medium">Balance</CardTitle>
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
