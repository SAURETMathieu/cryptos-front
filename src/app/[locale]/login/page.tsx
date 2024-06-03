import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";
import { auth } from "@/src/lib/auth";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return <LoginForm />;
}
