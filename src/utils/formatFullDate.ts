import getCookie from "@/utils/getCookie";

export default function formatFullDate(timestamp: string, withoutHours = false) {

  const dateObj = new Date(timestamp);

  if (isNaN(dateObj.getTime())) {
    return "Invalid Date";
  }

  let language = "fr";

  if (typeof window !== 'undefined') {
    language = getCookie("NEXT_LOCALE") ?? "fr";
  }

  let options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: 'UTC'
  };

  if (withoutHours) {
    options.hour = undefined;
    options.minute = undefined;
    options.second = undefined;
  }

  const formatter = new Intl.DateTimeFormat(language, options);
  const formattedDate = formatter.format(dateObj);
  return formattedDate;
}