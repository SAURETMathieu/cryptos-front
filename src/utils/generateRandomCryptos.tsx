import { Crypto } from "@/src/schemas/cryptoSchema";
import { faker } from "@faker-js/faker";

const generateRandomCrypto = (): Crypto => {
  return {
    id: faker.string.uuid(),
    name: faker.finance.currencyName(),
    asset: faker.finance.currencyCode(),
    logo: faker.image.url(),
    price: faker.number.float({ min: 0, max: 100000, precision: 0.01 }),
    day: faker.number.float({ min: 0, max: 100, precision: 0.01 }),
    day7: faker.number.float({ min: -100, max: 100, precision: 0.01 }),
    month: faker.number.float({ min: -100, max: 100, precision: 0.01 }),
    fees: faker.number.float({ min: 0, max: 1000, precision: 0.01 }),
    quantity: faker.number.float({ min: 0, max: 1000, precision: 0.00001 }),
    balance: faker.number.float({ min: 0, max: 100000, precision: 0.01 }),
    profits: faker.number.float({ min: -5000, max: 5000, precision: 0.01 }),
  };
};

const generateCryptos = (num: number): Crypto[] => {
  return Array.from({ length: num }, generateRandomCrypto);
};

export const cryptos = generateCryptos(15);
