import { networks } from "@/src/data/tableLabels";
import { z } from "zod";

const networkValues = networks.map((network) => network.value) as [
  string,
  ...string[]
];

export const generateDecentralizeFormSchema = (datas: any = {}) => {
  return z.object({
    name: z
      .string({
        required_error: "Wallet's name is required.",
      })
      .max(30, "Wallet must be at most 30 characters.")
      .min(3, "Wallet must be at least 3 characters.")
      .default(datas.name ?? undefined),

    network: z
    .enum(networkValues, {
      required_error: "Network is required.",
    })
    .refine((val) => val !== undefined, {
      message: "Network is required.",
    })
    .default(datas.network ?? undefined)
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
  network: {
    label: "Network",
    inputProps: {
      placeholder: "Select network",
    },
  },
};

export const onSubmit = (values: z.infer<typeof decentralizeFormSchema>) => {
  console.log(values);
};
