"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
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
import useCurrentWalletStore from "@/hooks/useCurrentWalletStore";

import { Skeleton } from "../ui/skeleton";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filter?: boolean;
  columnConfigs?: ColumnConfig[];
  rowLink?: string;
  isReady: boolean;
  setIsReady: React.Dispatch<React.SetStateAction<boolean>>;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filter = true,
  columnConfigs,
  rowLink,
  isReady = false,
  setIsReady,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const { sm, md, lg, xl, xxl } = useBreakpoints();

  const endpoints = React.useMemo(
    () => ({ sm, md, lg, xl, xxl }),
    [sm, md, lg, xl, xxl]
  );

  const tableData = React.useMemo(
    () => (isReady ? data : Array(30).fill({})),
    [isReady, data]
  );

  const tableColumns = React.useMemo(
    () =>
      isReady
        ? columns
        : columns.map((column) => ({
            ...column,
            cell: () => <Skeleton className="size-full" />,
          })),
    [isReady, columns]
  );

  const setIndexOfTransactions = useCurrentWalletStore(
    (state) => state.setIndexOfTransactions
  );
  const indexOfTransactions = useCurrentWalletStore(
    (state) => state.indexOfTransactions
  );
  const setCurrentTransactionsIndexes = useCurrentWalletStore(
    (state) => state.setCurrentTransactionsIndexes
  );

  const table = useReactTable({
    data: tableData,
    columns: tableColumns,
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

  const currentPage = table.getState().pagination.pageIndex;

  const router = useRouter();

  const handleSelectRow = React.useCallback(
    (row: any) => {
      setCurrentTransactionsIndexes(table.getRowModel().rows);

      if (!rowLink) {
        row.toggleSelected(true);
        table
          .getRowModel()
          .rows.filter((r) => r.index !== row.index)
          .forEach((r) => r.toggleSelected(false));
      }
    },
    [table, rowLink, setCurrentTransactionsIndexes]
  );

  React.useEffect(() => {
    table.getAllColumns().forEach((column) => {
      if (Object.prototype.hasOwnProperty.call(columnBreakpoints, column.id)) {
        const columnEndpoint = columnBreakpoints[column.id];
        column.toggleVisibility(
          endpoints[columnEndpoint as keyof typeof endpoints]
        );
      }
    });
    const rowSelected = table.getRowModel().rows[0];
    if (rowSelected) {
      handleSelectRow(rowSelected);
    }
    setIsReady(true);
  }, [endpoints, table, setIsReady, handleSelectRow]);

  React.useEffect(() => {
    const rowSelected = table.getRowModel().rows[indexOfTransactions];
    if (rowSelected) {
      handleSelectRow(rowSelected);
    }
  }, [indexOfTransactions, table, handleSelectRow, currentPage]);

  const handleRowClick = (row: any, cellId: string, index: number = 0) => {
    if (!rowLink) {
      setIndexOfTransactions(index);
    }

    if (!rowLink || cellId === "actions") return;
    const datas: any = row.original;
    const pathToPush = datas[rowLink];
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
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                  className={`cursor-pointer ${
                    row.getIsSelected() ? "bg-muted" : ""
                  }`}
                  onClick={() => handleSelectRow(row)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      onClick={() => handleRowClick(row, cell.column.id, index)}
                    >
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
