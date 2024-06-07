import { type DefaultSession, type Account } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  id: string;
  name: string;
  email: string;
  emailVerified: Date;
  image: string;
  role: "ADMIN" | "USER";
  createdAt: Date;
  updatedAt: Date;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
    account: any;
    accessToken: string;
    error: string;
    token: any;
  }
}




