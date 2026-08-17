"use client";

import { ProductGrid } from "@/components/commerce/ProductGrid";
import { articleText, articles, collectionText, collections } from "@/data/content";
import { productText, products } from "@/data/products";
import { Locale, localizedHref } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export function SearchPageContent({ locale }: { locale: Locale }) {
  const params = useSearchParams(); const [query, setQuery] = useState(params.get("q") ?? "");
  const matches = useMemo(() => products.filter((product) => { const copy = productText(product, locale); return `${copy.name} ${copy.subtitle} ${copy.type} ${copy.flavor} ${copy.ingredients}`.toLowerCase().includes(query.toLowerCase()); }), [query, locale]);
  return <main className="search-page container"><p className="eyebrow">{locale === "ru" ? "ПОИСК ПО FEDOROV TEA" : "SEARCH FEDOROV TEA"}</p><h1>{locale === "ru" ? "Поиск" : "Search"}</h1><div className="search-page-input"><Icon name="search"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={locale === "ru" ? "Вкус, добавка, рецепт…" : "Flavor, addition, recipe…"} aria-label={locale === "ru" ? "Поиск по товарам и статьям" : "Search products and stories"} autoFocus/><span>{matches.length} {locale === "ru" ? "результатов" : "results"}</span></div><div className="search-support"><p>{locale === "ru" ? "ПОПУЛЯРНОЕ" : "RELATED PLACES"}</p>{collections.slice(0, 2).map((item) => { const copy = collectionText(item, locale); return <Link href={localizedHref(locale, `/collections/${item.slug}`)} key={item.slug}>{copy.name}</Link>; })}{articles.slice(0, 1).map((item) => { const copy = articleText(item, locale); return <Link href={localizedHref(locale, `/blog/${item.slug}`)} key={item.slug}>{copy.title}</Link>; })}</div><section><div className="section-head"><div><p className="eyebrow">{locale === "ru" ? "ТОВАРЫ" : "PRODUCTS"}</p><h2>{locale === "ru" ? "Иван-чай" : "Ivan Tea only"}</h2></div></div><ProductGrid products={matches} locale={locale}/>{!matches.length && query && <div className="no-results"><h2>{locale === "ru" ? "Точных совпадений нет" : "No exact matches"}</h2><p>{locale === "ru" ? "Попробуйте «яблоко», «ягоды», «классический» или «мята»." : "Try apple, berries, pure or mint."}</p></div>}</section></main>;
}
