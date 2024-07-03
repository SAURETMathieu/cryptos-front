import CardsSection from "@/components/sections/CardsSection";
import TransactionDetails from "@/components/sections/TransactionDetails";
import TransactionsNav from "@/components/sections/TransactionsNav";
import TransactionsTableSection from "@/components/sections/TransactionsTableSection";
import CryptoTabs from "@/components/tabs/CryptoTabs";
import InfosBlock from "@/components/sections/InfosBlock";

export default function TransactionsPage() {
  return (
    <main className="flex min-h-screen flex-1 max-lg:flex-col sm:py-4 sm:pl-14">
      <section className="flex w-full flex-col gap-2 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
        <TransactionsNav />
        <CardsSection isTransactionsPage={true}/>
        <InfosBlock isTransactionsPage={true}/>
        <CryptoTabs />
        <TransactionsTableSection/>
      </section>
      <section className="w-full lg:min-h-screen lg:w-5/12 xl:w-4/12 2xl:w-3/12">
        <TransactionDetails/>
      </section>
    </main>
  );
}
