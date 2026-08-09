"use client";

import { articles } from "@/data/content";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon } from "../ui/Icon";

export function BlogBrowser() {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => articles.filter((article) => `${article.title} ${article.category} ${article.excerpt}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return <>
    <div className="article-search"><Icon name="search"/><input aria-label="Search the journal" placeholder="Search brewing, ingredients, recipes…" value={query} onChange={(e) => setQuery(e.target.value)}/></div>
    <div className="blog-grid">{matches.map((article) => <article key={article.slug}><Link href={`/blog/${article.slug}`}><div className="blog-card-image"><Image src={article.image} alt={article.title} fill sizes="(max-width: 700px) 100vw, 33vw"/></div><p>{article.category} <span>{article.readTime}</span></p><h2>{article.title}</h2><small>{article.excerpt}</small><u>Read story <Icon name="arrow" size={15}/></u></Link></article>)}</div>
    {!matches.length && <div className="no-results"><h2>No field notes found</h2><p>Try a broader word such as tea, brewing or ingredient.</p></div>}
  </>;
}
