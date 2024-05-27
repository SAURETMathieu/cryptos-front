import { z } from "zod";

export const walletSchema = z.object({
  id: z.string(),
  name: z.string(),
  blockchain: z.string(),
  day: z.number(),
  day7: z.number(),
  month: z.number(),
  fees: z.number(),
  balance: z.number(),
  profits: z.number(),
});

export type Wallet = z.infer<typeof walletSchema>;
