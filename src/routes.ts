export const publicRoutes = [
  '/',
  '/wallets',
  '/cryptos',
  '/bots',
]

export const authRoutes = [
  '/login',
]

export const privateRoutes = [
  '/bots',
]

export const apiAuthPrefix = '/api/auth'

export const apiRoutes = [
  '/api',
  "/api/auth/signin",
  "/api/auth/signin/callback",
  "/api/auth/signout",
  "/api/auth/signup",
  "/api/auth/forgot-password",
  "/api/auth/reset-password",
  "/api/auth/verify-email",
  "/api/auth/csrf",
  "/api/auth/callback/",
]

export const DEFAULT_LOGIN_REDIRECT = '/wallets'