"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { DataTablePagination } from "@/src/components/ui/tools/dataTablePagination";
import { DataTableToolbar } from "@/src/components/ui/tools/dataTableToolbar";
import useBreakpoints from "@/src/hooks/useBreakpoint";
import { columnBreakpoints } from "@/src/utils/columnBreakpoints";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { ColumnConfig } from "@/types/datasTable";
import { useRouter } from "next/navigation";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filter?: boolean;
  columnConfigs?: ColumnConfig[];
  rawLink?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filter = true,
  columnConfigs,
  rawLink,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  const { sm, md, lg, xl, xxl } = useBreakpoints();
  const endpoints = {
    sm,
    md,
    lg,
    xl,
    xxl,
  };
  const router = useRouter();

  React.useEffect(() => {
    table.getAllColumns().forEach((column) => {
      if (Object.prototype.hasOwnProperty.call(columnBreakpoints, column.id)) {
        const columnEndpoint = columnBreakpoints[column.id];
        column.toggleVisibility(
          endpoints[columnEndpoint as keyof typeof endpoints]
        );
      }
    });
  }, [sm, md, lg, xl, xxl, table]);

  const handleRowClick = (row: any) => {
    if (!rawLink) return;
    const datas:any = row.original;
    const pathToPush = datas[rawLink];
    const currentPath = window.location.pathname;
    const newPath = `${currentPath}/${pathToPush}`;
    router.push(newPath);
  };

  return (
    <div className="space-y-4">
      <DataTableToolbar
        table={table}
        filter={filter}
        columnConfigs={columnConfigs}
      />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {!header.isPlaceholder &&
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                  onClick={() => handleRowClick(row)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
