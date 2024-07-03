"use client";

import { DataTableColumnHeader } from "@/src/components/ui/tools/dataTableColumnHeader";
import { Transaction } from "@/src/schemas/transactionSchema";
import formatIdx from "@/src/utils/formatIdx";
import formatDate from "@/utils/formatDate";
import getLanguageFromUrl from "@/utils/getLanguageFromUrl";
import { ColumnDef } from "@tanstack/react-table";
import { Info } from "lucide-react";

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "transaction",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="" className="w-fit p-0" />
    ),
    cell: ({ row }) => {
      const datas: any = row.original;
      return (
        <div
          className={`h-full w-[8px] rounded-l-lg ${
            datas.type === "sell" ? "bg-red-500" : "bg-[#119e45]"
          } p-0`}
        >
          <span className="sr-only">{datas.type}</span>
        </div>
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
    id: "Date",
    accessorKey: "timestamp",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      const datas: any = row.original;
      const currentUrl = window.location.href;
      const language = getLanguageFromUrl(currentUrl);
      const dateFormatted = formatDate(datas.timestamp, language);

      return (
        <span className="max-w-[500px] truncate font-medium">
          {dateFormatted}
        </span>
      );
    },
    enableHiding: false,
  },
  {
    id: "time",
    accessorKey: "timestamp",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time" />
    ),
    cell: ({ row }) => {
      const datas: any = row.original;
      const time = new Date(datas.timestamp).toLocaleTimeString();
      return (
        <span className="max-w-[500px] truncate font-medium">
          {time}
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
      const { price } = row.original;
      return (
        <span className="max-w-[500px] truncate font-medium">
          {price ? (price > 0.99 ? price.toFixed(2) : price.toFixed(6)) : "--"}
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
            {row.getValue("fees")}
          </span>
        </div>
      );
    },
  },
  {
    id: "Quantity",
    accessorKey: "value",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
    cell: ({ row }) => {
      const datas: any = row.original;
      return (
        <span className="max-w-[500px] truncate font-medium">
          {datas.value}
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
      const datas: any = row.original;
      const quantity: number = datas.value ?? 0;
      const price: number = datas.price ?? 0;
      const total = (quantity * price).toFixed(2);
      return (
        <span className="max-w-[500px] truncate font-medium">{total}</span>
      );
    },
    enableHiding: false,
    sortingFn: (rowA, rowB) => {
      const a:any = rowA.original;
      const b:any = rowB.original;
      const totalA = (a.value ?? 0) * (a.price ?? 0);
      const totalB = (b.value ?? 0) * (b.price ?? 0);
      return totalA - totalB;
    },
  },
];
