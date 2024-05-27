"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { statuses, strategies, blockchains } from "@/src/data/tableLabels";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { DataTableFacetedFilter } from "./dataTableFacetedFilter";
import { DataTableViewOptions } from "./dataTableViewOptions";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-start gap-2 max-md:flex-col lg:flex-col xl:flex-row">
        <Input
          placeholder="Filter..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="order-2 h-8 w-[290px] md:order-1 lg:order-2 xl:order-1"
        />
        <div className="xl:oder-2 order-1 flex w-full gap-2 md:order-2 lg:order-1">
          {table.getColumn("status") && (
            <DataTableFacetedFilter
              column={table.getColumn("status")}
              title="Status"
              options={statuses}
            />
          )}
          {table.getColumn("strategy") && (
            <DataTableFacetedFilter
              column={table.getColumn("strategy")}
              title="Strategy"
              options={strategies}
            />
          )}
          {table.getColumn("blockchain") && (
            <DataTableFacetedFilter
              column={table.getColumn("blockchain")}
              title="Blockchain"
              options={blockchains}
            />
          )}
          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 lg:px-3"
            >
              <span className="hidden">Reset</span>
              <Cross2Icon className="size-4" />
            </Button>
          )}
        </div>
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
