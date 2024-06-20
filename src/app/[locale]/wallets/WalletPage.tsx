import CardsSection from "@/src/components/sections/CardsSection";
import WalletNav from "@/src/components/sections/WalletNav";
import WalletSpread from "@/src/components/sections/WalletSpread";
import WalletTableSection from "@/src/components/sections/WalletTableSection";

export default function WalletsPage() {
  return (
    <main className="flex min-h-screen flex-1 max-lg:flex-col sm:py-4 sm:pl-14">
      <section className="flex w-full flex-col gap-2 lg:w-8/12 xl:w-9/12 2xl:w-10/12">
        <WalletNav />
        <CardsSection />
        <WalletTableSection />
      </section>
      <section className="w-full lg:min-h-screen lg:w-4/12 xl:w-3/12 2xl:w-2/12">
        <WalletSpread />
        <WalletSpread />
      </section>
    </main>
  );
}
