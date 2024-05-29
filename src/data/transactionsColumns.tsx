"use client";

import { DataTableColumnHeader } from "@/src/components/ui/tools/dataTableColumnHeader";
import { Icons } from "@/src/icons/icons";
import { Transaction } from "@/src/schemas/transactionSchema";
import formatIdx from "@/src/utils/formatIdx";
import { ColumnDef } from "@tanstack/react-table";
import { Info } from "lucide-react";

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "transaction",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title=""
        className="w-fit p-0"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="h-full w-[8px] rounded-l-lg bg-red-500 p-0">
          <span className="sr-only">{row.getValue("transaction")}</span>
        </div>
      );
    },
    enableHiding: false,
    enableSorting: false,
  },
  {
    accessorKey: "logo",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title=""
        className="w-fit text-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <span className="font-medium">
          <Icons.logo className="size-8" aria-label="Logo de l'application" />
        </span>
      );
    },
    enableHiding: false,
    enableSorting: false,
  },
  {
    accessorKey: "idx",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Idx"
        className="w-[12px] p-0"
      />
    ),
    cell: ({ row }) => {
      return (
        <span
          className="max-w-[50px] truncate font-medium"
          title={row.getValue("idx")}
        >
          {formatIdx(row.getValue("idx"))}
        </span>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[500px] truncate font-medium">
          {row.getValue("date")}
        </span>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "time",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[500px] truncate font-medium">
          {row.getValue("time")}
        </span>
      );
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => {
      return (
        <span className="truncate pl-4 font-medium">
          {row.getValue("type")}
        </span>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "devise",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Devise" />
    ),
    cell: ({ row }) => {
      return <span className="truncate pl-4 font-medium">USDT</span>;
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[500px] truncate font-medium">
          {row.getValue("price")}
        </span>
      );
    },
  },
  {
    accessorKey: "fees",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Fees"
        className="w-[80px]"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="w-[80px] truncate font-medium">
            {row.getValue("fees")} $
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[500px] truncate font-medium">
          {row.getValue("quantity")}
        </span>
      );
    },
  },
  {
    accessorKey: "total",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total" />
    ),
    cell: ({ row }) => {
      const quantity: number = row.getValue("quantity") as number;
      const price: number = row.getValue("price") as number;
      const total = (quantity * price).toFixed(2);
      return (
        <span className="max-w-[500px] truncate font-medium">{total}</span>
      );
    },
    enableHiding: false,
  },
  {
    id: "infos",
    cell: () => <Info className="mr-2 size-4" />,
  },
];
