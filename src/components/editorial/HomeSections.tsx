"use client";

import Image from "next/image";
import Link from "next/link";
import { articleText, articles, collectionText, collections, testimonials } from "@/data/content";
import { products } from "@/data/products";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { ProductGrid } from "../commerce/ProductGrid";
import { Locale, localizedHref } from "@/lib/i18n";

export function Hero({ locale }: { locale: Locale }) {
  return <section className="hero hero--fedorov"><Image src="/images/fedorov/alder-hearth-hero.png" alt={locale === "ru" ? "Ручной сбор цветущего кипрея на опушке леса в Марий Эл" : "Hand collecting flowering fireweed at a forest edge in Mari El"} fill loading="eager" sizes="100vw"/><div className="hero-overlay"/><div className="container hero-copy"><p className="eyebrow">{locale === "ru" ? "ЕДИНСТВЕННЫЙ ЧАЙ, КОТОРЫЙ МЫ ДЕЛАЕМ" : "THE ONLY TEA WE MAKE"}</p><h1>{locale === "ru" ? <>Собран вручную.<br/><em>Из Марий Эл.</em></> : <>Hand collected.<br/><em>From Mari El.</em></>}</h1><span>{locale === "ru" ? "Современный иван-чай из чистых полей и лесов республики — классический и с натуральными добавками." : "Modern Ivan Tea from the republic’s clean fields and forests—pure, or finished with natural additions."}</span><div><Button href={localizedHref(locale, "/shop")}>{locale === "ru" ? "Выбрать иван-чай" : "Shop Ivan Tea"}</Button><Button href={localizedHref(locale, "/about")} variant="text">{locale === "ru" ? "История Марий Эл" : "The Mari El story"} <Icon name="arrow" size={17}/></Button></div></div></section>;
}

export function TrustStrip({ locale }: { locale: Locale }) {
  const items = locale === "ru" ? [{ mark: "✦", label: "Ручной сбор" }, { mark: "0", label: "Кофеина" }, { mark: "∞", label: "Доставка по миру" }, { mark: "1 кг", label: "Оптовый формат" }] : [{ mark: "✦", label: "Collected by hand" }, { mark: "0", label: "Caffeine" }, { mark: "∞", label: "Worldwide delivery" }, { mark: "1 kg", label: "Bulk format" }];
  return <section className="trust-strip"><div className="container">{items.map((item) => <div key={item.label}><b>{item.mark}</b><span>{item.label}</span></div>)}</div></section>;
}

export function ProductDiscovery({ locale }: { locale: Locale }) {
  const [tab, setTab] = useState<"pure" | "added">("pure");
  const shown = tab === "pure" ? [products[0], products[5], products[1], products[3]] : products.slice(1, 5);
  return <section className="section product-discovery container"><div className="section-head tab-head"><div><p className="eyebrow">{locale === "ru" ? "КОЛЛЕКЦИЯ FEDOROV TEA" : "THE FEDOROV TEA COLLECTION"}</p><div className="tabs" role="tablist"><button role="tab" aria-selected={tab === "pure"} onClick={() => setTab("pure")}>{locale === "ru" ? "КЛАССИЧЕСКИЙ" : "PURE IVAN TEA"}</button><button role="tab" aria-selected={tab === "added"} onClick={() => setTab("added")}>{locale === "ru" ? "С ДОБАВКАМИ" : "WITH NATURAL ADDITIONS"}</button></div></div><Link href={localizedHref(locale, "/shop")}>{locale === "ru" ? "Смотреть всё" : "View all"} <Icon name="arrow" size={17}/></Link></div><ProductGrid products={shown} locale={locale}/></section>;
}

export function CategorySection({ locale }: { locale: Locale }) {
  return <section className="section category-section container"><div className="section-head"><div><p className="eyebrow">{locale === "ru" ? "НАЙДИТЕ СВОЙ ВКУС" : "FIND YOUR IVAN TEA"}</p><h2>{locale === "ru" ? "Одна основа. Четыре направления." : "One leaf. Four directions."}</h2><span>{locale === "ru" ? "Кипрей остаётся главным — добавки только уточняют его характер." : "Fireweed stays at the center; additions simply bring its character into focus."}</span></div></div><div className="category-grid">{collections.map((collection) => { const copy = collectionText(collection, locale); return <Link className="category-tile" href={localizedHref(locale, `/collections/${collection.slug}`)} key={collection.slug}><Image src={collection.image} alt={copy.name} fill sizes="(max-width: 700px) 50vw, 25vw"/><div/><span><small>{copy.description}</small><b>{copy.name}</b><u>{locale === "ru" ? "Открыть" : "Explore"} <Icon name="arrow" size={16}/></u></span></Link>; })}</div></section>;
}

