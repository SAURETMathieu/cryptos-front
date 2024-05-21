import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/src/components/ui/sheet";
import { Icons } from "@/src/icons/icons";
import { PanelLeft } from "lucide-react";

import { MainNavProps } from "@/types/nav";
import { siteConfig } from "@/config/site";

export default function ToggleMenu({ items }: MainNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="size-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 pt-6 text-lg font-medium">
          <Link href="/" className="flex items-center justify-center">
            <Icons.logo className="size-20" />
            <span className="inline-block font-bold">{siteConfig.name}</span>
          </Link>
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  {item.icon}
                  {item.title}
                </Link>
              )
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
