"use client";

import { DataTableColumnHeader } from "@/src/components/ui/tools/dataTableColumnHeader";
import { Crypto } from "@/src/schemas/cryptoSchema";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowRight, ArrowUp, Info } from "lucide-react";
import Image from "next/image";
import emptyTokenSvg from "@/public/images/empty-token.svg";

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
      const datas: any = row.original;
      if(datas.logo_url === "/empty-token.svg"){
        datas.logo_url = emptyTokenSvg;
      }

      return (
        <span className="font-medium">
          <Image
            src={datas.logo_url}
            alt={row.getValue("name") + " logo"}
            className="rounded-full"
            width={32}
            height={32}
          />
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
      const { price } = row.original;
      return (
        <span className="max-w-[500px] truncate font-medium">
          {price > 1 ? price.toFixed(2) : price.toFixed(6)}
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
      const datas: any = row.original;

      return (
        <div className="flex items-center">
          {datas.price24h > 0 && <ArrowUp className="mr-2 size-4 text-green-500" />}
          {datas.price24h < 0 && <ArrowDown className="mr-2 size-4 text-red-500" />}
          {datas.price24h == 0 && (
            <ArrowRight className="mr-2 size-4 text-muted-foreground" />
          )}
          <span>{datas.price24h.toFixed(2)}%</span>
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
      const datas: any = row.original;

      return (
        <div className="flex items-center">
          {datas.price24h > 0 && <ArrowUp className="mr-2 size-4 text-green-500" />}
          {datas.price24h < 0 && <ArrowDown className="mr-2 size-4 text-red-500" />}
          {datas.price24h == 0 && (
            <ArrowRight className="mr-2 size-4 text-muted-foreground" />
          )}
          <span>{datas.price24h.toFixed(2)}%</span>
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
      const datas: any = row.original;

      return (
        <div className="flex items-center">
          {datas.price24h > 0 && <ArrowUp className="mr-2 size-4 text-green-500" />}
          {datas.price24h < 0 && <ArrowDown className="mr-2 size-4 text-red-500" />}
          {datas.price24h == 0 && (
            <ArrowRight className="mr-2 size-4 text-muted-foreground" />
          )}
          <span>{datas.price24h.toFixed(2)}%</span>
        </div>
      );
    },
  },
  {
    accessorKey: "Quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
    cell: ({ row }) => {
      const datas: any = row.original;
      return (
        <span className="max-w-[500px] truncate font-medium">
          {datas.nbToken}
        </span>
      );
    },
  },
  {
    accessorKey: "Balance",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Balance" />
    ),
    cell: ({ row }) => {
      const datas:any = row.original;

      const balance = datas.price * datas.nbToken;
      return (
        <span className="max-w-[500px] truncate font-medium">
          {balance.toFixed(2)} $
        </span>
      );
    },
    enableHiding: false,
    enableSorting: true,
  },
  {
    accessorKey: "Profits",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Profits"
        className="w-[120px]"
      />
    ),
    cell: ({ row }) => {
      const profits: number = row.getValue("price");
      return (
        <div className="flex items-center">
          {profits > 0 && <ArrowUp className="mr-2 size-4 text-green-500" />}
          {profits < 0 && <ArrowDown className="mr-2 size-4 text-red-500" />}
          {profits == 0 && (
            <ArrowRight className="mr-2 size-4 text-muted-foreground" />
          )}
          <span>{profits.toFixed(2)} $</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <Info className="mr-2 size-4" />,
  },
];
