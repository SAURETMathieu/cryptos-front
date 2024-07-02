import CardsSection from "@/components/sections/CardsSection";
import CryptosTableSection from "@/components/sections/CryptosTableSection";
import InfosBlock from "@/components/sections/InfosBlock";
import WalletCryptoSpread from "@/components/sections/WalletCryptoSpread";
import WalletNav from "@/components/sections/WalletNav";

export default function WalletPage() {
  console.log('WalletPage');
  return (
    <main className="flex min-h-screen flex-1 max-lg:flex-col sm:py-4 sm:pl-14">
      <section className="flex w-full flex-col gap-2 lg:w-8/12 xl:w-9/12 2xl:w-10/12">
        <WalletNav cryptoButton={false} />
        <CardsSection />
        <InfosBlock />
        <CryptosTableSection/>
      </section>
      <section className="w-full lg:min-h-screen lg:w-4/12 xl:w-3/12 2xl:w-2/12">
        <WalletCryptoSpread/>
      </section>
    </main>
  );
}
