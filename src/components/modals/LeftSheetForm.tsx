"use client";

import { ReactElement, cloneElement, isValidElement, useState } from "react";
import { ButtonProps } from "@/src/components/ui/button";
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
  triggerButton: ReactElement<ButtonProps>;
};

export function LeftSheetForm({ children, title, description, triggerButton }: LeftSheetForm) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);
  const openSheet = () => setIsSheetOpen(true);

  const clonedChild = isValidElement(children)
    ? cloneElement(children, { closeSheet })
    : children;

    const clonedTriggerButton = isValidElement(triggerButton)
    ? cloneElement(triggerButton, { onClick: openSheet })
    : triggerButton;

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        {clonedTriggerButton}
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="pb-4">
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        {clonedChild}
      </SheetContent>
    </Sheet>
  );
}
