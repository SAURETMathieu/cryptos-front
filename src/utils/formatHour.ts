export default function formatHour(timestamp: string) {
  const dateObj = new Date(timestamp);

  if (isNaN(dateObj.getTime())) {
    return "Invalid Date";
  }

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: userTimeZone ?? "UTC",
  };

  const formatter = new Intl.DateTimeFormat("fr", options);
  const formattedHour = formatter.format(dateObj);
  return formattedHour;
}
