"use client";

import Table from "@/src/components/tables/Table";
import { columns } from "@/src/data/cryptosColumns";

import useCurrentWalletStore from "@/hooks/useCurrentWalletStore";

export default function CryptosTable() {
  //TODO type of balances for data Table
  const balances:any = useCurrentWalletStore((state) => state.wallet?.balances);
  return <Table data={balances ?? []} columns={columns} rowLink="asset" />;
}
