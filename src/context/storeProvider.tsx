"use client";

import { ReactNode, useEffect } from "react";
import { redirect } from "next/navigation";
import { getSession } from "next-auth/react";

import { useStore } from "@/hooks/useStore";

interface Props {
  children: ReactNode;
}

export default function ZustandProvider({ children }: Props) {
  const { fetchWallets } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      const session = await getSession();
      if (session) {
        await fetchWallets(session.account.id_token);
      } else {
        redirect("/login");
      }
    };

    fetchData();
  }, []);

  return <>{children}</>;
}
