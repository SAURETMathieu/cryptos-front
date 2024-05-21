import Link from "next/link";
import { Icons } from "@/src/icons/icons";
import { cn } from "@/src/lib/utils";

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";

interface MainNavProps {
  items?: NavItem[];
}

export default function MainNav({ items }: MainNavProps) {
  return (
    <div className="hidden gap-6 sm:flex md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="size-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}
