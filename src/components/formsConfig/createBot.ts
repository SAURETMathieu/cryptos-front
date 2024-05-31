import { strategies } from "@/src/data/tableLabels";
import { z } from "zod";

const strategiesValues = strategies.map((strategie) => strategie.value) as [
  string,
  ...string[]
];

export const generateBotFormSchema = (datas: any = {}) => {
  return z.object({
    name: z
      .string({
        required_error: "Bot's name is required.",
      })
      .max(30, "Username must be at most 30 characters.")
      .min(3, "Username must be at least 3 characters.")
      .default(datas.name ?? undefined),
    wallet: z.enum(["Wallet 1", "Wallet 2", "Wallet 3", "Wallet 4"], {
      required_error: "A wallet is required.",
    }),
    strategy: z
      .enum(strategiesValues, {
        required_error: "A strategy is required.",
      })
      .default(datas.strategy ?? undefined),
    key: z
      .enum(["key1", "key2", "key3"], {
        required_error: "A key is required.",
      })
      .default(datas.key ?? undefined),
  });
};

export const botFormSchema = generateBotFormSchema();

export const fieldConfig = {
  name: {
    label: "Name",
    inputProps: {
      placeholder: "Enter your wallet name",
    },
  },
  wallet: {
    label: "Wallet",
    inputProps: {
      placeholder: "Select a wallet",
    },
  },
  strategy: {
    label: "Strategy",
    inputProps: {
      placeholder: "Select your strategy",
    },
  },
  key: {
    label: "API key (write)",
    description: "Only write access keys are allowed",
    inputProps: {
      placeholder: "Select a key",
    },
  },
};

export const onSubmit = (values: z.infer<typeof botFormSchema>) => {
  console.log(values);
};

export const onEdit = (values: z.infer<typeof botFormSchema>) => {
  console.log(values);
};
