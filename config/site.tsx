import { Home, Wallet, Settings, Info, Bot, Bitcoin } from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "",
  description:
    "Application to manage cryptos wallets and transactions. Built with Next.js, TypeScript, Tailwind CSS, and more.",
  mainNav: [
    {
      title: "Home",
      href: "/",
      icon: <Home className="size-5" />,
    },
    {
      title: "Wallets",
      href: "/wallets",
      icon: <Wallet className="size-5" />,
    },
    {
      title: "Bots",
      href: "/bots",
      icon: <Bot className="size-5" />,
    },
    {
      title: "Cryptos",
      href: "/cryptos",
      icon: <Bitcoin className="size-5" />,
    },
  ],
  secondaryNav: [
    {
      title: "Help",
      href: "/help",
      icon: <Info className="size-5" />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="size-5" />,
    },
  ],
  links: {
    github: "https://github.com/SAURETMathieu",
  },
};
