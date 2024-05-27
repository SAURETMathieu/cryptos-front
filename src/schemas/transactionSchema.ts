import { z } from "zod";

export const transactionSchema = z.object({
  idx: z.string(),
  logo: z.string(),
  date: z.string(),
  type: z.string(),
  time: z.string(),
  devise: z.string(),
  price: z.number(),
  quantity: z.number(),
  fees: z.number(),
});

export type Transaction = z.infer<typeof transactionSchema>;
