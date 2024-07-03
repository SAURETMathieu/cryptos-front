import getCookie from "@/utils/getCookie";

export default function formatPrice(price: number, minDigits: number = 2, maxDigits: number = 2 ) {
  if(isNaN(price)) return "0";

  let language = "fr";

  if (typeof window !== 'undefined') {
    language = getCookie("NEXT_LOCALE") ?? "fr";
  }

  const options = {
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits,
  };

  const formattedPrice = new Intl.NumberFormat(language, options).format(price);

  return price > 0.01 ? formattedPrice : "< 0.01";
}