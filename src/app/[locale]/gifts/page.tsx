import Image from "next/image";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { GiftAddButton } from "@/components/commerce/GiftAddButton";
import { Button } from "@/components/ui/Button";
import { localizedHref } from "@/lib/i18n";
import { resolveLocale } from "@/lib/i18n-server";

export default async function GiftsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const ru = locale === "ru";
  return <main className="gifts-page">
    <section className="gifts-hero gifts-hero--fedorov">
      <div><Image src="/images/fedorov/gift-set.png" alt={ru ? "Подарочный набор Fedorov Tea с двумя видами иван-чая и инфузером" : "Fedorov Tea gift set with two Ivan Teas and a leaf-shaped infuser"} fill loading="eager" sizes="60vw"/></div>
      <article><p className="eyebrow">{ru ? "ПОДАРОК ИЗ МАРИЙ ЭЛ" : "A GIFT FROM MARI EL"}</p><h1>{ru ? <>Место, которое<br/>можно заварить.</> : <>A place you<br/>can brew.</>}</h1><p>{ru ? "Два компактных тубуса иван-чая, фирменный инфузер в форме листа и карточка о ручном сборе — в современном жёстком боксе." : "Two compact Ivan Tea canisters, a signature leaf infuser and a hand-collection story card in a modern rigid presentation box."}</p><Button href="#signature-gift">{ru ? "Смотреть набор" : "See the signature set"}</Button></article>
    </section>
    <section className="gift-intents container">
      <div><span>01</span><h2>{ru ? "Узнаваемый" : "Recognizable"}</h2><p>{ru ? "Цвет кипрея и логотип читаются сразу." : "Fireweed color and the Fedorov mark read at a glance."}</p></div>
      <div><span>02</span><h2>{ru ? "Компактный" : "Compact"}</h2><p>{ru ? "Два тубуса удобно стоят на полке." : "Two slim canisters sit easily on a shelf."}</p></div>
      <div><span>03</span><h2>{ru ? "Содержательный" : "Complete"}</h2><p>{ru ? "Чай, инфузер и история происхождения." : "Tea, infuser and a real origin story."}</p></div>
      <div><span>04</span><h2>{ru ? "Готов к поездке" : "Ready to travel"}</h2><p>{ru ? "Защитная вкладка и международная доставка." : "Protective insert and worldwide delivery."}</p></div>
    </section>
    <section className="signature-gift container" id="signature-gift">
      <div className="signature-gift-copy"><p className="eyebrow">FEDOROV TEA · SIGNATURE 02</p><h2>{ru ? "Подарочный набор Марий Эл" : "The Mari El Gift Set"}</h2><p>{ru ? "Классический иван-чай 50 г, «Яблоко и брусника» 50 г, металлический инфузер и двуязычная карточка о сборе. На внешней стороне остаётся место для поздравления или фирменной ленты партнёра." : "Pure Ivan Tea 50 g, Apple & Lingonberry 50 g, a metal infuser and bilingual collection card. The outer sleeve leaves room for a personal note or partner ribbon."}</p><dl><div><dt>{ru ? "ВНУТРИ" : "IN THE BOX"}</dt><dd>2 × 50 g + infuser</dd></div><div><dt>{ru ? "ДОСТАВКА" : "DELIVERY"}</dt><dd>{ru ? "По всему миру" : "Worldwide"}</dd></div><div><dt>{ru ? "ЦЕНА" : "PRICE"}</dt><dd>$68</dd></div></dl><div><GiftAddButton locale={locale}/><Button href={localizedHref(locale, "/wholesale")} variant="text">{ru ? "Корпоративные подарки →" : "Corporate gifting →"}</Button></div></div>
      <div className="signature-gift-image"><Image src="/images/fedorov/gift-set.png" alt="Fedorov Tea Mari El gift set" fill sizes="50vw"/></div>
    </section>
    <section className="section container" id="gift-collection"><div className="section-head"><div><p className="eyebrow">{ru ? "СОБРАТЬ СВОЙ ПОДАРОК" : "BUILD YOUR OWN GIFT"}</p><h2>{ru ? "Иван-чай для подарка" : "Ivan Tea chosen for giving"}</h2></div></div><ProductGrid products={products.slice(0, 4)} locale={locale}/></section>
  </main>;
}
