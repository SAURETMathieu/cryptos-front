import { z } from "zod";

export const cryptoSchema = z.object({
  id: z.string(),
  name: z.string(),
  asset: z.string(),
  logo: z.string(),
  price: z.number(),
  day: z.number(),
  day7: z.number(),
  month: z.number(),
  fees: z.number(),
  quantity: z.number(),
  balance: z.number(),
  profits: z.number(),
});

export type Crypto = z.infer<typeof cryptoSchema>;
