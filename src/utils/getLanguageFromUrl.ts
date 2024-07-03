export default function getLanguageFromUrl(currentUrl: string) {
  const nextUrl = process.env.NEXT_PUBLIC_URL ?? "";
  let language = "fr";
  if (nextUrl && currentUrl.startsWith(nextUrl)) {
    const pathAfterDomain = currentUrl.substring(nextUrl.length);
    const segments = pathAfterDomain.split("/");

    if (segments.length > 1 && segments[1] !== "") {
      language = segments[1];
    }
  }
  return language;
}
