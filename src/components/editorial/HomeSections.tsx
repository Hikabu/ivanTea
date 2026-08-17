import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, productText } from "@/data/products";
import { money } from "@/lib/format";
import { Locale, localizedHref } from "@/lib/i18n";

const copy = {
  en: {
    collection: "Four small batches · Mari El",
    scroll: "Scroll for the next blend",
    view: "View this tea",
    ingredients: "In the blend",
    originLabel: "One wild leaf · one quiet place",
    originTitle: "Made slowly, so the leaf can speak for itself.",
    originBody: "Fireweed is gathered by hand far from roads, then rolled, fermented and dried in small seasonal runs. Each blend begins with the same soft, caffeine-free leaf.",
    originLink: "Read about the craft",
    shopLink: "See all four teas",
  },
  ru: {
    collection: "Четыре малые партии · Марий Эл",
    scroll: "Листайте к следующему чаю",
    view: "Смотреть этот чай",
    ingredients: "Состав",
    originLabel: "Один дикий лист · одно тихое место",
    originTitle: "Мы не торопим чай — и лист говорит сам за себя.",
    originBody: "Кипрей собирают вручную вдали от дорог, затем скручивают, ферментируют и сушат небольшими сезонными партиями. В основе каждой смеси — тот же мягкий лист без кофеина.",
    originLink: "Узнать о ремесле",
    shopLink: "Посмотреть все четыре чая",
  },
};

export function HomeLanding({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return <main className="fedorov-home">
    <div className="tea-catalog">
      {products.map((product, index) => {
        const item = productText(product, locale);
        const sceneStyle = {
          "--mood": product.color,
          "--mood-soft": product.accent,
        } as CSSProperties;

        return <article
          className={`tea-scene tea-scene--${index + 1}`}
          id={`tea-${product.slug}`}
          key={product.slug}
          style={sceneStyle}
        >
          <div className="tea-scene__arc" aria-hidden="true" />

          <Link
            className="tea-scene__object"
            href={localizedHref(locale, `/products/${product.slug}`)}
            aria-label={`${t.view}: ${item.name}`}
          >
            <Image
              src={product.image}
              alt={`${item.name}: ${item.ingredients}`}
              fill
              preload={index === 0}
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </Link>

          <div className="tea-scene__copy">
            <div className="tea-scene__meta">
              <span className="tabular-nums">0{index + 1} / 04</span>
              <span>{t.collection}</span>
            </div>
            <div className="tea-mood-dot" aria-hidden="true" />
            <p className="tea-scene__type">{item.type}</p>
            {index === 0
              ? <h1 className="text-balance">{item.name}</h1>
              : <h2 className="text-balance">{item.name}</h2>}
            <p className="tea-scene__lede text-pretty">{item.subtitle}</p>
            <div className="tea-scene__ingredients">
              <span>{t.ingredients}</span>
              <p className="text-pretty">{item.ingredients}</p>
            </div>
            <div className="tea-scene__buy">
              <strong>{money(product.price, locale)}</strong>
              <Link href={localizedHref(locale, `/products/${product.slug}`)}>{t.view}<span aria-hidden="true">↗</span></Link>
            </div>
          </div>

          <nav className="tea-scene__dots" aria-label={locale === "ru" ? "Выбрать чай" : "Choose a tea"}>
            {products.map((navProduct, navIndex) => <Link
              href={`#tea-${navProduct.slug}`}
              key={navProduct.slug}
              className={navIndex === index ? "is-current" : ""}
              aria-label={locale === "ru" ? navProduct.nameRu : navProduct.name}
              aria-current={navIndex === index ? "true" : undefined}
              style={{ "--dot": navProduct.color } as CSSProperties}
            ><span /></Link>)}
          </nav>

          {index === 0 && <p className="tea-scene__scroll">{t.scroll}<span aria-hidden="true">↓</span></p>}
        </article>;
      })}
    </div>

    <section className="tea-origin-note">
      <p>{t.originLabel}</p>
      <div>
        <h2 className="text-balance">{t.originTitle}</h2>
        <p className="text-pretty">{t.originBody}</p>
        <div>
          <Link href={localizedHref(locale, "/craft")}>{t.originLink}<span aria-hidden="true">↗</span></Link>
          <Link href={localizedHref(locale, "/shop")}>{t.shopLink}<span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  </main>;
}
