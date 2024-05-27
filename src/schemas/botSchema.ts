import { z } from "zod"

export const botSchema = z.object({
  status: z.string(),
  id: z.string(),
  name: z.string(),
  label: z.string(),
  strategy: z.string(),
  open_date: z.string(),
  close_date: z.string(),
  opened: z.number(),
  closed: z.number(),
  asset: z.string(),
  fees: z.number(),
  wallet: z.string(),
  balance: z.number(),
})

export type Bot = z.infer<typeof botSchema>