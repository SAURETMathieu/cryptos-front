import { Transaction } from "@/src/schemas/transactionSchema";
import { faker } from "@faker-js/faker";
import { transactionsType } from '@/src/data/tableLabels';

const generateRandomTransaction = (): Transaction => {
  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };
  const formatTime = (date: Date): string => {
    const tmp = date.toISOString().split('T')[1];
    return tmp?.split('.')[0];
  };

  return {
    idx: faker.string.uuid(),
    logo: faker.image.url(),
    date: formatDate(faker.date.recent()),
    type: faker.helpers.arrayElement(transactionsType.map(b => b.value)),
    time: formatTime(faker.date.recent()),
    devise: "USDT",
    price: faker.number.float({ min: 0, max: 100000, multipleOf: 0.01 }),
    quantity: faker.number.float({ min: 0, max: 1000, multipleOf: 0.00001 }),
    fees: faker.number.float({ min: 0, max: 1000, multipleOf: 0.01 }),
  };
};

const generateTransactions = (num: number): Transaction[] => {
  return Array.from({ length: num }, generateRandomTransaction);
};

export const transactions = generateTransactions(15);
