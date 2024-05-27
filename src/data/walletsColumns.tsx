"use client";

import { DataTableColumnHeader } from "@/src/components/tools/dataTableColumnHeader";
import { DataTableRowActions } from "@/src/components/tools/dataTableRowActions";
import { Wallet } from "@/src/schemas/walletSchema";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Wallet>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[500px] truncate font-medium">
          {row.getValue("name")}
        </span>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "blockchain",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Blockchain" className="max-w-[80px]"/>
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[80px] truncate font-medium">
            {row.getValue("blockchain")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "day",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="24h" />
    ),
    cell: ({ row }) => {
      const day: number = row.getValue("day");
      return (
        <div className="flex items-center">
          {day > 0 && <ArrowUpIcon className="mr-2 size-4 text-green-500" />}
          {day < 0 && <ArrowDownIcon className="mr-2 size-4 text-red-500" />}
          {day == 0 && (
            <ArrowRightIcon className="mr-2 size-4 text-muted-foreground" />
          )}
          <span>{day}%</span>
        </div>
      );
    },
  },
  {
    accessorKey: "day7",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="7d" className="w-[80px]"/>
    ),
    cell: ({ row }) => {
      const day7: number = row.getValue("day7");
      return (
        <div className="flex items-center">
          {day7 > 0 && <ArrowUpIcon className="mr-2 size-4 text-green-500" />}
          {day7 < 0 && <ArrowDownIcon className="mr-2 size-4 text-red-500" />}
          {day7 == 0 && (
            <ArrowRightIcon className="mr-2 size-4 text-muted-foreground" />
          )}
          <span>{day7}%</span>
        </div>
      );
    },
  },
  {
    accessorKey: "month",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="30d" className="w-[80px]"/>
    ),
    cell: ({ row }) => {
      const month: number = row.getValue("month");
      return (
        <div className="flex items-center">
          {month > 0 && <ArrowUpIcon className="mr-2 size-4 text-green-500" />}
          {month < 0 && <ArrowDownIcon className="mr-2 size-4 text-red-500" />}
          {month == 0 && (
            <ArrowRightIcon className="mr-2 size-4 text-muted-foreground" />
          )}
          <span>{month}%</span>
        </div>
      );
    },
  },
  {
    accessorKey: "fees",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fees" className="w-[80px]"/>
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
    accessorKey: "balance",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Balance" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[500px] truncate font-medium">
          {row.getValue("balance")} $
        </span>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "profits",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Profits" className="w-[120px]"/>
    ),
    cell: ({ row }) => {
      const profits: number = row.getValue("balance");
      return (
        <div className="flex items-center">
          {profits > 0 && (
            <ArrowUpIcon className="mr-2 size-4 text-green-500" />
          )}
          {profits < 0 && (
            <ArrowDownIcon className="mr-2 size-4 text-red-500" />
          )}
          {profits == 0 && (
            <ArrowRightIcon className="mr-2 size-4 text-muted-foreground" />
          )}
          <span>{profits} $</span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
