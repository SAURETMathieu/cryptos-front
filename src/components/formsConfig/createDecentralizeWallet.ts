import fetchApi from "@/services/api/fetchApi";
import { getRegexForBlockchain } from "@/src/data/addressesRegex";
import { blockchains } from "@/src/data/tableLabels";
import { z } from "zod";

const blockchainValues = blockchains
  .filter((blockchain) => blockchain.value !== "All")
  .map((blockchain) => blockchain.value) as [string, ...string[]];

export const generateDecentralizeFormSchema = (datas: any = {}) => {
  return z
    .object({
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
        .max(44, "Wallet must be at most 44 characters.")
        .min(26, "Wallet must be at least 26 characters.")
        .default(datas.address ?? undefined),
    })
    .refine(
      (data) => {
        const regex = getRegexForBlockchain(data.blockchain);
        if (!regex) return false;
        return regex.test(data.address);
      },
      {
        message: `This address is unvalid for this blockchain.`,
        path: ["address"],
      }
    );
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
    description: "Your adress with 0x prefix.",
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
    const newWallet = await fetchApi(
      "POST",
      "wallets/decentralized",
      values,
      true
    );
    if (!newWallet) {
      throw new Error("Failed to create wallet");
    }
    closeSheet?.();
    return newWallet;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const onEdit = (values: z.infer<typeof decentralizeFormSchema>) => {
  console.log(values);
};
