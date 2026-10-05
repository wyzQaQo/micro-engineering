import { defineRouting } from "next-intl/routing";

export const locales = [
  "en",
  "de",
  "es",
  "ar",
  "fr",
  "pt",
  "it",
  "ru",
  "pl",
] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale: "en",
  localePrefix: "always",
});
