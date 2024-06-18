import { upsertUserAndAccount } from "@/services/api/upsertUserAndAccount";
import { refreshAccessToken } from "@/utils/refreshtoken";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { ExtendedUser } from "@/types/next-auth";
import prisma from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  basePath: "/api/auth",
  providers: [
    GitHub({
      authorization: { params: { scope: "read:user user:email" } },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: { params: { access_type: "offline", prompt: "consent" } },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn({ profile }) {
      if (!profile?.email) {
        throw new Error("No profile email found");
      }
      return true;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token.user as ExtendedUser;
        session.account = token.account;
        session.accessToken = token.accessToken as string;
        session.error = token.error as string;
        session.token = token;
      }
      return session;
    },
    async jwt({ token, user, account }) {
      if (user && account) {
        const tokenToReturn = {
          token,
          account,
          user,
        };
        const updateSuccess = await upsertUserAndAccount(tokenToReturn);
        if (updateSuccess) {
          const accountUpdated = await prisma.account.findUnique({
            where: {
              provider_providerAccountId: {
                provider: tokenToReturn.account.provider as string,
                providerAccountId: tokenToReturn.account
                  .providerAccountId as string,
              },
            },
          });

          return {
            token,
            account: accountUpdated,
            user,
          };
        }
        return null;
      }

      if (
        !token.account ||
        typeof token.account !== "object" ||
        !("provider" in token.account) ||
        !("providerAccountId" in token.account)
      ) {
        return token;
      }
      //TODO find another way to persist the token datas token refresh
      // token datas doesn't persist in the jwt callback after first call
      const accountDatas = await prisma.account.findUnique({
        where: {
          provider_providerAccountId: {
            provider: token.account.provider as string,
            providerAccountId: token.account.providerAccountId as string,
          },
        },
      });

      if (
        accountDatas &&
        Date.now() < (accountDatas.expires_at as number) * 1000
      ) {
        return {
          ...token,
          account: accountDatas,
        };
      }

      console.log("refreshing token");
      return refreshAccessToken(token);
    },
  },
});
