import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, productText } from "@/data/products";
import { money } from "@/lib/format";
import { Locale, localizedHref } from "@/lib/i18n";
import { HorizontalCatalog } from "./HorizontalCatalog";

const copy = {
  en: {
    catalogLabel: "Fedorov Tea collection",
    introKicker: "Fedorov Tea · Republic of Mari El",
    introTitle: "Wild fireweed tea, gathered by hand.",
    introBody: "Four small seasonal blends. Naturally caffeine-free. Made for the quiet part of the day.",
    introBotanical: "Chamaenerion angustifolium · wild harvest",
    introLink: "Meet the four teas",
    collection: "Four small batches · Mari El",
    scroll: "Scroll to explore",
    view: "View this tea",
    ingredients: "In the blend",
    previous: "Previous scene",
    next: "Next scene",
    originLabel: "One wild leaf · one quiet place",
    originTitle: "Made slowly, so the leaf can speak for itself.",
    originBody: "Fireweed is gathered by hand far from roads, then rolled, fermented and dried in small seasonal runs. Each blend begins with the same soft, caffeine-free leaf.",
    originLink: "Read about the craft",
    shopLink: "See all four teas",
  },
  ru: {
    catalogLabel: "Коллекция Fedorov Tea",
    introKicker: "Fedorov Tea · Республика Марий Эл",
    introTitle: "Дикий иван-чай ручного сбора.",
    introBody: "Четыре небольшие сезонные смеси. Без кофеина от природы. Для тихой части дня.",
    introBotanical: "Chamaenerion angustifolium · дикий сбор",
    introLink: "Познакомиться с четырьмя чаями",
    collection: "Четыре малые партии · Марий Эл",
    scroll: "Листайте вправо",
    view: "Смотреть этот чай",
    ingredients: "Состав",
    previous: "Предыдущая сцена",
    next: "Следующая сцена",
    originLabel: "Один дикий лист · одно тихое место",
    originTitle: "Мы не торопим чай — и лист говорит сам за себя.",
    originBody: "Кипрей собирают вручную вдали от дорог, затем скручивают, ферментируют и сушат небольшими сезонными партиями. В основе каждой смеси — тот же мягкий лист без кофеина.",
    originLink: "Узнать о ремесле",
    shopLink: "Посмотреть все четыре чая",
  },
};

const grounds = [
  ["#27372c", "#bd617e", "#d8c49b", "#756c4c"],
  ["#4d5239", "#c8a83f", "#98a27a", "#756d92"],
  ["#232d29", "#756e82", "#bda56f", "#847b65"],
  ["#29382e", "#7b3049", "#b64e3f", "#d07a3e"],
] as const;

function Ground({ colors }: { colors: readonly [string, string, string, string] }) {
  const style = {
    "--ground-one": colors[0],
    "--ground-two": colors[1],
    "--ground-three": colors[2],
    "--ground-four": colors[3],
  } as CSSProperties;

  return <div className="tea-ground" style={style} aria-hidden="true">
    <span /><span /><span /><span />
  </div>;
}

function SceneControl({ previous, next, labels }: { previous?: string; next: string; labels: { previous: string; next: string } }) {
  return <nav className="tea-scene__control" aria-label={labels.next}>
    {previous
      ? <Link href={previous} aria-label={labels.previous}>←</Link>
      : <span aria-hidden="true">←</span>}
    <i aria-hidden="true" />
    <Link href={next} aria-label={labels.next}>→</Link>
  </nav>;
}

export function HomeLanding({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const introGround = [grounds[0][0], grounds[1][1], grounds[2][2], grounds[3][1]] as const;

  return <main className="fedorov-home">
    <HorizontalCatalog label={t.catalogLabel}>
      <section className="tea-intro" id="tea-intro">
        <div className="tea-scene__arc" aria-hidden="true" />
        <div className="tea-intro__copy">
          <p>{t.introKicker}</p>
          <h1 className="text-balance">{t.introTitle}</h1>
          <p className="text-pretty">{t.introBody}</p>
          <Link href="#tea-pure-ivan-tea">{t.introLink}<span aria-hidden="true">→</span></Link>
        </div>
        <div className="tea-intro__edition">
          <strong className="tabular-nums">04</strong>
          <span>{t.introBotanical}</span>
        </div>
        <div className="tea-intro__moods" aria-hidden="true">
          {products.map((product) => <span key={product.slug} style={{ "--dot": product.color } as CSSProperties} />)}
        </div>
        <p className="tea-scene__scroll">{t.scroll}<span aria-hidden="true">→</span></p>
        <SceneControl next="#tea-pure-ivan-tea" labels={t} />
        <Ground colors={introGround} />
      </section>

      {products.map((product, index) => {
        const item = productText(product, locale);
        const sceneStyle = {
          "--mood": product.color,
          "--mood-soft": product.accent,
        } as CSSProperties;
        const previous = index === 0 ? "#tea-intro" : `#tea-${products[index - 1].slug}`;
        const next = index === products.length - 1 ? "#tea-origin" : `#tea-${products[index + 1].slug}`;

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
            <h2 className="text-balance">{item.name}</h2>
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
          <SceneControl previous={previous} next={next} labels={t} />
          <Ground colors={grounds[index]} />
        </article>;
      })}
    </HorizontalCatalog>

    <section className="tea-origin-note" id="tea-origin">
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
