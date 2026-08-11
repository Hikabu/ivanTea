import { CollectionBrowser } from "@/components/commerce/CollectionBrowser";
import { resolveLocale } from "@/lib/i18n-server";
import { Suspense } from "react";

export default async function ShopPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  return <main><section className="collection-hero shop-hero"><p className="breadcrumbs">{locale === "ru" ? "Главная / Магазин" : "Home / Shop"}</p><h1>{locale === "ru" ? "Весь иван-чай" : "All Ivan Tea"}</h1><p>{locale === "ru" ? "Чистый ферментированный кипрей и сочетания с яблоком, ягодами, цветками и травами — всё собрано вручную в Марий Эл." : "Pure fermented fireweed and combinations with apple, berries, blossoms and herbs—all hand collected in Mari El."}</p><div className="collection-values"><span><b>✦</b>{locale === "ru" ? "Ручной сбор" : "Hand collected"}</span><span><b>0</b>{locale === "ru" ? "Кофеина" : "Caffeine"}</span><span><b>∞</b>{locale === "ru" ? "Доставка по миру" : "Worldwide delivery"}</span></div></section><div className="container"><Suspense fallback={<div className="collection-loading">{locale === "ru" ? "Готовим коллекцию…" : "Preparing the collection…"}</div>}><CollectionBrowser locale={locale}/></Suspense></div></main>;
}
