import createMiddleware from "next-intl/middleware";
import { localePrefix, locales } from "./navigation";

export default createMiddleware({
  localePrefix: localePrefix || 'always',
  locales: locales || ['fr', 'en'],
  defaultLocale: "fr",
});

export const config = {
  matcher: [
    '/',
    '/:locale(fr|en)',
    '/:locale(fr|en):path*',
    '/:locale(fr|en)/:path*',
  ],
};
