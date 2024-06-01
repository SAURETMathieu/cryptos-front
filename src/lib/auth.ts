import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    GitHub({
      authorization: { params: { scope: 'read:user user:email' } },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async signIn({profile}) {
      if(!profile?.email){
        throw new Error('No profile email found');
      }
      // TODO database logic
      // await prisma.user.upsert({
      //   where: {
      //     email: profile.email,
      //   },
      //   create: {
      //     email: profile.email,
      //     name: profile.name,
      //   },
      //   update: {
      //     name: profile.name,
      //   },
      // })
      return true;
    },
    async jwt({ token, user, account, profile }) {
      // if (profile) {
      //   const user = await prisma.user.findUnique({
      //     where: {
      //       email: profile.email,
      //     },
      //   })
      //   if (!user) {
      //     throw new Error('No user found')
      //   }
      //   token.id = user.id
      // }
      return token
    },
    async session({ session, token }) {
      // session.id = token.id

      return session
    },
  },
});