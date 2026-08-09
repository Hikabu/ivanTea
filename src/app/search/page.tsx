"use client";

import { ProductGrid } from "@/components/commerce/ProductGrid";
import { articles, collections } from "@/data/content";
import { products } from "@/data/products";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";

function SearchPageContent() {
  const params = useSearchParams(); const [query, setQuery] = useState(params.get("q") ?? "ginger");
  const matches = useMemo(() => products.filter((p) => `${p.name} ${p.subtitle} ${p.type} ${p.flavor} ${p.ingredients}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return <main className="search-page container"><p className="eyebrow">SEARCH THE TEA ROOM</p><h1>Search</h1><div className="search-page-input"><Icon name="search"/><input value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search products and stories" autoFocus/><span>{matches.length + 2} results</span></div><div className="search-support"><p>RELATED PLACES</p>{collections.slice(0, 2).map((item) => <Link href={`/collections/${item.slug}`} key={item.slug}>{item.name}</Link>)}{articles.slice(0, 1).map((item) => <Link href={`/blog/${item.slug}`} key={item.slug}>{item.title}</Link>)}</div><section><div className="section-head"><div><p className="eyebrow">PRODUCTS</p><h2>Tea &amp; botanicals</h2></div></div><ProductGrid products={matches}/>{!matches.length && <div className="no-results"><h2>No exact matches</h2><p>Try an ingredient, tea type, or moment such as “mint,” “black tea,” or “sleep.”</p></div>}</section></main>;
}
export default function SearchPage() { return <Suspense><SearchPageContent/></Suspense>; }
