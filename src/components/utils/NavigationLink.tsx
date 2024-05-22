"use client";

import { ComponentProps } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { Link, type AppPathnames } from "@/src/navigation";

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link aria-current={isActive ? "page" : undefined} href={href} {...rest} />
  );
}
