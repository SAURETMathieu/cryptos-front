"use client";

import CardsSection from "@/src/components/sections/BotCards";
import TransactionDetails from "@/src/components/sections/TransactionDetails";
import TransactionsTableSection from "@/src/components/sections/TransactionsTableSection";
import CryptoTabs from "@/src/components/tabs/CryptoTabs";
import CryptoNav from "@/src/components/sections/CryptoNav";

export default function BotsPage({ params }: { params: { asset: string } }) {
  return (
    <main className="flex min-h-screen flex-1 max-lg:flex-col sm:py-4 sm:pl-14">
      <section className="flex w-full flex-col gap-2 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
        <CryptoNav />
        <CardsSection />
        <CryptoTabs />
        <TransactionsTableSection />
      </section>
      <section className="w-full lg:min-h-screen lg:w-5/12 xl:w-4/12 2xl:w-3/12">
        <TransactionDetails />
      </section>
    </main>
  );
}
