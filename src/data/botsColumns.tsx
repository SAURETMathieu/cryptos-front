"use client";

import { DataTableColumnHeader } from "@/src/components/ui/tools/dataTableColumnHeader";
import { Bot } from "@/src/schemas/botSchema";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowRight, ArrowUp, Settings } from "lucide-react";

export const columns: ColumnDef<Bot>[] = [
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title=""
        className="w-[12px] p-0"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="h-full w-[12px] rounded-l-lg bg-red-500 p-0">
          <span className="sr-only">{row.getValue("status")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[80px] truncate sm:max-w-[150px]">
          <span className="pl-2 font-bold">{row.getValue("name")}</span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "wallet",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Wallet" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("wallet")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "open_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Start" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[500px] truncate font-medium">
          {row.getValue("open_date")}
        </span>
      );
    },
  },
  {
    accessorKey: "close_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="End" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[500px] truncate font-medium">
          {row.getValue("close_date")}
        </span>
      );
    },
  },
  {
    accessorKey: "opened",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Opened" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="mx-auto max-w-[80px] truncate font-medium">
            {row.getValue("opened")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "closed",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Closed" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="mx-auto max-w-[80px] truncate font-medium">
            {row.getValue("closed")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "fees",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fees" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="truncate font-medium">{row.getValue("fees")} $</span>
        </div>
      );
    },
  },
  {
    accessorKey: "asset",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Asset" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="truncate font-medium">{row.getValue("asset")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "strategy",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Strategy" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.getValue("strategy")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "balance",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Balance" />
    ),
    cell: ({ row }) => {
      return (
        <div className="">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("balance")} $
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "profits",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Profits" />
    ),
    cell: ({ row }) => {
      const profits: number = row.getValue("balance");
      const className =
        profits > 0
          ? "text-[#119e45]"
          : profits < 0
          ? "text-red-600"
          : "text-gray-500";
      return (
        <div className={`flex items-center ${className}`}>
          {profits > 0 && <ArrowUp className="mr-2 size-4" />}
          {profits < 0 && <ArrowDown className="mr-2 size-4" />}
          {profits == 0 && <ArrowRight className="mr-2 size-4" />}
          <span>{profits} $</span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <Settings className="mr-2 size-4" />,
  },
];
