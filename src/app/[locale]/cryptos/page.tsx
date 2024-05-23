"use client";

import TradingViewWidget from "@/src/components/widgets/tradingView";

export default function CryptosPage() {
  return (
    <main className="flex min-h-screen flex-1 p-4 max-lg:flex-col sm:py-4 sm:pl-14">
      <TradingViewWidget />
    </main>
  );
}
