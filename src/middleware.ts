import createMiddleware from "next-intl/middleware";
import { localePrefix, locales, pathnames } from "./navigation";

export default createMiddleware({
  localePrefix: localePrefix || 'always',
  locales: locales || ['fr', 'en'],
  defaultLocale: "fr",
  pathnames
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}