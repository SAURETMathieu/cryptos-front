import { exchanges } from "@/src/data/tableLabels";
import { z } from "zod";

const exchangesValues = exchanges as [string, ...string[]];

export const generateCentralizeFormSchema = (datas: any = {}) => {
  return z.object({
    name: z
      .string({
        required_error: "Wallet's name is required.",
      })
      .max(30, "Wallet must be at most 30 characters.")
      .min(3, "Wallet must be at least 3 characters.")
      .default(datas.name ?? undefined),

    exchange: z
      .enum(exchangesValues, {
        required_error: "Exchange is required.",
      })
      .refine((val) => val !== undefined, {
        message: "Exchange is required.",
      })
      .default(datas.exchange ?? undefined),

    key: z
      .string({
        required_error: "API key is required.",
      })
      .max(30, "API key must be at most 30 characters.")
      .min(3, "API key must be at least 3 characters.")
      .default(datas.key ?? undefined),
  });
};

export const centralizeFormSchema = generateCentralizeFormSchema();

export const fieldConfig = {
  name: {
    label: "Name",
    inputProps: {
      placeholder: "Enter your wallet name",
    },
  },
  exchange: {
    label: "Exchange",
    inputProps: {
      placeholder: "Select exchange",
    },
  },
  key: {
    label: "API Key (Read only)",
    description: "Your key is encrypted and stored securely.",
    inputProps: {
      placeholder: "Enter your wallet API key",
    },
  },
};

export const onSubmit = (values: z.infer<typeof centralizeFormSchema>) => {
  console.log(values);
};

export const onEdit = (values: z.infer<typeof centralizeFormSchema>) => {
  console.log(values);
};
