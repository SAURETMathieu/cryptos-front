"use client";

import AnalyticsChartsSection from "@/src/components/sections/AnalyticsChartsSection";
import CardsSection from "@/src/components/sections/BotCards";
import CryptoTabs from "@/src/components/tabs/CryptoTabs";

import CryptoNav from "@/components/sections/TransactionsNav";

export default function AnalyticsPage({
  params,
}: {
  params: { asset: string };
}) {
  return (
    <main className="min-h-screen flex-1 flex-col sm:py-4 sm:pl-14">
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
