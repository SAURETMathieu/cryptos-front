import BotsTabs from "@/src/components/tabs/BotsTabs";

export default function BotNav() {
  return (
    <section className="flex w-full p-4 py-2 pb-0 first-letter:max-lg:flex-col sm:pt-0 lg:justify-between">
      <BotsTabs/>
    </section>
  );
}
