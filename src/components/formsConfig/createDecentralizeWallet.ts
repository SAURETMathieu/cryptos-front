import { blockchains } from "@/src/data/tableLabels";
import { z } from "zod";

import fetchApi from "@/services/api/fetchApi";

const blockchainValues = blockchains
  .filter((blockchain) => blockchain.value !== "All")
  .map((blockchain) => blockchain.value) as [string, ...string[]];

export const generateDecentralizeFormSchema = (datas: any = {}) => {
  return z.object({
    name: z
      .string({
        required_error: "Wallet's name is required.",
      })
      .max(30, "Wallet must be at most 30 characters.")
      .min(3, "Wallet must be at least 3 characters.")
      .default(datas.name ?? undefined),

    blockchain: z
      .enum(blockchainValues, {
        required_error: "Blockchain is required.",
      })
      .refine((val) => val !== undefined, {
        message: "Blockchain is required.",
      })
      .default(datas.blockchain ?? undefined),

    address: z
      .string({
        required_error: "Wallet's address is required.",
      })
      .max(30, "Wallet must be at most 30 characters.")
      .min(3, "Wallet must be at least 3 characters.")
      .default(datas.address ?? undefined),
  });
};

export const decentralizeFormSchema = generateDecentralizeFormSchema();

export const fieldConfig = {
  name: {
    label: "Name",
    inputProps: {
      placeholder: "Enter your wallet name",
    },
  },
  blockchain: {
    label: "Blockchain",
    inputProps: {
      placeholder: "Select blockchain",
    },
  },
  address: {
    label: "Address",
    inputProps: {
      placeholder: "Enter your wallet address",
    },
  },
};

export const onSubmit = async (
  values: z.infer<typeof decentralizeFormSchema>,
  closeSheet?: () => void
) => {
  try {
    const isSuccess = await fetchApi("POST", "wallets/decentralized", values);
    if (!isSuccess) {
      throw new Error("Failed to create wallet");
    }
    closeSheet?.();
    console.log(isSuccess);
  } catch (error) {
    console.error(error);
  }
};

export const onEdit = (values: z.infer<typeof decentralizeFormSchema>) => {
  console.log(values);
};
