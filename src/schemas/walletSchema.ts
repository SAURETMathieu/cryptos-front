import { z } from "zod";

export const walletSchema = z.object({
  id: z.number(),
  name: z.string(),
  blockchain: z.string(),
  address: z.string().nullable(),
  day: z.number().nullable(),
  day7: z.number().nullable(),
  month: z.number().nullable(),
  fees: z.number().nullable(),
  balance: z.number().nullable(),
  profits: z.number().nullable(),
  key: z.string().nullable(),
  exchange: z.string().nullable(),
});

export type Wallet = z.infer<typeof walletSchema>;
