import CardsSection from "@/src/components/sections/CardsSection";
import CryptosTableSection from "@/src/components/sections/CryptosTableSection";
import InfosBlock from "@/src/components/sections/InfosBlock";
import WalletCryptoSpread from "@/src/components/sections/WalletCryptoSpread";
import WalletNav from "@/src/components/sections/WalletNav";

interface WalletPageProps {
  walletWithCryptos: any;
}

export default function WalletPage({
  walletWithCryptos,
}: WalletPageProps) {
  return (
    <main className="flex min-h-screen flex-1 max-lg:flex-col sm:py-4 sm:pl-14">
      <section className="flex w-full flex-col gap-2 lg:w-8/12 xl:w-9/12 2xl:w-10/12">
        <WalletNav />
        <CardsSection wallet={walletWithCryptos[0]} />
        <InfosBlock wallet={walletWithCryptos[0]}/>
        <CryptosTableSection walletWithCryptos={walletWithCryptos[0]} />
      </section>
      <section className="w-full lg:min-h-screen lg:w-4/12 xl:w-3/12 2xl:w-2/12">
        <WalletCryptoSpread wallet={walletWithCryptos[0]} />
      </section>
    </main>
  );
}
