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
    id: "day",
    accessorKey: "day",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="24h" className="w-[80px]" />
    ),
    cell: ({ row }) => {
      const datas: any = row.original;
      const price24h = datas.day ?? 0;
      const className =
        price24h > 0
          ? "bg-[#119e45]"
          : price24h < 0
          ? "bg-red-600"
          : "bg-gray-500";
      const displayPrice24h = price24h > 999 ? "> 999" : price24h.toFixed(2);

      return (
        <div className="flex items-center">
          <span
            className={
              "text-white p-1 text-center rounded rounded-4 w-[65px] " +
              className
            }
          >
            {displayPrice24h}%
          </span>
        </div>
      );
    },
  },
  {
    id: "7d",
    accessorKey: "day7",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="7d" className="w-[80px]" />
    ),
    cell: ({ row }) => {
      const datas: any = row.original;
      const price7d = datas.day7 ?? 0;
      const className =
        price7d > 0
          ? "bg-[#119e45]"
          : price7d < 0
          ? "bg-red-600"
          : "bg-gray-500";
      const displayprice7d = price7d > 999 ? "> 999" : price7d.toFixed(2);
      return (
        <div className="flex items-center">
          <span
            className={
              "text-white p-1 text-center rounded rounded-4 w-[65px] " +
              className
            }
          >
            {displayprice7d}%
          </span>
        </div>
      );
    },
  },
  {
    id: "30d",
    accessorKey: "month",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="30d" className="w-[80px]" />
    ),
    cell: ({ row }) => {
      const datas: any = row.original;
      const price30d = datas.month ?? 0;
      const className =
        price30d > 0
          ? "bg-[#119e45]"
          : price30d < 0
          ? "bg-red-600"
          : "bg-gray-500";
      const displayprice30d = price30d > 999 ? "> 999" : price30d.toFixed(2);
      return (
        <div className="flex items-center">
          <span
            className={
              "text-white p-1 text-center rounded rounded-4 w-[65px] " +
              className
            }
          >
            {displayprice30d}%
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
    id: "Profits",
    accessorKey: "profits",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Profits"
        className="w-[120px]"
      />
    ),
    cell: ({ row }) => {
      const datas: any = row.original;
      const profits: number = datas.profits ?? 0;
      const className =
        profits > 0
          ? "text-[#119e45]"
          : profits < 0
          ? "text-red-600"
          : "text-gray-500";
      return (
        <div className="flex items-center">
          <span className={"font-bold " + className}>
            {profits.toFixed(2)} $
          </span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
