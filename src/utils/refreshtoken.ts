import prisma from "@/lib/prisma";

export async function refreshAccessToken(tokenToReturn: any) {
  try {
    const url =
      "https://oauth2.googleapis.com/token?" +
      new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID as string,
        client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
        grant_type: "refresh_token",
        refresh_token: tokenToReturn.account.refresh_token,
      });

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    const accountUpdated = await prisma.account.update({
      where: {
        provider_providerAccountId: {
          provider: tokenToReturn.account.provider,
          providerAccountId: tokenToReturn.account.providerAccountId,
        },
      },
      data: {
        access_token: refreshedTokens.access_token,
        expires_at: Math.floor(Date.now() / 1000) + refreshedTokens.expires_in,
        refresh_token:
          refreshedTokens.refresh_token ?? tokenToReturn.refresh_token,
        id_token: refreshedTokens.id_token,
      },
    });

    tokenToReturn.account.access_token = accountUpdated.access_token;
    tokenToReturn.account.expires_at = accountUpdated.expires_at;
    tokenToReturn.account.refresh_token =
      accountUpdated.refresh_token ?? tokenToReturn.refresh_token;
    tokenToReturn.account.id_token = accountUpdated.id_token;
    return tokenToReturn;
  } catch (error) {
    console.log(error);

    return {
      ...tokenToReturn,
      error: "RefreshAccessTokenError",
    };
  }
}
