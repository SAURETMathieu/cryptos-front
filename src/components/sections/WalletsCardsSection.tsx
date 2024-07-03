import BalanceCard from "@/components/cards/BalanceCard";
import ProfitsCard from "@/components/cards/ProfitsCard";
import AddWalletCard from "@/components/cards/AddWalletCard";
import AddBotCard from "@/components/cards/AddBotCard";

export default function WalletsCardsSection() {
  return (
    <section className="grid gap-4 p-4 py-0 sm:grid-cols-2 md:gap-2 xl:grid-cols-4">
      <AddWalletCard isWalletsPage={true}/>
      <AddBotCard />
      <BalanceCard isWalletsPage={true}/>
      <ProfitsCard isWalletsPage={true}/>
    </section>
  );
}
