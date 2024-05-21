import { Home, ShoppingCart, Settings, Info } from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "",
  description:
    "A Next.js template with Radix UI and Tailwind CSS. Includes a custom theme switcher and a Tailwind CSS indicator for development",
  mainNav: [
    {
      title: "Home",
      href: "/",
      icon: <Home className="size-5" />,
    },
    {
      title: "Shop",
      href: "/orders",
      icon: <ShoppingCart className="size-5" />,
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
