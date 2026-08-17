import { Locale } from "./i18n";

export const money = (value: number, locale: Locale = "en") => new Intl.NumberFormat(locale === "ru" ? "ru-RU" : "en-US", { style: "currency", currency: "USD" }).format(value);
