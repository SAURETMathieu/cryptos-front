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

type CreateWalletSheetProps = {
  children: ReactElement<{ closeSheet: () => void }>;
};

export function CreateWalletSheet({ children }: CreateWalletSheetProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);
  const openSheet = () => setIsSheetOpen(true);

  const clonedChild = isValidElement(children)
    ? cloneElement(children, { closeSheet })
    : children;

  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button onClick={openSheet}>Add a wallet</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="pb-4">
            <SheetTitle>Create a wallet</SheetTitle>
            <SheetDescription>
              Add a new wallet to track your assets
            </SheetDescription>
          </SheetHeader>
          {clonedChild}
        </SheetContent>
      </Sheet>
    </div>
  );
}
