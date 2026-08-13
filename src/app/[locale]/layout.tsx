import type { Metadata } from "next";
import "../globals.css";
import "../garof.css";
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
        title: { default: "GAROF | Чай из сердца Марий Эл", template: "%s | GAROF" },
        description: "Премиальный чай GAROF, вдохновлённый природой, ботаническими традициями и культурным наследием Марий Эл.",
      }
    : {
        title: { default: "GAROF | Tea From The Heart Of Mari El", template: "%s | GAROF" },
        description: "GAROF is a premium tea brand inspired by the nature, botanical traditions and cultural heritage of Mari El."
      };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  return <html lang={locale} data-scroll-behavior="smooth"><body><StoreProvider><Header locale={locale}/>{children}<Footer locale={locale}/><CartDrawer locale={locale}/></StoreProvider></body></html>;
}
