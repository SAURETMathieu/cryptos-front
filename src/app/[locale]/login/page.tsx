"use client";

import { signIn } from "next-auth/react";
import { redirect } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginForm() {

  const handleSignIn = async (provider: string) => {
    await signIn(provider, { callbackUrl: "/" });
  }

  return (
    <main className="flex min-h-screen flex-1 p-4 sm:py-4 sm:pl-14">
      <Card className="mx-auto mt-8 h-fit max-h-fit max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Choose a provider to sign in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Button variant="outline" className="w-full" onClick={() => handleSignIn("google")}>
              Sign in with Google
            </Button>
            <Button variant="outline" className="w-full" onClick={() => handleSignIn("github")}>
            Sign in with Github
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
