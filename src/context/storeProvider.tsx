"use client";

import { ReactNode, useCallback, useEffect } from "react";
import { redirect } from "next/navigation";
import { getSession } from "next-auth/react";

import { useStore } from "@/hooks/useStore";

interface Props {
  children: ReactNode;
}

export default function ZustandProvider({ children }: Props) {
  const fetchWallets = useStore((state) => state.fetchWallets);

  const fetchData = useCallback(async () => {
    const session = await getSession();
    if (session) {
      await fetchWallets(session.account.id_token);
    } else {
      redirect("/login");
    }
  }, [fetchWallets]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <>{children}</>;
}
