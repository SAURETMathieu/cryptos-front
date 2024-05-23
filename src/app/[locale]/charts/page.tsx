"use client";

import TradingViewWidget from "@/src/components/widgets/tradingChart";

export default function ChartsPage() {
  return (
    <main className="flex min-h-screen flex-1 p-4 max-lg:flex-col sm:py-4 sm:pl-14">
      <TradingViewWidget />
    </main>
  );
}
