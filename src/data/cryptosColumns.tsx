"use client";

import { DataTableColumnHeader } from "@/src/components/tools/dataTableColumnHeader";
import { Icons } from "@/src/icons/icons";
import { Crypto } from "@/src/schemas/cryptoSchema";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowRight, ArrowUp, Info } from "lucide-react";

export const columns: ColumnDef<Crypto>[] = [
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
  },
  {
    accessorKey: "logo",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Logo"
        className="w-[35px] text-center"
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
    accessorKey: "asset",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Asset" />
    ),
    cell: ({ row }) => {
      return (
        <span className="truncate pl-4 font-medium">
          {row.getValue("asset")}
        </span>
      );
    },
    enableHiding: false,
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
    enableHiding: false,
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
          {day > 0 && <ArrowUp className="mr-2 size-4 text-green-500" />}
          {day < 0 && <ArrowDown className="mr-2 size-4 text-red-500" />}
          {day == 0 && (
            <ArrowRight className="mr-2 size-4 text-muted-foreground" />
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
      return (
        <div className="flex items-center">
          {day7 > 0 && <ArrowUp className="mr-2 size-4 text-green-500" />}
          {day7 < 0 && <ArrowDown className="mr-2 size-4 text-red-500" />}
          {day7 == 0 && (
            <ArrowRight className="mr-2 size-4 text-muted-foreground" />
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
      return (
        <div className="flex items-center">
          {month > 0 && <ArrowUp className="mr-2 size-4 text-green-500" />}
          {month < 0 && <ArrowDown className="mr-2 size-4 text-red-500" />}
          {month == 0 && (
            <ArrowRight className="mr-2 size-4 text-muted-foreground" />
          )}
          <span>{month}%</span>
        </div>
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
      <DataTableColumnHeader
        column={column}
        title="Profits"
        className="w-[120px]"
      />
    ),
    cell: ({ row }) => {
      const profits: number = row.getValue("balance");
      return (
        <div className="flex items-center">
          {profits > 0 && <ArrowUp className="mr-2 size-4 text-green-500" />}
          {profits < 0 && <ArrowDown className="mr-2 size-4 text-red-500" />}
          {profits == 0 && (
            <ArrowRight className="mr-2 size-4 text-muted-foreground" />
          )}
          <span>{profits} $</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <Info className="mr-2 size-4" />,
  },
];
