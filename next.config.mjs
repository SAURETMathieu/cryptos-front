import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

export const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.moralis.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logo.moralis.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'metacore.mobula.io',
        pathname: '/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
