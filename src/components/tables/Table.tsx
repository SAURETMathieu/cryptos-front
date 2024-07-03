"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";

import { ColumnConfig } from "@/types/datasTable";

import { DataTable } from "./DataTable";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filter?: boolean;
  columnConfigs?: ColumnConfig[];
  rowLink?: string;
}

const Table = <TData, TValue>({
  columns,
  data,
  filter = true,
  columnConfigs,
  rowLink,
}: DataTableProps<TData, TValue>) => {
  const [isReady, setIsReady] = useState(false);

  return (
    <>
      <DataTable
        data={data}
        columns={columns}
        filter={filter}
        columnConfigs={columnConfigs}
        rowLink={rowLink}
        isReady={isReady}
        setIsReady={setIsReady}
      />
    </>
  );
};

export default Table;
