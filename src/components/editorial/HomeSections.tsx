"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/products";
import { collections, collectionText } from "@/data/content";
import { Locale, localizedHref } from "@/lib/i18n";
import { ProductGrid } from "../commerce/ProductGrid";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";

export function Hero({ locale }: { locale: Locale }) {
  return <section className="hero garof-hero">
    <Image src="/images/fedorov/teaTime.png" alt={locale === "ru" ? "Чайный ритуал среди природы Марий Эл" : "A quiet tea ritual in the nature of Mari El"} fill priority sizes="100vw" />
    <div className="hero-overlay" />
    <div className="container hero-copy">
      <p className="eyebrow">{locale === "ru" ? "ЧАЙ · БОТАНИКА · МАРИЙ ЭЛ" : "TEA · BOTANICALS · MARI EL"}</p>
      <h1>{locale === "ru" ? <>Вкус сердца<br /><em>Марий Эл.</em></> : <>Tea From The<br /><em>Heart Of Mari El.</em></>}</h1>
      <span>{locale === "ru" ? "Тихие чайные ритуалы, собранные из лесов, лугов и памяти края." : "Quiet tea rituals gathered from the forests, meadows and memory of the region."}</span>
      <div><Button href={localizedHref(locale, "/shop")}>{locale === "ru" ? "Открыть коллекцию" : "Explore the collection"}</Button><Button href={localizedHref(locale, "/about")} variant="text">{locale === "ru" ? "Открыть Марий Эл" : "Explore Mari El"} <Icon name="arrow" size={17} /></Button></div>
    </div>
  </section>;
}

export function TrustStrip({ locale }: { locale: Locale }) {
  const items = locale === "ru" ? [{ mark: "✦", label: "Собрано вручную" }, { mark: "0", label: "Кофеина" }, { mark: "∞", label: "Доставка по миру" }, { mark: "1 кг", label: "Оптовый формат" }] : [{ mark: "✦", label: "Collected by hand" }, { mark: "0", label: "Caffeine" }, { mark: "∞", label: "Worldwide delivery" }, { mark: "1 kg", label: "Bulk format" }];
  return <section className="trust-strip"><div className="container">{items.map((item) => <div key={item.label}><b>{item.mark}</b><span>{item.label}</span></div>)}</div></section>;
}

export function ProductDiscovery({ locale }: { locale: Locale }) {
  const [tab, setTab] = useState<"best" | "new" | "herbal" | "traditional" | "gifts">("best");
  const sets = { best: [products[0], products[1], products[3], products[4]], new: [products[2], products[5], products[1], products[0]], herbal: [products[3], products[4], products[0], products[5]], traditional: [products[0], products[3], products[5], products[2]], gifts: [products[4], products[1], products[2], products[0]] };
  const tabs = [{ id: "best", label: "Best Sellers", ru: "Хиты" }, { id: "new", label: "New", ru: "Новинки" }, { id: "herbal", label: "Herbal", ru: "Травяные" }, { id: "traditional", label: "Traditional", ru: "Традиционные" }, { id: "gifts", label: "Gifts", ru: "Подарки" }] as const;
  return <section className="section product-discovery container"><div className="section-head tab-head"><div><p className="eyebrow">{locale === "ru" ? "КОЛЛЕКЦИЯ GAROF" : "THE GAROF COLLECTION"}</p><h2>{locale === "ru" ? "Избранные чаи" : "Featured Teas"}</h2></div><div className="tabs garof-tabs" role="tablist">{tabs.map((item) => <button key={item.id} role="tab" aria-selected={tab === item.id} onClick={() => setTab(item.id)}>{locale === "ru" ? item.ru : item.label}</button>)}</div></div><ProductGrid products={sets[tab]} locale={locale} /></section>;
}

export function CategorySection({ locale }: { locale: Locale }) {
  return <section className="section category-section container"><div className="section-head"><div><p className="eyebrow">{locale === "ru" ? "ИСТОРИЯ КРАЯ" : "THE STORY OF A PLACE"}</p><h2>{locale === "ru" ? "Чай, который начинается с земли." : "A tea that begins with the land."}</h2><span>{locale === "ru" ? "Лесные травы, янтарный кипрей и ритм Марий Эл." : "Forest botanicals, amber fireweed and the rhythm of Mari El."}</span></div></div><div className="category-grid">{collections.slice(0, 4).map((collection) => { const copy = collectionText(collection, locale); return <Link className="category-tile" href={localizedHref(locale, `/collections/${collection.slug}`)} key={collection.slug}><Image src={collection.image} alt={copy.name} fill sizes="(max-width: 700px) 50vw, 25vw" /><div /><span><small>{copy.description}</small><b>{copy.name}</b><u>{locale === "ru" ? "Открыть" : "Explore"} <Icon name="arrow" size={16} /></u></span></Link>; })}</div></section>;
}

export function FeatureCampaign({ locale }: { locale: Locale }) {
  return <section className="campaign-section"><div className="campaign-image"><Image src="/images/fedorov/organic-campaign.jpg" alt={locale === "ru" ? "Ручная подготовка листьев кипрея" : "Fireweed leaves prepared by hand"} fill sizes="60vw" /></div><div className="campaign-copy"><p className="eyebrow">{locale === "ru" ? "ОТ ЛУГА ДО ЧАШКИ" : "FROM MEADOW TO CUP"}</p><h2>{locale === "ru" ? <>Тихая природа.<br />Точная работа.</> : <>A quiet landscape.<br />A careful process.</>}</h2><p>{locale === "ru" ? "GAROF соединяет ботанические традиции Марий Эл с современным чайным ритуалом. Каждый лист проходит путь от ручного сбора до бережной сушки небольшими партиями." : "GAROF brings Mari El botanical traditions into a modern tea ritual. Every leaf travels from hand collection to careful small-batch drying."}</p><Button href={localizedHref(locale, "/about")} variant="outline">{locale === "ru" ? "Узнать нашу историю" : "Discover our story"}</Button></div></section>;
}

export function TestimonialSection(_props: { locale: Locale }) { return null; }
export function JournalSection(_props: { locale: Locale }) { return null; }
export function MembershipSection(_props: { locale: Locale }) { return null; }
export function PressSection(_props: { locale: Locale }) { return null; }
