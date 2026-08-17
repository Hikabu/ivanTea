import { ProductGrid } from "@/components/commerce/ProductGrid";
import { products } from "@/data/products";
import { resolveLocale } from "@/lib/i18n-server";

export default async function ShopPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  return <main className="shop-page"><header className="shop-intro"><span>01 — 04</span><h1>{locale === "ru" ? "Четыре поля. Четыре чая." : "Four fields. Four teas."}</h1><p>{locale === "ru" ? "Ферментированный кипрей и растения, которые растут рядом. Собрано вручную в Марий Эл." : "Fermented fireweed and the plants that grow beside it. Gathered by hand in Mari El."}</p></header><section className="shop-list"><ProductGrid products={products} locale={locale}/></section><aside className="shop-note"><span>{locale === "ru" ? "КАК ВЫБРАТЬ" : "CHOOSING A TEA"}</span><p>{locale === "ru" ? "Начните с классического. Луг — самый свежий, Вечер — самый мягкий, Лесные ягоды — самый насыщенный." : "Begin with Original. Meadow is the freshest, Evening the softest, Forest Berries the richest."}</p></aside></main>;
}
