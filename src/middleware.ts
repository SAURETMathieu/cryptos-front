import createMiddleware from "next-intl/middleware";
import { localePrefix, locales, pathnames } from "./navigation";

export default createMiddleware({
  localePrefix: localePrefix || 'always',
  locales: locales || ['fr', 'en'],
  defaultLocale: "fr",
  pathnames
});

export const config = {
  matcher: [
    '/',
    '/:locale(fr|en)',
    '/:locale(fr|en):path*',
    '/:locale(fr|en)/:path*',
  ],
};
