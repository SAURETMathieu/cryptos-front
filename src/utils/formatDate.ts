export default function formatDate(timestamp: string, language: string) {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  };
  return new Date(timestamp).toLocaleDateString(language, options);
}