import { faker } from '@faker-js/faker';
import { Wallet } from "@/src/schemas/walletSchema";
import { networks } from '@/src/data/tableLabels';

const generateRandomWallet = (): Wallet => {
  return {
    id: faker.string.uuid(),
    name: faker.finance.accountName(),
    network: faker.helpers.arrayElement(networks.map(b => b.value)),
    day: faker.number.float({ min: -100, max: 100, multipleOf: 0.01}),
    day7: faker.number.float({ min: -100, max: 100, multipleOf: 0.01}),
    month: faker.number.float({ min: -100, max: 100, multipleOf: 0.01}),
    fees: faker.number.float({ min: 0, max: 1000, multipleOf: 0.01 }),
    balance: faker.number.float({ min: 0, max: 100000, multipleOf: 0.01 }),
    profits: faker.number.float({ min: -5000, max: 5000, multipleOf: 0.01 }),
  };
};

const generateWallets = (num: number): Wallet[] => {
  return Array.from({ length: num }, generateRandomWallet);
};

export const wallets = generateWallets(15);
