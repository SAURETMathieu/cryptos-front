import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { ColumnConfig } from "@/types/datasTable";

import { DataTableFacetedFilter } from "./dataTableFacetedFilter";
import { DataTableViewOptions } from "./dataTableViewOptions";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filter?: boolean;
  columnConfigs?: ColumnConfig[];
}

export function DataTableToolbar<TData>({
  table,
  filter = true,
  columnConfigs,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-start gap-2 max-md:flex-col lg:flex-col xl:flex-row">
        {filter && (
          <Input
            placeholder="Filter..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="order-2 h-8 w-[290px] md:order-1 lg:order-2 xl:order-1"
          />
        )}
        <div className="xl:oder-2 order-1 flex w-full gap-2 md:order-2 lg:order-1">
          {columnConfigs &&
            columnConfigs.map((config) => (
              <DataTableFacetedFilter
                key={config.id}
                column={table.getColumn(config.id)}
                title={config.title}
                options={config.options}
              />
            ))}
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
          <DataTableViewOptions table={table} />
        </div>
      </div>
    </div>
  );
}
