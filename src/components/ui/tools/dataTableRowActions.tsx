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
import { walletSchema } from "@/src/schemas/walletSchema";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const wallet = walletSchema.parse(row.original);
  const { openModal } = useModal();

  const onDelete = (walletId: string) => {
    console.log("Deleted", walletId);
  };

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
        <DropdownMenuSeparator key="separator" />
        <DropdownMenuItem key="edit">Edit</DropdownMenuItem>
        <DropdownMenuItem key="delete">
          <Button
            variant="ghost"
            className="h-fit w-full p-0"
            onClick={() => openModal(wallet.id, () => onDelete(wallet.id))}
          >
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
