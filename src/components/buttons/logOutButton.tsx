"use client";

import { signOut } from "next-auth/react";
import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";

export default function LogOutButton() {
  const locale = useLocale();

  const handleSignout = async () => {
    await signOut({ callbackUrl: `/${locale}/login` });
  };

  return (
    <Button
      variant="ghost"
      className="h-fit w-full justify-start p-0"
      onClick={handleSignout}
    >
      Logout
    </Button>
  );
}
