import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";

export default function BotNav() {
  return (
    <section className="flex w-full p-4 py-2 pb-0 first-letter:max-lg:flex-col sm:pt-0 lg:justify-between">
      <Tabs
        defaultValue="All"
        className="mx-auto w-full max-w-[450px] gap-4 lg:mx-0"
      >
        <TabsList className="w-full">
          <TabsTrigger value="All" className="w-1/4">
            All
          </TabsTrigger>
          <TabsTrigger value="Actif" className="w-1/4">
            Actif
          </TabsTrigger>
          <TabsTrigger value="Pause" className="w-1/4">
            Pause
          </TabsTrigger>
          <TabsTrigger value="Supprimé" className="w-1/4">
            Supprimé
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </section>
  );
}
