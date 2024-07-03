"use client";

import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/src/components/ui/pagination";
import { Separator } from "@/src/components/ui/separator";
import formatDate from "@/utils/formatDate";
import formatFullDate from "@/utils/formatFullDate";
import formatHour from "@/utils/formatHour";
import formatIdx from "@/utils/formatIdx";
import formatPrice from "@/utils/formatPrice";
import { ChevronLeft, ChevronRight } from "lucide-react";

import useCurrentWalletStore from "@/hooks/useCurrentWalletStore";
import CopyButton from "@/components/buttons/copyButton";

export default function TransactionDetails() {
  const transaction = useCurrentWalletStore(
    (state) => state.currentBalance?.transactions
  );
  const indexOfTransactions = useCurrentWalletStore(
    (state) => state.indexOfTransactions
  );
  const currentTransactionsIndexes = useCurrentWalletStore(
    (state) => state.currentTransactionsIndexes
  );

  const setIndexOfTransactionsDiff = useCurrentWalletStore( (state) => state.setIndexOfTransactionsDiff);
  const currentTransaction =
    transaction &&
    indexOfTransactions !== undefined &&
    indexOfTransactions !== null &&
    currentTransactionsIndexes
      ? transaction[currentTransactionsIndexes[indexOfTransactions]]
      : null;

  return (
    <section className="w-full p-4 pt-0 lg:pl-0">
      <Card className="h-fit w-full max-w-full">
        <CardHeader className="flex flex-row items-start bg-muted/50 py-3 pr-2">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              IDx:{" "}
              <span title={currentTransaction?.idx ?? "--"}>
                {currentTransaction?.idx
                  ? formatIdx(currentTransaction.idx, 6)
                  : "--"}
              </span>
              {currentTransaction?.idx && (
                <CopyButton toCopy={currentTransaction?.idx ?? ""} />
              )}
            </CardTitle>
            <CardDescription>
              {currentTransaction?.timestamp
                ? formatFullDate(currentTransaction.timestamp)
                : ""}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex w-full flex-col gap-2 p-4">
          <span
            className={`text-center font-semibold capitalize ${
              currentTransaction?.type === "sell"
                ? "text-red-600"
                : "text-[#119e45]"
            }`}
          >
            {currentTransaction?.type}
          </span>
          <Separator className="my-2" />
          <div className="flex justify-between text-sm">
            <span className="uppercase text-muted-foreground">id :</span>
            <span className="font-semibold">{currentTransaction?.id}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Date :</span>
            <span className="font-semibold">
              {formatDate(currentTransaction?.timestamp)}{" "}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Hour :</span>
            <span className="font-semibold">
              {formatHour(currentTransaction?.timestamp)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Type</span>
            <span className="font-semibold">{currentTransaction?.type}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Devise</span>
            <span className="font-semibold capitalize">USDT</span>
          </div>
          <Separator className="my-2" />
          <div className="grid grid-cols-2 gap-2">
            <div className="grid auto-rows-max gap-2">
              <div className="font-semibold">From</div>
              <div className="flex gap-2 text-muted-foreground">
                <span title={currentTransaction?.fromAddress ?? "--"}>
                  {currentTransaction?.fromAddress
                    ? formatIdx(currentTransaction.fromAddress)
                    : "--"}
                </span>
                {currentTransaction?.fromAddress && (
                  <CopyButton toCopy={currentTransaction?.fromAddress ?? ""} />
                )}
              </div>
            </div>
            <div className="grid auto-rows-max gap-2">
              <div className="font-semibold">To</div>
              <div className="flex gap-2 text-muted-foreground">
                <span title={currentTransaction?.toAddress ?? "--"}>
                  {currentTransaction?.toAddress
                    ? formatIdx(currentTransaction.toAddress)
                    : "--"}
                </span>
                {currentTransaction?.fromAddress && (
                  <CopyButton toCopy={currentTransaction?.fromAddress ?? ""} />
                )}
              </div>
            </div>
          </div>
          <Separator className="my-2" />
          <div className="grid grid-cols-2 gap-2">
            <div className="grid auto-rows-max gap-3">
              <div className="font-semibold">Price</div>
              <div className="grid gap-2 text-muted-foreground">
                <span>{formatPrice(currentTransaction?.price) ?? "--"} $</span>
              </div>
            </div>
            <div className="grid auto-rows-max gap-3">
              <div className="font-semibold">Quantity</div>
              <div className="grid gap-2 text-muted-foreground">
                <span>{formatPrice(currentTransaction?.value) ?? "--"}</span>
              </div>
            </div>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Status :</span>
            <span className="text-[#119e45]">Done</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Fees :</span>
            <span>{currentTransaction?.fees ?? "--"}</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Total :</span>
            <span className="font-bold">
              {formatPrice(
                currentTransaction?.value * currentTransaction?.price
              ) ?? "--"}{" "}
              $
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            <time dateTime="2023-11-23">
              {currentTransaction?.timestamp
                ? formatFullDate(currentTransaction?.timestamp, true)
                : ""}
            </time>
          </div>
          <Pagination className="ml-auto mr-0 w-auto">
            <PaginationContent>
              <PaginationItem>
                <Button size="icon" variant="outline" className="size-6" onClick={() => setIndexOfTransactionsDiff(-1)}>
                  <ChevronLeft className="size-3.5" />
                  <span className="sr-only">Previous Order</span>
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button size="icon" variant="outline" className="size-6" onClick={() => setIndexOfTransactionsDiff(1)}>
                  <ChevronRight className="size-3.5" />
                  <span className="sr-only">Next Order</span>
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </section>
  );
}
