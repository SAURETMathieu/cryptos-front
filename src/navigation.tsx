import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation';

export const locales = ["fr", "en"];
export const localePrefix = "always";

export const pathnames = {
  '/': '/',
  '/cryptos': '/cryptos',
  '/wallets': '/wallets',
  '/bots': '/bots',
  '/charts': '/charts',
  '/help': '/help',
  '/settings': '/settings',
  '/about': '/about',
  '/contact': '/contact',
  '/login': '/login',
  '/register': '/register',
  '/forgot-password': '/forgot-password',
  '/reset-password': '/reset-password',
  '/profile': '/profile',
  '/support': '/support',
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });

export type AppPathnames = keyof typeof pathnames;