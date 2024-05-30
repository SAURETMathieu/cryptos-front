"use client";

import { ReactElement, cloneElement, isValidElement, useState } from "react";
import { Button } from "@/src/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";

type LeftSheetForm = {
  children: ReactElement<{ closeSheet: () => void }>;
  title: string;
  description: string;
};

export function LeftSheetForm({ children, title, description  }: LeftSheetForm) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);
  const openSheet = () => setIsSheetOpen(true);

  const clonedChild = isValidElement(children)
    ? cloneElement(children, { closeSheet })
    : children;

  return (
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button onClick={openSheet}>Add a wallet</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="pb-4">
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>
            {description}
            </SheetDescription>
          </SheetHeader>
          {clonedChild}
        </SheetContent>
      </Sheet>
  );
}
