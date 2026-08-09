"use client";

import { products as allProducts } from "@/data/products";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { ProductGrid } from "./ProductGrid";
import { Accordion } from "../ui/Accordion";
import { Icon } from "../ui/Icon";
import { Modal } from "../ui/Modal";

const filterGroups = [
  { key: "type", label: "Tea Type", options: ["Black Tea", "Green Tea", "Herbal", "Matcha", "Oolong", "Chai"] },
  { key: "flavor", label: "Flavor", options: ["Fruit", "Floral", "Mint", "Cinnamon", "Earl Grey", "Green"] },
  { key: "benefit", label: "Benefit", options: ["Sleep", "Energy", "Digestion", "Focus"] },
  { key: "caffeine", label: "Caffeine", options: ["None", "Low", "Moderate", "High"] },
  { key: "format", label: "Format", options: ["Tea Bags", "Loose Leaf", "Powder"] },
  { key: "certification", label: "Certification", options: ["Organic", "Responsibly Sourced", "Small Batch"] },
];

export function CollectionBrowser({ initialType }: { initialType?: string }) {
  const params = useSearchParams(); const pathname = usePathname(); const router = useRouter();
  const [sort, setSort] = useState(params.get("sort") ?? "featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const setFilter = (key: string, value: string) => { const next = new URLSearchParams(params.toString()); const normalized = value.toLowerCase(); if (next.get(key) === normalized) next.delete(key); else next.set(key, normalized); router.replace(`${pathname}?${next.toString()}`, { scroll: false }); };
  const filtered = useMemo(() => {
    let result = allProducts.filter((product) => {
      const activeType = params.get("type") ?? initialType?.toLowerCase();
      return filterGroups.every((group) => { const active = group.key === "type" ? activeType : params.get(group.key); return !active || String(product[group.key as keyof typeof product]).toLowerCase() === active; });
    });
    if (sort === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "rating") result = [...result].sort((a, b) => b.rating - a.rating);
    return result;
  }, [params, initialType, sort]);
  const filters = <FilterList params={params} onToggle={setFilter}/>;
  return <div className="collection-browser">
    <div className="collection-toolbar"><button className="filter-trigger" onClick={() => setFiltersOpen(true)}><span>FILTER</span><Icon name="plus" size={17}/></button><span>{filtered.length} blends</span><label>Sort by <select value={sort} onChange={(e) => { setSort(e.target.value); const next = new URLSearchParams(params.toString()); next.set("sort", e.target.value); router.replace(`${pathname}?${next.toString()}`, { scroll: false }); }}><option value="featured">Featured</option><option value="rating">Top rated</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label></div>
    <div className="collection-layout"><aside className="filter-sidebar"><p>REFINE YOUR SEARCH</p>{filters}</aside><div className="collection-results">{filtered.length ? <ProductGrid products={filtered}/> : <div className="no-results"><h2>No blends found</h2><p>Try removing a filter to open up the selection.</p><button onClick={() => router.replace(pathname)}>Clear all filters</button></div>}</div></div>
    <Modal open={filtersOpen} onClose={() => setFiltersOpen(false)} title="Filter teas" side="left"><div className="mobile-filters">{filters}<button className="button button--primary" onClick={() => setFiltersOpen(false)}>SHOW {filtered.length} RESULTS</button></div></Modal>
  </div>;
}

function FilterList({ params, onToggle }: { params: URLSearchParams; onToggle: (key: string, value: string) => void }) {
  return <>{filterGroups.map((group) => <Accordion title={group.label} key={group.key} defaultOpen={group.key === "type" || group.key === "flavor"}><div className="filter-options">{group.options.map((option) => <label key={option}><input type="checkbox" checked={params.get(group.key) === option.toLowerCase()} onChange={() => onToggle(group.key, option)}/><span>{option}</span></label>)}</div></Accordion>)}</>;
}
