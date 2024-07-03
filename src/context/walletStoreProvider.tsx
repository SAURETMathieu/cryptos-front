"use client";

import { ReactNode, useCallback, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { getSession } from "next-auth/react";

import { useWalletStore } from "@/hooks/useCurrentWalletStore";
import ErrorPage from "@/src/app/ErrorPage";

interface Props {
  children: ReactNode;
  id: number;
  asset?: string;
}

export default function CurrentWalletProvider({ children, id, asset }: Props) {
  const fetchWalletsById = useWalletStore((state) => state.fetchWalletsById);
  const setCurrentAsset = useWalletStore((state) => state.setCurrentAsset);
  const setCurrentBalance = useWalletStore((state) => state.setCurrentBalance);
  const [error, setError] = useState<{ status: number; message: string } | null>(null);

  const fetchData = useCallback(async () => {
    const session = await getSession();
    if (session) {
      const isSuccess = await fetchWalletsById(id, session.account.id_token);
      if (!isSuccess) {
        setError({ status: 404, message: "Wallet not found" });
      }
      if(asset){
        setCurrentAsset(asset);
        setCurrentBalance(asset);
      }
    } else {
      // fetch fake datas
    }
  }, [fetchWalletsById, id, setCurrentAsset, setCurrentBalance, asset]);

  useEffect(() => {
    if (id) fetchData();
  }, [fetchData, id]);

  if (error) {
    return <ErrorPage statusCode={error.status} message={error.message} />;
  }

  return <>{children}</>;
}
