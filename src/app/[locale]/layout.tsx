import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StoreProvider } from "@/components/layout/StoreProvider";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { locales } from "@/lib/i18n";
import { resolveLocale } from "@/lib/i18n-server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return locale === "ru"
    ? {
        title: { default: "Fedorov Tea — иван-чай из Марий Эл", template: "%s | Fedorov Tea" },
        description: "Иван-чай ручного сбора из тихих полей Республики Марий Эл.",
      }
    : {
        title: { default: "Fedorov Tea — wild Ivan tea from Mari El", template: "%s | Fedorov Tea" },
        description: "Hand-gathered fireweed tea from the quiet fields of the Republic of Mari El."
      };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  return <html lang={locale} data-scroll-behavior="smooth"><body><StoreProvider><Header locale={locale}/>{children}<Footer locale={locale}/><CartDrawer locale={locale}/></StoreProvider></body></html>;
}
