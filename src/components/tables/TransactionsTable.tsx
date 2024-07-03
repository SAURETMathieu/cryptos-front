"use client";

import Table from "@/src/components/tables/Table";
import { transactionsType } from "@/src/data/tableLabels";
import { columns } from "@/src/data/transactionsColumns";

import { ColumnConfig } from "@/types/datasTable";
import useCurrentWalletStore from "@/hooks/useCurrentWalletStore";

const columnConfigs: ColumnConfig[] = [
  {
    id: "type",
    title: "Type",
    options: transactionsType,
  },
];

export default function TransactionsTable() {
  //TODO type of balances for data Table
  const balance: any = useCurrentWalletStore(
    (state) => state.currentBalance
  );
  return (
    <Table
      data={balance?.transactions ?? []}
      columns={columns}
      columnConfigs={columnConfigs}
      filter={false}
    />
  );
}
