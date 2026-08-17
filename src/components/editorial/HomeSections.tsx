import Image from "next/image";
import Link from "next/link";
import { products, productText } from "@/data/products";
import { money } from "@/lib/format";
import { Locale, localizedHref } from "@/lib/i18n";

const copy = {
  en: {
    heroKicker: "FEDOROV TEA · MARI EL · WILD HARVEST",
    heroTitle: <>A quiet field,<br/><em>held in a cup.</em></>,
    heroBody: "Hand-gathered fireweed tea, made in limited seasonal batches.",
    heroCta: "Meet the tea",
    heroCaption: "Fireweed in flower · Republic of Mari El",
    scroll: "Scroll to discover",
    statementKicker: "TEA, WITH A SENSE OF PLACE",
    statement: <>Not made to fill a shelf.<br/>Made to <em>stay with you.</em></>,
    statementBody: "From the first purple flower to the last amber pour, every part of Fedorov Tea belongs to one landscape and one unhurried ritual.",
    limited: "Limited seasonal release",
    signatureKicker: "THE SIGNATURE EDITION · 01",
    signatureTitle: "Ivan Tea",
    signatureBody: "Pure fermented fireweed leaf. Soft, rounded and quietly floral, with the warmth of dried fruit and meadow honey.",
    signatureFacts: ["50 g · loose leaf", "Naturally caffeine-free", "Gathered by hand"],
    signatureCta: "Discover the signature tea",
    interludeKicker: "THE RITUAL",
    interludeTitle: <>For the hour when<br/>the world goes <em>quiet.</em></>,
    collectionKicker: "THE COLLECTION · FOUR SMALL BATCHES",
    collectionTitle: "One field. Four expressions.",
    collectionBody: "The pure leaf comes first. Meadow herbs, evening flowers and forest berries follow—each blend restrained enough to let the fireweed remain itself.",
    view: "View tea",
    originKicker: "LEAF STUDY · CHAMAENERION ANGUSTIFOLIUM",
    originTitle: <>Wild by nature.<br/><em>Precise by hand.</em></>,
    originBody: "Picked far from roads, rolled, fermented and dried in small runs. No caffeine. No perfume. Nothing added to make the story louder than the leaf.",
    originCta: "See how it is made",
    closingKicker: "FROM MARI EL, WITH TIME",
    closingTitle: "A limited harvest for a daily ritual.",
    closingCta: "Shop the collection",
  },
  ru: {
    heroKicker: "FEDOROV TEA · МАРИЙ ЭЛ · ДИКИЙ СБОР",
    heroTitle: <>Тихое поле,<br/><em>сохранённое в чашке.</em></>,
    heroBody: "Иван-чай ручного сбора, созданный небольшими сезонными партиями.",
    heroCta: "Познакомиться с чаем",
    heroCaption: "Кипрей в цвету · Республика Марий Эл",
    scroll: "Листайте дальше",
    statementKicker: "ЧАЙ С ЧУВСТВОМ МЕСТА",
    statement: <>Не для того, чтобы заполнить полку.<br/>А чтобы <em>остаться с вами.</em></>,
    statementBody: "От первого пурпурного цветка до последнего янтарного глотка — Fedorov Tea хранит один пейзаж и один неторопливый ритуал.",
    limited: "Ограниченный сезонный выпуск",
    signatureKicker: "ГЛАВНЫЙ ЧАЙ · 01",
    signatureTitle: "Иван-чай",
    signatureBody: "Чистый ферментированный лист кипрея. Мягкий, округлый и тонко-цветочный, с теплом сухофруктов и лугового мёда.",
    signatureFacts: ["50 г · листовой", "Без кофеина от природы", "Собран вручную"],
    signatureCta: "Открыть классический чай",
    interludeKicker: "РИТУАЛ",
    interludeTitle: <>Для часа, когда<br/>мир становится <em>тише.</em></>,
    collectionKicker: "КОЛЛЕКЦИЯ · ЧЕТЫРЕ МАЛЫЕ ПАРТИИ",
    collectionTitle: "Одно поле. Четыре характера.",
    collectionBody: "Сначала — чистый лист. Затем луговые травы, вечерние цветы и лесные ягоды. В каждой смеси кипрей остаётся главным.",
    view: "Смотреть чай",
    originKicker: "ЛИСТ КИПРЕЯ · CHAMAENERION ANGUSTIFOLIUM",
    originTitle: <>Дикий по природе.<br/><em>Точный в работе.</em></>,
    originBody: "Собран вдали от дорог, скручен, ферментирован и высушен малыми партиями. Без кофеина. Без ароматизаторов. Ничего громче самого листа.",
    originCta: "Узнать о ремесле",
    closingKicker: "ИЗ МАРИЙ ЭЛ — С ТЕРПЕНИЕМ",
    closingTitle: "Ограниченный сбор для ежедневного ритуала.",
    closingCta: "Выбрать чай",
  },
};

