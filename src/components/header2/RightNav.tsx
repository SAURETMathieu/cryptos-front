import Link from "next/link";
import ProfilMenu from "@/src/components/header2/ProfilMenu";
import { buttonVariants } from "@/src/components/ui/button";
import { Icons } from "@/src/icons/icons";

import { siteConfig } from "@/config/site";

import LanguageSection from "../buttons/languageSelect";
import { ThemeToggle } from "../buttons/themeToggle";

export default function RightNav() {
  return (
    <div className="flex flex-1 items-center justify-end space-x-4">
      <nav className="flex items-center space-x-1 self-end">
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: "icon",
              variant: "ghost",
            })}
          >
            <Icons.github className="size-5" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <ThemeToggle />
        <LanguageSection />
        <ProfilMenu />
      </nav>
    </div>
  );
}
