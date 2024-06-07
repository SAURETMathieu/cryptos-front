import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

import { auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";

import LogOutButton from "../buttons/logOutButton";
import NavigationLink from "../utils/NavigationLink";

export default async function ProfilMenu() {
  const session = await auth();

  const urlImage: string = session?.user?.image ?? "/placeholder-user.jpg";
  return session ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full dark:border-none"
        >
          <Image
            src={urlImage}
            width={36}
            height={36}
            alt="Avatar"
            className="overflow-hidden rounded-full"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          {session ? session.user?.email : "email@gmail.com"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <NavigationLink href="/profile" aria-label="Link to profil page">
          <DropdownMenuItem>Profil</DropdownMenuItem>
        </NavigationLink>
        <NavigationLink href="/support" aria-label="Link to support page">
          <DropdownMenuItem>Support</DropdownMenuItem>
        </NavigationLink>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full dark:border-none"
        >
          <Image
            src="/placeholder-user.jpg"
            width={36}
            height={36}
            alt="Avatar"
            className="overflow-hidden rounded-full"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <NavigationLink href="/login" aria-label="Link to sign in page">
          <DropdownMenuItem>Sign in</DropdownMenuItem>
        </NavigationLink>
        <NavigationLink href="/register" aria-label="Link to sign up page">
          <DropdownMenuItem>Sign up</DropdownMenuItem>
        </NavigationLink>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
