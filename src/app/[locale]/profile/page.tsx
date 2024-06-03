import { redirect } from "next/navigation";
import ProfilePage from "./ProfilePage";
import { auth } from "@/src/lib/auth";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return <ProfilePage />;
}
