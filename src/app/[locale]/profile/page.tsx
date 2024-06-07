import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import ProfilePage from "./ProfilePage";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return <ProfilePage />;
}
