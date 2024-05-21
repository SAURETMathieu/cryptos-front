import AsideMenu from "@/src/components/header2/Aside";
import BreadcrumbSection from "@/src/components/header2/BreadcrumbSection";
import RightNav from "@/src/components/header2/RightNav";
import ToggleMenu from "@/src/components/header2/ToggleMenu";

import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex gap-6 md:gap-10">
        {siteConfig.mainNav?.length ? (
          <>
            <AsideMenu itemsTop={siteConfig.mainNav} itemsBottom={siteConfig.secondaryNav} />
            <div className="flex w-full flex-col sm:gap-4 sm:py-4 sm:pl-14">
              <section className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <ToggleMenu items={siteConfig.mainNav}/>
                <BreadcrumbSection />
                <RightNav />
              </section>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
}
