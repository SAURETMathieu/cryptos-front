import { Icons } from "@/src/icons/icons";

export default function LogosSection() {
  return (
    <section className="w-full p-4 pb-0 lg:flex lg:justify-center lg:items-center gap-6 hidden">
      <Icons.logo className="size-24" aria-label="Logo de l'application" />
    </section>
  );
}
