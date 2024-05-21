import MainNav from "@/src/components/header/MainNav";
import RightNav from "@/src/components/header/RightNav";
import ToggleMenu from "@/src/components/header/ToggleMenu";

import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <ToggleMenu items={siteConfig.mainNav} />
        <MainNav items={siteConfig.mainNav} />
        <RightNav />
      </div>
    </header>
  );
}
