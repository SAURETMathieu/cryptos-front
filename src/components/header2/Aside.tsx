import AsideTooltip from "@/src/components/header2/AsideTooltip";
import { Icons } from "@/src/icons/icons";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { MainNavProps } from "@/types/nav";

interface AsideMenuProps {
  itemsTop: MainNavProps['items'];
  itemsBottom: MainNavProps['items'];
}

export default function AsideMenu({ itemsTop, itemsBottom }: AsideMenuProps) {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link href="/" className="flex h-12 items-center justify-center pb-4">
          <Icons.logo className="size-8" />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>
        <AsideTooltip items={itemsTop} />
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <AsideTooltip items={itemsBottom} />
      </nav>
    </aside>
  );
}