export function HomeLanding({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const signature = productText(products[0], locale);

  return <main className="fedorov-home">
    <section className="home-hero">
      <Image
        src="/images/fedorov/hero-field.png"
        alt={locale === "ru" ? "Ручной сбор цветущего кипрея в Марий Эл" : "Fireweed gathered by hand in Mari El"}
        fill
        preload
        sizes="100vw"
      />
      <div className="home-hero__shade" />
      <div className="home-hero__copy">
        <p className="home-kicker">{t.heroKicker}</p>
        <h1 className="text-balance">{t.heroTitle}</h1>
        <div className="home-hero__foot">
          <p className="text-pretty">{t.heroBody}</p>
          <Link className="home-link home-link--light" href="#signature">{t.heroCta}<span aria-hidden="true">↘</span></Link>
        </div>
      </div>
      <p className="home-hero__caption">{t.heroCaption}</p>
      <p className="home-hero__scroll">{t.scroll}<span aria-hidden="true">↓</span></p>
    </section>

    <section className="home-statement home-reveal">
      <p className="home-kicker">{t.statementKicker}</p>
      <div>
        <h2 className="text-balance">{t.statement}</h2>
        <div className="home-statement__note">
          <p className="text-pretty">{t.statementBody}</p>
          <span>{t.limited}</span>
        </div>
      </div>
    </section>

    <section className="home-signature" id="signature">
      <Link className="home-signature__image" href={localizedHref(locale, `/products/${products[0].slug}`)} aria-label={t.signatureCta}>
        <Image src="/images/fedorov/product-still-life.png" alt={locale === "ru" ? "Упаковка Fedorov Tea рядом с чашкой янтарного иван-чая" : "Fedorov Tea packaging beside a cup of amber Ivan tea"} fill sizes="(max-width: 900px) 100vw, 58vw" />
        <span>{locale === "ru" ? "КЛАССИЧЕСКИЙ · МАРИЙ ЭЛ" : "ORIGINAL · MARI EL"}</span>
      </Link>
      <div className="home-signature__copy home-reveal">
        <p className="home-kicker">{t.signatureKicker}</p>
        <h2 className="text-balance">{t.signatureTitle}</h2>
        <p className="home-signature__body text-pretty">{t.signatureBody}</p>
        <ul>{t.signatureFacts.map((fact, index) => <li key={fact}><span>0{index + 1}</span>{fact}</li>)}</ul>
        <div className="home-signature__buy">
          <strong>{money(signature.price, locale)}</strong>
          <Link className="home-link" href={localizedHref(locale, `/products/${products[0].slug}`)}>{t.signatureCta}<span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>

    <section className="home-interlude">
      <p className="home-kicker">{t.interludeKicker}</p>
      <h2 className="home-reveal text-balance">{t.interludeTitle}</h2>
      <p aria-hidden="true">56.6° N · 47.9° E</p>
    </section>

    <section className="home-collection" id="teas">
      <header className="home-reveal">
        <p className="home-kicker">{t.collectionKicker}</p>
        <div>
          <h2 className="text-balance">{t.collectionTitle}</h2>
          <p className="text-pretty">{t.collectionBody}</p>
        </div>
      </header>
      <div className="home-collection__list">
        {products.map((product) => {
          const item = productText(product, locale);
          return <Link className="home-tea-row" href={localizedHref(locale, `/products/${product.slug}`)} key={product.slug}>
            <span>{product.initials}</span>
            <div><h3>{item.name}</h3><p>{item.type}</p></div>
            <p>{item.subtitle}</p>
            <strong>{money(product.price, locale)}</strong>
            <span className="home-tea-row__action">{t.view}<b aria-hidden="true">↗</b></span>
          </Link>;
        })}
      </div>
    </section>

    <section className="home-origin">
      <div className="home-origin__copy home-reveal">
        <p className="home-kicker">{t.originKicker}</p>
        <h2 className="text-balance">{t.originTitle}</h2>
        <p className="text-pretty">{t.originBody}</p>
        <Link className="home-link" href={localizedHref(locale, "/craft")}>{t.originCta}<span aria-hidden="true">↗</span></Link>
      </div>
      <div className="home-origin__image">
        <Image src="/images/fedorov/ivanTea.png" alt={locale === "ru" ? "Скрученный и высушенный лист кипрея" : "Rolled and dried fireweed leaves"} fill sizes="(max-width: 900px) 100vw, 42vw" />
        <span>{locale === "ru" ? "ФЕРМЕНТИРОВАННЫЙ ЛИСТ" : "FERMENTED FIREWEED LEAF"}</span>
      </div>
    </section>

    <section className="home-closing home-reveal">
      <p className="home-kicker">{t.closingKicker}</p>
      <h2 className="text-balance">{t.closingTitle}</h2>
      <Link className="home-link" href={localizedHref(locale, "/shop")}>{t.closingCta}<span aria-hidden="true">→</span></Link>
    </section>
  </main>;
}
