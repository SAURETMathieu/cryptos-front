"use client";

import CardsSection from "@/src/components/sections/BotCards";
import TransactionDetails from "@/src/components/sections/TransactionDetails";
import CryptoTable from "@/src/components/tables/CryptoTable";
import CryptoTabs from "@/src/components/tabs/CryptoTabs";
import CryptoNav from "@/src/components/sections/CryptoNav";
import LogosSection from "@/src/components/sections/LogosSection";
import AnalyticsChartsSection from "@/src/components/sections/AnalyticsChartsSection";

export default function AnalyticsPage({ params }: { params: { asset: string } }) {
  return (
    <main className="flex-col min-h-screen flex-1 sm:py-4 sm:pl-14">
      <section className="flex w-full flex-col gap-2">
        {/* <LogosSection /> */}
        <CryptoNav />
        <CardsSection />
      </section>
      <section className="w-full lg:min-h-screen">
        <CryptoTabs />
        <AnalyticsChartsSection />
      </section>
    </main>
  );
}
