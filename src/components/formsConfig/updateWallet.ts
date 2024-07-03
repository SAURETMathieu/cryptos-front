import fetchApi from "@/services/api/fetchApi";
import { toast } from "sonner";
import { z } from "zod";

export const updateWalletFormSchema = (datas: any = {}) => {
  return z.object({
    name: z
      .string({
        required_error: "Wallet's name is required.",
      })
      .max(30, "Wallet must be at most 30 characters.")
      .min(3, "Wallet must be at least 3 characters.")
      .default(datas.name ?? undefined)
  });
};

export const fieldConfigUpdate = {
  name: {
    label: "Name",
    description: "If you want to modify your wallet's address or blockchain, you need to create a new wallet.",
    inputProps: {
      placeholder: "Enter your wallet name",
    },
  },
};

export const updateFormSchema = updateWalletFormSchema();

export const onEdit = async (
  values: z.infer<typeof updateFormSchema>,
  updateWallet: (updatedWallet: any) => void,
  idToUpdate: number,
  closeUpdateModal?: () => void
) => {
  try {
    const updatedWallet = await fetchApi("PATCH", `wallets/${idToUpdate}`, values, true);
    if (!updatedWallet) {
      throw new Error("An error occurred while updating the wallet.");
    }
    closeUpdateModal?.();
    toast.success("Wallet updated successfully!");
    updateWallet(updatedWallet);
    return updatedWallet;
  } catch (error) {
    console.error(error);
    return null;
  }
};