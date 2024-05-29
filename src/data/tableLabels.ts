import { Cross2Icon, PauseIcon, PlayIcon } from "@radix-ui/react-icons";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const networks = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "Ethereum",
    label: "Ethereum",
  },
  {
    value: "Bitcoin",
    label: "Bitcoin",
  },
  {
    value: "BSC",
    label: "BSC",
  },
  {
    value: "Solana",
    label: "Solana",
  },
  {
    value: "Polygon",
    label: "Polygon",
  },
  {
    value: "Avalanche",
    label: "Avalanche",
  },
];

export const transactionsType = [
  {
    value: "order",
    label: "Order",
  },
  {
    value: "market",
    label: "Market",
  },
  {
    value: "deposit",
    label: "Deposit",
  },
  {
    value: "withdraw",
    label: "Withdraw",
  },
  {
    value: "transfer",
    label: "Transfer",
  },
  {
    value: "swap",
    label: "Swap",
  },
  {
    value: "other",
    label: "Other",
  },
];

export const statuses = [
  {
    value: "open",
    label: "Open",
    icon: PlayIcon,
  },
  {
    value: "close",
    label: "Close",
    icon: Cross2Icon,
  },
  {
    value: "pause",
    label: "Pause",
    icon: PauseIcon,
  },
];

export const strategies = [
  {
    label: "0.5%",
    value: "0.5%",
  },
  {
    label: "1%",
    value: "1%",
  },
  {
    label: "2%",
    value: "2%",
  },
];
