export default function formatIdx(idx: string): string {

  const firstPart = idx.substring(0, 5);
  const lastPart = idx.substring(31);

  return `${firstPart}...${lastPart}`;
}
