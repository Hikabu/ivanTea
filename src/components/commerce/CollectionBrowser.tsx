"use client";

import { products as allProducts } from "@/data/products";
import { Locale } from "@/lib/i18n";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { ProductGrid } from "./ProductGrid";
import { Accordion } from "../ui/Accordion";
import { Icon } from "../ui/Icon";
import { Modal } from "../ui/Modal";

type Option = { value: string; en: string; ru: string };
const filterGroups: { key: "flavor" | "benefit" | "format" | "certification"; en: string; ru: string; options: Option[] }[] = [
  { key: "flavor", en: "Ivan Tea style", ru: "Вид иван-чая", options: [
    { value: "pure", en: "Pure", ru: "Классический" }, { value: "fruit", en: "With fruit", ru: "С фруктами" }, { value: "berry", en: "With berries", ru: "С ягодами" }, { value: "herbal", en: "With herbs", ru: "С травами" }, { value: "floral", en: "With flowers", ru: "С цветками" },
  ] },
  { key: "benefit", en: "Cup character", ru: "Характер вкуса", options: [
    { value: "everyday ritual", en: "Everyday", ru: "На каждый день" }, { value: "bright & warming", en: "Bright", ru: "Яркий" }, { value: "fresh & calm", en: "Fresh", ru: "Свежий" }, { value: "light & fragrant", en: "Light", ru: "Лёгкий" },
  ] },
  { key: "format", en: "Format", ru: "Формат", options: [
    { value: "loose leaf", en: "Loose leaf", ru: "Листовой" },
  ] },
  { key: "certification", en: "Collection", ru: "Сбор", options: [
    { value: "wild hand collection", en: "Wild hand collection", ru: "Ручной сбор" },
  ] },
];

export function CollectionBrowser({ initialFlavor, locale = "en" }: { initialFlavor?: string; initialType?: string; locale?: Locale }) {
  const params = useSearchParams(); const pathname = usePathname(); const router = useRouter();
  const [sort, setSort] = useState(params.get("sort") ?? "featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const setFilter = (key: string, value: string) => { const next = new URLSearchParams(params.toString()); if (next.get(key) === value) next.delete(key); else next.set(key, value); router.replace(`${pathname}?${next.toString()}`, { scroll: false }); };
  const filtered = useMemo(() => {
    let result = allProducts.filter((product) => filterGroups.every((group) => {
      const active = group.key === "flavor" ? params.get(group.key) ?? initialFlavor?.toLowerCase() : params.get(group.key);
      return !active || String(product[group.key]).toLowerCase() === active;
    }));
    if (sort === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "rating") result = [...result].sort((a, b) => b.rating - a.rating);
    return result;
  }, [params, initialFlavor, sort]);
  const filters = <FilterList params={params} onToggle={setFilter} locale={locale}/>;
  return <div className="collection-browser">
    <div className="collection-toolbar"><button className="filter-trigger" onClick={() => setFiltersOpen(true)}><span>{locale === "ru" ? "ФИЛЬТРЫ" : "FILTER"}</span><Icon name="plus" size={17}/></button><span>{filtered.length} {locale === "ru" ? "вариантов" : "Ivan Teas"}</span><label>{locale === "ru" ? "Сортировка" : "Sort by"} <select value={sort} onChange={(e) => { setSort(e.target.value); const next = new URLSearchParams(params.toString()); next.set("sort", e.target.value); router.replace(`${pathname}?${next.toString()}`, { scroll: false }); }}><option value="featured">{locale === "ru" ? "По умолчанию" : "Featured"}</option><option value="rating">{locale === "ru" ? "По рейтингу" : "Top rated"}</option><option value="price-low">{locale === "ru" ? "Сначала дешевле" : "Price: low to high"}</option><option value="price-high">{locale === "ru" ? "Сначала дороже" : "Price: high to low"}</option></select></label></div>
    <div className="collection-layout"><aside className="filter-sidebar"><p>{locale === "ru" ? "УТОЧНИТЬ ВЫБОР" : "REFINE YOUR SEARCH"}</p>{filters}</aside><div className="collection-results">{filtered.length ? <ProductGrid products={filtered} locale={locale}/> : <div className="no-results"><h2>{locale === "ru" ? "Ничего не найдено" : "No Ivan Tea found"}</h2><p>{locale === "ru" ? "Попробуйте убрать один из фильтров." : "Try removing a filter to open up the selection."}</p><button onClick={() => router.replace(pathname)}>{locale === "ru" ? "Сбросить фильтры" : "Clear all filters"}</button></div>}</div></div>
    <Modal open={filtersOpen} onClose={() => setFiltersOpen(false)} title={locale === "ru" ? "Фильтры" : "Filter Ivan Tea"} side="left"><div className="mobile-filters">{filters}<button className="button button--primary" onClick={() => setFiltersOpen(false)}>{locale === "ru" ? `ПОКАЗАТЬ: ${filtered.length}` : `SHOW ${filtered.length} RESULTS`}</button></div></Modal>
  </div>;
}

function FilterList({ params, onToggle, locale }: { params: ReturnType<typeof useSearchParams>; onToggle: (key: string, value: string) => void; locale: Locale }) {
  return <>{filterGroups.map((group) => <Accordion title={locale === "ru" ? group.ru : group.en} key={group.key} defaultOpen={group.key === "flavor"}><div className="filter-options">{group.options.map((option) => <label key={option.value}><input type="checkbox" checked={params.get(group.key) === option.value} onChange={() => onToggle(group.key, option.value)}/><span>{locale === "ru" ? option.ru : option.en}</span></label>)}</div></Accordion>)}</>;
}
