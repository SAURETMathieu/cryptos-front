import { Button } from "@/src/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import useCurrentWalletStore from "@/hooks/useCurrentWalletStore";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {

  const synchronizeStore = () => {
    setIndexOfTransactions(0);
    setCurrentTransactionsIndexes(table.getRowModel().rows);
  }

  const setCurrentTransactionsIndexes = useCurrentWalletStore(
    (state) => state.setCurrentTransactionsIndexes
  );

  const setIndexOfTransactions = useCurrentWalletStore(
    (state) => state.setIndexOfTransactions
  );

  const handleNextPage = () => {
    table.nextPage();
    synchronizeStore();
  }

  const handlePreviousPage = () => {
    table.previousPage();
    synchronizeStore();
  }

  const handleSetPageIndex = (index:number) => {
    table.setPageIndex(index);
    synchronizeStore();
  }

  const handleSetPageSize = (size:number) => {
    table.setPageSize(size);
    synchronizeStore();
  }

  return (
    <div className="flex items-center justify-end px-2 sm:justify-between">
      <div className="flex-1 text-sm text-muted-foreground max-sm:hidden">
        {table.getCenterRows().length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s).
      </div>
      <div className="flex items-center space-x-2 lg:space-x-6">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium max-sm:hidden lg:hidden xl:block">
            Rows per page
          </p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              handleSetPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden size-8 p-0 lg:flex"
            onClick={() => handleSetPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <DoubleArrowLeftIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="size-8 p-0"
            onClick={() => handlePreviousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="size-8 p-0"
            onClick={() => handleNextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden size-8 p-0 lg:flex"
            onClick={() => handleSetPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <DoubleArrowRightIcon className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
