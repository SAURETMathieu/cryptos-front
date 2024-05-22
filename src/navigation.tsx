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
  '/help': '/help',
  '/settings': '/settings',
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });

export type AppPathnames = keyof typeof pathnames;