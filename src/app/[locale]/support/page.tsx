import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import SupportPage from "./SupportPage";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return <SupportPage />;
}
