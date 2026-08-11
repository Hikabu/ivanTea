"use client";

import { Product, productText } from "@/data/products";
import { Locale } from "@/lib/i18n";
import { useState } from "react";
import { Accordion } from "../ui/Accordion";

export function ProductDetails({ product, locale = "en" }: { product: Product; locale?: Locale }) {
  const copy = productText(product, locale);
  const tabs = locale === "ru" ? ["ЧТО ВНУТРИ", "ИНФОРМАЦИЯ", "КАК ЗАВАРИВАТЬ", "СОСТАВ", "ОТЗЫВЫ"] : ["WHAT'S INSIDE", "DETAILS", "HOW TO BREW", "INGREDIENTS", "REVIEWS"];
  const [active, setActive] = useState(tabs[0]);
  const is = (en: string, ru: string) => active === (locale === "ru" ? ru : en);
  const steps = locale === "ru" ? [
    { n: "01", t: "ВОДА", d: "90–95°C" }, { n: "02", t: "ПОРЦИЯ", d: "2–3 г / 250 мл" }, { n: "03", t: "ВРЕМЯ", d: "6–8 минут" }, { n: "04", t: "ПОДАЧА", d: "Горячим или со льдом" },
  ] : [
    { n: "01", t: "HEAT", d: "90–95°C" }, { n: "02", t: "MEASURE", d: "2–3 g / 250 ml" }, { n: "03", t: "STEEP", d: "6–8 minutes" }, { n: "04", t: "SERVE", d: "Hot or over ice" },
  ];
  return <section className="product-details container">
    <div className="detail-tabs" role="tablist">{tabs.map((tab) => <button role="tab" aria-selected={active === tab} onClick={() => setActive(tab)} key={tab}>{tab}</button>)}</div>
    <div className="detail-tab-content">
      {is("WHAT'S INSIDE", "ЧТО ВНУТРИ") && <div className="inside-content"><div><p className="eyebrow">{locale === "ru" ? "ВКУС С ХАРАКТЕРОМ" : "A CUP WITH CHARACTER"}</p><h2>{copy.subtitle}</h2><p>{copy.ingredients} {locale === "ru" ? "Крупная нарезка помогает компонентам раскрываться одновременно, сохраняя вкус самого кипрея." : "A generous cut helps every ingredient open at the same pace while keeping the fireweed leaf at the center."}</p></div><div className="ingredient-orbit"><span>{copy.imagery.split(" · ")[0]}</span><b>{product.initials}</b><span>{copy.imagery.split(" · ")[1]}</span></div></div>}
      {is("DETAILS", "ИНФОРМАЦИЯ") && <dl className="detail-specs"><div><dt>{locale === "ru" ? "Тип" : "Tea type"}</dt><dd>{copy.type}</dd></div><div><dt>{locale === "ru" ? "Кофеин" : "Caffeine"}</dt><dd>{copy.caffeine}</dd></div><div><dt>{locale === "ru" ? "Масса нетто" : "Net weight"}</dt><dd>50 g</dd></div><div><dt>{locale === "ru" ? "Происхождение" : "Origin"}</dt><dd>{copy.origin}</dd></div><div><dt>{locale === "ru" ? "Срок годности" : "Shelf life"}</dt><dd>{copy.shelfLife}</dd></div><div><dt>{locale === "ru" ? "Хранение" : "Storage"}</dt><dd>{copy.storage}</dd></div></dl>}
      {is("HOW TO BREW", "КАК ЗАВАРИВАТЬ") && <div className="brew-steps">{steps.map((step) => <div key={step.n}><span>{step.n}</span><div className={`brew-icon brew-icon--${step.n}`}/><b>{step.t}</b><p>{step.d}</p></div>)}</div>}
      {is("INGREDIENTS", "СОСТАВ") && <div className="text-detail"><p className="eyebrow">{locale === "ru" ? "ПОЛНЫЙ СОСТАВ" : "FULL INGREDIENTS"}</p><h2>{locale === "ru" ? "Ничего лишнего." : "Nothing to hide."}</h2><p>{copy.ingredients}</p><small>{locale === "ru" ? "Информация о партии, дате упаковки и сроке годности указывается на нижней этикетке." : "Batch, packing date and best-before information appear on the base label."}</small></div>}
      {is("REVIEWS", "ОТЗЫВЫ") && <div className="reviews-panel" id="reviews"><strong>{product.rating}</strong><div><span>★★★★★</span><h2>{locale === "ru" ? "Чашка за чашкой." : "Cup after cup."}</h2><p>{locale === "ru" ? `На основе ${product.reviews} подтверждённых отзывов.` : `Based on ${product.reviews} verified customer reviews.`}</p></div></div>}
    </div>
    <div className="mobile-product-accordions">{tabs.slice(0, 4).map((tab) => <Accordion title={tab} key={tab}><p>{tab === tabs[3] ? copy.ingredients : tab === tabs[2] ? (locale === "ru" ? "2–3 г на 250 мл, вода 90–95°C, 6–8 минут." : "Use 2–3 g per 250 ml, water at 90–95°C, and steep for 6–8 minutes.") : `${copy.subtitle} ${copy.ingredients}`}</p></Accordion>)}</div>
  </section>;
}
