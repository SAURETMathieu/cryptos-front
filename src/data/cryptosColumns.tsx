"use client";

import Image from "next/image";
import emptyTokenSvg from "@/public/images/empty-token.svg";
import { DataTableColumnHeader } from "@/src/components/ui/tools/dataTableColumnHeader";
import { Crypto } from "@/src/schemas/cryptoSchema";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Crypto>[] = [
  {
    id: "logo",
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
      if (datas.logo_url === "/empty-token.svg") {
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
    id: "name",
    accessorKey: "cryptoName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const datas: any = row.original;
      const cryptoName = datas.cryptoName ?? "Unknown";
      return (
        <div className="max-w-[80px] truncate sm:max-w-[120px]">
          <span className="pl-2 font-medium">{cryptoName}</span>
        </div>
      );
    },
  },
  {
    id: "asset",
    accessorKey: "asset",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Asset" />
    ),
    cell: ({ row }) => {
      const datas: any = row.original;
      const cryptoAsset = datas.asset ?? "???";
      return <span className="pl-4 font-medium">{cryptoAsset}</span>;
    },
    enableHiding: false,
  },
  {
    id: "price",
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => {
      const { price } = row.original;
      return (
        <span className="max-w-[500px] truncate font-medium">
          {price ? (price > 1 ? price.toFixed(2) : price.toFixed(6)): "--"}
        </span>
      );
    },
  },
  {
    id: "24h",
    accessorKey: "price24h",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="24h" className="w-[80px]" />
    ),
    cell: ({ row }) => {
      const datas: any = row.original;
      const price24h = datas.price24h ?? 0;
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
    accessorKey: "price7d",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="7d" className="w-[80px]" />
    ),
    cell: ({ row }) => {
      const datas: any = row.original;
      const price7d = datas.price7d ?? 0;
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
    accessorKey: "price30d",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="30d" className="w-[80px]" />
    ),
    cell: ({ row }) => {
      const datas: any = row.original;
      const price30d = datas.price7d ?? 0;
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
    id: "quantity",
    accessorKey: "nbToken",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
    cell: ({ row }) => {
      const datas: any = row.original;
      return (
        <span className="max-w-[500px] truncate font-medium">
          {datas.nbToken ? (datas.nbToken > 1000 ? datas.nbToken.toFixed(2): datas.nbToken): "0"}
        </span>
      );
    },
  },
  {
    id: "balance",
    accessorKey: "balanceUsd",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Balance" />
    ),
    cell: ({ row }) => {
      const datas: any = row.original;

      const balanceUsd = datas.balanceUsd ?? 0;
      const displayBalance =
        balanceUsd < 0.01 && balanceUsd !== 0
          ? "< 0.01"
          : balanceUsd.toFixed(2);
      return (
        <span className="max-w-[500px] truncate font-medium">
          {displayBalance} $
        </span>
      );
    },
    enableHiding: false,
    enableSorting: true,
  },
  {
    id: "profits",
    accessorKey: "unrealizedProfit",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Profits"
        className="w-[120px]"
      />
    ),
    cell: ({ row }) => {
      const datas: any = row.original;
      const profits: number = datas.unrealizedProfit ?? 0;
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
];
