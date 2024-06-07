import prisma from "@/lib/prisma";

export async function upsertUserAndAccount(token: any): Promise<boolean> {
  try {
    if (!token) {
      throw new Error("Token is missing.");
    }

    const test = await prisma.$transaction(async (prisma) => {
      await prisma.user.upsert({
        where: { id: token.user.id },
        update: {
          name: token.user.name,
          email: token.user.email,
          image: token.user.image,
          updatedAt: new Date(),
        },
        create: {
          id: token.user.id,
          name: token.user.name,
          email: token.user.email,
          image: token.user.image,
          emailVerified: token.user.emailVerified,
        },
      });

      await prisma.account.upsert({
        where: {
          provider_providerAccountId: {
            provider: token.account.provider,
            providerAccountId: token.account.providerAccountId,
          },
        },
        update: {
          access_token: token.account.access_token,
          refresh_token: token.account.refresh_token,
          expires_at: token.account.expires_at,
          id_token: token.account.id_token,
          updatedAt: new Date(),
        },
        create: {
          userId: token.user.id,
          type: token.account.type,
          provider: token.account.provider,
          providerAccountId: token.account.providerAccountId,
          refresh_token: token.account.refresh_token,
          access_token: token.account.access_token,
          expires_at: token.account.expires_at,
          id_token: token.account.id_token,
          token_type: token.account.token_type,
          scope: token.account.scope,
        },
      });

      console.log("Upsert of User and Account successful.");
      return true; // or whatever value you want to return on success
    });

    return test;
  } catch (error) {
    console.error("Upsert of User and Account failed:", error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}
