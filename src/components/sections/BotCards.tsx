import AddBotCard from "../cards/AddBotCard";
import BalanceCard from "../cards/BalanceCard";
import InfosCard from "../cards/InfosCard";
import ProfitsCard from "../cards/ProfitsCard";

export default function CardsSection() {
  return (
    <section className="grid gap-4 p-4 sm:grid-cols-2 md:gap-2 lg:pt-0 xl:grid-cols-4">
      <AddBotCard />
      <InfosCard />
      <BalanceCard />
      <ProfitsCard />
    </section>
  );
}
