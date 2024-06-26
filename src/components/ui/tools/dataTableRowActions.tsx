"use client";

import fetchApi from "@/services/api/fetchApi";
import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { useModal } from "@/src/context/modalProvider";
import { useUpdateModal } from "@/src/context/updateModalProvider";
import { walletSchema } from "@/src/schemas/walletSchema";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";

import EditWalletForm from "@/components/forms/EditWalletForm";
import { updateWallet, deleteWallet } from "@/hooks/useStore";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const wallet = walletSchema.parse(row.original);
  const { openModal } = useModal();
  const { openUpdateModal } = useUpdateModal();

  const onDelete = async (id: number | string) => {
    try {
      const isDeleted = await fetchApi(
        "DELETE",
        `wallets/${id}`,
        null,
        true
      );
      if (!isDeleted) {
        throw new Error("Failed to delete wallet");
      }
      deleteWallet(id as number);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const formContent = (
    datas: any,
    updateWallet: (updatedWallet: any) => void
  ) => <EditWalletForm datas={datas} updateWallet={updateWallet} />;

  return (
    <DropdownMenu key={wallet.id}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex size-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="size-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem key="keys">Keys</DropdownMenuItem>
        <DropdownMenuItem key="address">Address</DropdownMenuItem>
        <DropdownMenuItem key="bots">Bots</DropdownMenuItem>
        <DropdownMenuSeparator key="separator" />
        <DropdownMenuItem key="edit">
          <Button
            variant="ghost"
            className="h-fit w-full p-0"
            onClick={() => openUpdateModal(formContent(wallet, updateWallet))}
          >
            Edit
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem key="delete">
          <Button
            variant="ghost"
            className="h-fit w-full p-0"
            onClick={() => openModal(wallet.id, onDelete)}
          >
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
