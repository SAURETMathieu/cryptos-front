import Footer from "@/src/components/footer/Footer";
import { SiteHeader } from "@/src/components/header/Header";
import { Toaster } from "@/src/components/ui/sonner";
import { ModalProvider } from "@/src/context/modalProvider";
import { ThemeProvider } from "@/src/context/themeProvider";
import { UpdateModalProvider } from "@/src/context/updateModalProvider";
import { fontSans } from "@/src/lib/fonts";
import { cn } from "@/src/lib/utils";
import { TailwindIndicator } from "@/src/utils/tailwindIndicator";
import { NextIntlClientProvider, useMessages } from "next-intl";

import "@/styles/globals.css";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const messages = useMessages();

  return (
    <>
      <html lang={locale} suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <ModalProvider>
                <UpdateModalProvider>
                  <div className="relative flex min-h-screen flex-col">
                    <SiteHeader />
                    {children}
                    <Toaster />
                    <Footer />
                  </div>
                  <TailwindIndicator />
                </UpdateModalProvider>
              </ModalProvider>
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  );
}
