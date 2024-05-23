"use client";

import CardsSection from "@/src/components/sections/BotCards";
import BotDetails from "@/src/components/sections/BotDetails";
import BotNav from "@/src/components/sections/BotNav";
import BotTable from "@/src/components/tables/BotTable";

export default function BotsPage() {
  return (
    <main className="flex min-h-screen flex-1 max-lg:flex-col sm:py-4 sm:pl-14">
      <section className="flex w-full flex-col gap-2 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
        <CardsSection />
        <BotNav />
        <BotTable />
      </section>
      <section className="w-full lg:min-h-screen lg:w-5/12 xl:w-4/12 2xl:w-3/12">
        <BotDetails />
      </section>
    </main>
  );
}
