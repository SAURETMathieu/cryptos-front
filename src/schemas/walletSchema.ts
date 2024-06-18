import { z } from "zod";

export const walletSchema = z.object({
  id: z.number(),
  name: z.string(),
  blockchain: z.string(),
  address: z.string().nullable(),
  day: z.number(),
  day7: z.number(),
  month: z.number(),
  fees: z.number(),
  balance: z.number(),
  profits: z.number(),
  key: z.string(),
  exchange: z.string().nullable(),
});

export type Wallet = z.infer<typeof walletSchema>;
