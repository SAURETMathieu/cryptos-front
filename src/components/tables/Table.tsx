"use client";

import { Suspense, useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";

import { ColumnConfig } from "@/types/datasTable";

import { DataTable } from "./DataTable";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filter?: boolean;
  columnConfigs?: ColumnConfig[];
}

const Table = <TData, TValue>({
  columns,
  data,
  filter = true,
  columnConfigs,
}: DataTableProps<TData, TValue>) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DataTable
        data={data}
        columns={columns}
        filter={filter}
        columnConfigs={columnConfigs}
      />
    </Suspense>
  );
};

export default Table;