export function FeatureCampaign({ locale }: { locale: Locale }) {
  return <section className="campaign-section"><div className="campaign-image"><Image src="/images/fedorov/drying-screens.png" alt={locale === "ru" ? "Ручная подготовка листьев кипрея к сушке" : "Fireweed leaves being prepared by hand on drying screens"} fill sizes="60vw"/></div><div className="campaign-copy"><p className="eyebrow">{locale === "ru" ? "ОТ ПОЛЯ ДО ЧАШКИ" : "FROM FIELD TO CUP"}</p><h2>{locale === "ru" ? <>Дикое растение.<br/>Точная работа.</> : <>A wild plant.<br/>A precise process.</>}</h2><p>{locale === "ru" ? "Собранный лист перебирают, подвяливают, скручивают, ферментируют и бережно сушат небольшими партиями. Так формируется янтарный настой и узнаваемый мягкий аромат." : "Collected leaves are sorted, withered, rolled, fermented and gently dried in small batches. That sequence develops the amber cup and softly aromatic finish."}</p><dl><div><dt>100%</dt><dd>{locale === "ru" ? "кипрей из Марий Эл" : "Mari El fireweed"}</dd></div><div><dt>0</dt><dd>{locale === "ru" ? "других видов чая" : "other tea types"}</dd></div></dl><Button href={localizedHref(locale, "/about")} variant="outline">{locale === "ru" ? "Как мы работаем" : "See how we work"}</Button></div></section>;
}

export function TestimonialSection({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0); const testimonial = testimonials[active];
  return <section className="section testimonials"><div className="container"><p className="eyebrow">{locale === "ru" ? "ЗАМЕТКИ ПОКУПАТЕЛЕЙ" : "NOTES FROM OUR CUSTOMERS"}</p><h2>{locale === "ru" ? "Иван-чай в новых домах" : "Ivan Tea, finding its way"}</h2><div className="quote-mark">“</div><blockquote>{locale === "ru" ? testimonial.quoteRu : testimonial.quote}</blockquote><p className="quote-author">{testimonial.name} <span>{locale === "ru" ? "о" : "on"} {locale === "ru" ? testimonial.productRu : testimonial.product}</span></p><div className="testimonial-controls"><button aria-label="Previous testimonial" onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}>←</button><span>{String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span><button aria-label="Next testimonial" onClick={() => setActive((active + 1) % testimonials.length)}>→</button></div></div></section>;
}

export function JournalSection({ locale }: { locale: Locale }) {
  return <section className="section journal-section container"><div className="section-head"><div><p className="eyebrow">{locale === "ru" ? "ПОЛЕВЫЕ ЗАМЕТКИ" : "FIELD NOTES"}</p><h2>{locale === "ru" ? "История, состав, рецепты" : "History, composition, recipes"}</h2><span>{locale === "ru" ? "Проверяем факты, отделяем лабораторные данные от медицинских обещаний и завариваем только кипрей." : "Evidence-minded reading that separates laboratory findings from medical promises—and recipes built only on fireweed."}</span></div><Link href={localizedHref(locale, "/blog")}>{locale === "ru" ? "Все статьи" : "Visit the journal"} <Icon name="arrow" size={17}/></Link></div><div className="article-grid">{articles.slice(0, 4).map((article) => { const copy = articleText(article, locale); return <article className="article-card" key={article.slug}><Link href={localizedHref(locale, `/blog/${article.slug}`)} className="article-image"><Image src={article.image} alt={copy.title} fill sizes="(max-width: 700px) 100vw, 25vw"/></Link><p>{copy.category}</p><h3><Link href={localizedHref(locale, `/blog/${article.slug}`)}>{copy.title}</Link></h3><span>{copy.excerpt}</span><Link className="text-link" href={localizedHref(locale, `/blog/${article.slug}`)}>{locale === "ru" ? "Читать" : "Read"} <Icon name="arrow" size={15}/></Link></article>; })}</div></section>;
}

export function MembershipSection({ locale }: { locale: Locale }) {
  return <section className="membership-section container"><div><p className="eyebrow">{locale === "ru" ? "РОЗНИЦА" : "RETAIL"}</p><h3>{locale === "ru" ? "Для собственной чайной полки." : "For your own tea shelf."}</h3><p>{locale === "ru" ? "Компактные тубусы 50 г, рефилы и подарочные наборы с доставкой по всему миру." : "Compact 50 g canisters, refills and gift sets, delivered worldwide."}</p><Link href={localizedHref(locale, "/shop")}>{locale === "ru" ? "Купить" : "Shop retail"} <Icon name="arrow" size={16}/></Link></div><div><p className="eyebrow">B2B / WHOLESALE</p><h3>{locale === "ru" ? "Для магазинов и дистрибьюторов." : "For shops and distributors."}</h3><p>{locale === "ru" ? "Розничная линейка или иван-чай от 1 кг без потребительской упаковки. Обсудим образцы, объёмы и экспорт." : "A retail-ready range or Ivan Tea from 1 kg without consumer packaging. Ask about samples, volumes and export."}</p><Link href={localizedHref(locale, "/wholesale")}>{locale === "ru" ? "Стать партнёром" : "Become a partner"} <Icon name="arrow" size={16}/></Link></div></section>;
}

export function PressSection({ locale }: { locale: Locale }) {
  return <section className="press-section container"><p>{locale === "ru" ? "НАШИ КООРДИНАТЫ" : "OUR COORDINATES"}</p><div><span>{locale === "ru" ? "РЕСПУБЛИКА МАРИЙ ЭЛ" : "MARI EL REPUBLIC"}</span><span>56.63° N</span><span>{locale === "ru" ? "ЛЕСНЫЕ ОПУШКИ" : "FOREST EDGES"}</span><span>{locale === "ru" ? "РУЧНОЙ СБОР" : "HAND COLLECTION"}</span></div></section>;
}
