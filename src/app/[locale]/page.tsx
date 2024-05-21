"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/src/components/ui/button";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

import { siteConfig } from "@/config/site";

export default function IndexPage() {
  const t = useTranslations("IndexPage");
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {t("title")}
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          {t("description")}
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
        <Button onClick={() => toast.error("Error")} variant="error">
          Error Alert
        </Button>
        <Button onClick={() => toast.success("Success")} variant="success">
          Success Alert
        </Button>
      </div>
    </section>
  );
}
