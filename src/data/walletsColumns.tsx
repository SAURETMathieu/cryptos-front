"use client";

import { DataTableColumnHeader } from "@/src/components/ui/tools/dataTableColumnHeader";
import { DataTableRowActions } from "@/src/components/ui/tools/dataTableRowActions";
import { Wallet } from "@/src/schemas/walletSchema";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<Wallet>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="id" className="sr-only" />
    ),
    cell: ({ row }) => {
      return (
            <span className="sr-only">{row.getValue("id")}</span>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" className="" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[80px] truncate sm:max-w-[150px]">
          <Link href={`/wallets/${row.getValue("id")}`}>
            <span className="pl-2 font-bold">{row.getValue("name")}</span>
          </Link>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "blockchain",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Blockchain"
        className="max-w-[80px]"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex max-w-[80px] truncate">
          <span className="">{row.getValue("blockchain")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
  },
  {
    accessorKey: "day",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="24h" />
    ),
    cell: ({ row }) => {
      const day: number = row.getValue("day");
      if(day == null) return <span className="text-muted-foreground">N/A</span>
      return (
        <div className="flex items-center font-light">
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
      <DataTableColumnHeader column={column} title="7d" className="w-[80px]" />
    ),
    cell: ({ row }) => {
      const day7: number = row.getValue("day7");
      if(day7 == null) return <span className="text-muted-foreground">N/A</span>
      return (
        <div className="flex items-center font-light">
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
      <DataTableColumnHeader column={column} title="30d" className="w-[80px]" />
    ),
    cell: ({ row }) => {
      const month: number = row.getValue("month");
      if(month == null) return <span className="text-muted-foreground">N/A</span>
      return (
        <div className="flex items-center font-light">
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
    accessorKey: "balance",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Balance" />
    ),
    cell: ({ row }) => {
      const balance: number = row.getValue("balance");
      if(balance == null) return <span className="max-w-[500px] truncate font-bold">N/A</span>
      return (
        <span className="max-w-[500px] truncate font-bold">
          {balance.toFixed(2)} $
        </span>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "profits",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Profits"
        className="w-[120px]"
      />
    ),
    cell: ({ row }) => {
      let profits: number = row.getValue("profits");
      if(profits == null){
        profits = 0;
      }

      return (
        <div className="flex items-center font-bold">
          {profits > 0 && (
            <ArrowUpIcon className="mr-2 size-4 text-green-500" />
          )}
          {profits < 0 && (
            <ArrowDownIcon className="mr-2 size-4 text-red-500" />
          )}
          {profits == 0 && (
            <ArrowRightIcon className="mr-2 size-4 text-muted-foreground" />
          )}
          <span>{profits.toFixed(2)} $</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
