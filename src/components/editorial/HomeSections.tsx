import Image from "next/image";
import Link from "next/link";
import { products, productText } from "@/data/products";
import { Locale, localizedHref } from "@/lib/i18n";
import { money } from "@/lib/format";
import { ProductVisual } from "@/components/commerce/ProductVisual";

export function Hero({ locale }: { locale: Locale }) {
  return <section className="quiet-hero">
    <Image src="/images/fedorov/hero-field.png" alt={locale === "ru" ? "Ручной сбор кипрея в поле Марий Эл" : "Fireweed gathered by hand in a Mari El field"} fill priority sizes="100vw" />
    <div className="quiet-hero__veil" />
    <div className="quiet-hero__copy">
      <p>{locale === "ru" ? "ИВАН-ЧАЙ · МАРИЙ ЭЛ" : "IVAN-TEA · MARI EL"}</p>
      <h1>{locale === "ru" ? "Там, где заканчивается дорога." : "Where the road ends."}</h1>
      <Link href="#teas">{locale === "ru" ? "Открыть чаи" : "Discover the teas"} <span>↓</span></Link>
    </div>
    <small>{locale === "ru" ? "56.6° с.ш. · 47.9° в.д." : "56.6° N · 47.9° E"}</small>
  </section>;
}

const chapters = {
  en: [
    { n: "01", title: "The Field", text: "Far from highways and cities, fireweed grows where meadow gives way to forest.", image: "/images/fedorov/mari-el-landscape.png", href: "/about" },
    { n: "02", title: "The Harvest", text: "Healthy leaves are gathered by hand, one small batch and one familiar field at a time.", image: "/images/fedorov/drying-screens.png", href: "/craft" },
  ],
  ru: [
    { n: "01", title: "Поле", text: "Вдали от трасс и городов кипрей растёт там, где луг встречается с лесом.", image: "/images/fedorov/mari-el-landscape.png", href: "/about" },
    { n: "02", title: "Сбор", text: "Здоровые листья собирают вручную — маленькими партиями, на знакомых полях.", image: "/images/fedorov/drying-screens.png", href: "/craft" },
  ],
};

export function OriginChapters({ locale }: { locale: Locale }) {
  return <section className="origin-chapters">
    <div className="field-note"><span>{locale === "ru" ? "ОБ ИСТОЧНИКЕ" : "A NOTE ON ORIGIN"}</span><p>{locale === "ru" ? "Не вся тишина одинакова. У нашей — запах кипрея, тёплой травы и леса после дождя." : "Not all quiet is the same. Ours smells of fireweed, warm grass and forest after rain."}</p></div>
    {chapters[locale].map((chapter, index) => <article className={`origin-chapter origin-chapter--${index + 1}`} key={chapter.n}>
      <div className="origin-chapter__image"><Image src={chapter.image} alt="" fill sizes="(max-width: 800px) 100vw, 60vw" /></div>
      <div className="origin-chapter__copy"><span>{chapter.n}</span><h2>{chapter.title}</h2><p>{chapter.text}</p><Link href={localizedHref(locale, chapter.href)}>{locale === "ru" ? "Читать историю" : "Read the story"} ↗</Link></div>
    </article>)}
  </section>;
}

export function TeaCollection({ locale }: { locale: Locale }) {
  return <section className="tea-collection" id="teas">
    <header><span>03</span><p>{locale === "ru" ? "ЧЕТЫРЕ ЧАЯ" : "THE FOUR TEAS"}</p><h2>{locale === "ru" ? "Листья, цветы, ягоды. Ничего лишнего." : "Leaves, flowers, berries. Nothing unnecessary."}</h2></header>
    <div className="editorial-products">{products.map((product) => { const copy = productText(product, locale); return <article className="editorial-product" key={product.slug} style={{ "--product-bg": product.accent } as React.CSSProperties}>
      <Link className="editorial-product__visual" href={localizedHref(locale, `/products/${product.slug}`)}><ProductVisual product={product} locale={locale}/></Link>
      <div className="editorial-product__copy"><span>{product.initials} / 04</span><p>{copy.type}</p><h3>{copy.name}</h3><small>{copy.imagery}</small><p className="editorial-product__lede">{copy.subtitle}</p><div><strong>{money(product.price, locale)}</strong><Link href={localizedHref(locale, `/products/${product.slug}`)}>{locale === "ru" ? "Смотреть чай" : "View tea"} →</Link></div></div>
    </article>; })}</div>
  </section>;
}

export function MariElClosing({ locale }: { locale: Locale }) {
  return <section className="mari-closing"><div className="mari-closing__image"><Image src="/images/fedorov/organic-campaign.jpg" alt={locale === "ru" ? "Работа с листом кипрея" : "Working with freshly gathered fireweed"} fill sizes="100vw" /></div><div className="mari-closing__copy"><span>04 · MARI EL</span><h2>{locale === "ru" ? "Чашка места, где тихо." : "A cup of somewhere quiet."}</h2><p>{locale === "ru" ? "Республика лесов, речных лугов и светлых полян. Здесь мы собираем кипрей и готовим чай небольшими партиями." : "A republic of forests, river meadows and bright clearings. This is where we gather fireweed and make tea in small batches."}</p><Link href={localizedHref(locale, "/about")}>{locale === "ru" ? "Увидеть Марий Эл" : "See Mari El"} →</Link></div></section>;
}
