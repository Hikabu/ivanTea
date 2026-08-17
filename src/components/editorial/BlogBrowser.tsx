"use client";

import { articleText, articles } from "@/data/content";
import { Locale, localizedHref } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon } from "../ui/Icon";

export function BlogBrowser({ locale = "en" }: { locale?: Locale }) {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => articles.filter((article) => { const copy = articleText(article, locale); return `${copy.title} ${copy.category} ${copy.excerpt}`.toLowerCase().includes(query.toLowerCase()); }), [query, locale]);
  return <><div className="article-search"><Icon name="search"/><input aria-label={locale === "ru" ? "Поиск по статьям" : "Search the journal"} placeholder={locale === "ru" ? "Поиск: история, состав, рецепты…" : "Search history, composition, recipes…"} value={query} onChange={(event) => setQuery(event.target.value)}/></div><div className="blog-grid">{matches.map((article) => { const copy = articleText(article, locale); return <article key={article.slug}><Link href={localizedHref(locale, `/blog/${article.slug}`)}><div className="blog-card-image"><Image src={article.image} alt={copy.title} fill sizes="(max-width: 700px) 100vw, 33vw"/></div><p>{copy.category} <span>{copy.readTime}</span></p><h2>{copy.title}</h2><small>{copy.excerpt}</small><u>{locale === "ru" ? "Читать" : "Read"} <Icon name="arrow" size={15}/></u></Link></article>; })}</div>{!matches.length && <div className="no-results"><h2>{locale === "ru" ? "Материалов не найдено" : "No field notes found"}</h2><p>{locale === "ru" ? "Попробуйте слова «кипрей», «заваривание» или «рецепт»." : "Try a broader word such as fireweed, brewing or recipe."}</p></div>}</>;
}
