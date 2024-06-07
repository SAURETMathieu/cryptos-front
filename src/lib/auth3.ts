import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import prisma from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  basePath: "/api/auth",
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
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
    async session({ session, user }) {
      if (user) {
        session.user = user;
      }
      return session;
    },
  },
});