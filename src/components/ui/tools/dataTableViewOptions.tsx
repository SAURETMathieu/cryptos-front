"use client";

import { useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/src/components/ui/dropdown-menu";
import useBreakpoint from "@/src/hooks/useBreakpoint";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  const isSm = useBreakpoint(640); // sm breakpoint
  const isMd = useBreakpoint(768); // md breakpoint
  const isLg = useBreakpoint(1024); // lg breakpoint
  const isXl = useBreakpoint(1280); // xl breakpoint

  const getInitialVisibility = (columnId: string) => {
    if (columnId === "logo") return isXl;
    if (columnId === "devise") return isXl;
    if (columnId === "fees") return isXl;
    return true;
  };

  useEffect(() => {
    table.getAllColumns().forEach((column) => {
      if (
        column.id === "logo" ||
        column.id === "devise" ||
        column.id === "fees"
      ) {
        column.toggleVisibility(getInitialVisibility(column.id));
      }
    });
  }, [isSm, isMd, isLg, isXl ,table]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
        >
          <MixerHorizontalIcon className="mr-2 size-4" />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide()
          )
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={() => column.toggleVisibility(getInitialVisibility(column.id))}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
