export default function formatIdx(idx: string, number: number = 5): string {
  if(number < 0) {
    return idx;
  }
  if (idx.length <= number * 2) {
    return idx;
  }
  const firstPart = idx.slice(0, number);
  const lastPart = idx.slice(-number);

  return `${firstPart}...${lastPart}`;
}
