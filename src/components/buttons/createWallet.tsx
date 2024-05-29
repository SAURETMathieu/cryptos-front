"use client";

import { Button } from "@/src/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";

export function CreateWalletSheet() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button>Add a wallet</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Create a wallet</SheetTitle>
            <SheetDescription>
              Add a new wallet to track your assets
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">Formulaire</div>
          <SheetFooter>
            <Button type="reset">Reset</Button>
            <SheetClose asChild>
              <Button type="submit">Create wallet</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
