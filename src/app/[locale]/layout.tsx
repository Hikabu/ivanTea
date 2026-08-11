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
        title: { default: "Fedorov Tea | Иван-чай ручного сбора из Марий Эл", template: "%s | Fedorov Tea" },
        description: "Современный премиальный иван-чай ручного сбора из Республики Марий Эл: классический, с натуральными добавками, подарки, розница и опт с доставкой по миру.",
      }
    : {
        title: { default: "Fedorov Tea | Hand-Collected Ivan Tea from Mari El", template: "%s | Fedorov Tea" },
        description: "Modern premium Ivan Tea, hand collected in the Mari El Republic. Pure fireweed tea, natural fruit and herb additions, gifts, worldwide retail and wholesale.",
      };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  return <html lang={locale} data-scroll-behavior="smooth"><body><StoreProvider><Header locale={locale}/>{children}<Footer locale={locale}/><CartDrawer locale={locale}/></StoreProvider></body></html>;
}
