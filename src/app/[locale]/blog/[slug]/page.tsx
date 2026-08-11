import { ProductGrid } from "@/components/commerce/ProductGrid";
import { articleText, articles } from "@/data/content";
import { products } from "@/data/products";
import { localizedHref } from "@/lib/i18n";
import { resolveLocale } from "@/lib/i18n-server";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const locale = await resolveLocale(params); const { slug } = await params; const source = articles.find((item) => item.slug === slug); if (!source) notFound(); const article = articleText(source, locale); const index = articles.findIndex((item) => item.slug === slug); const next = articleText(articles[(index + 1) % articles.length], locale);
  return <main className="article-page"><header className="article-header container"><p>{article.category} · {article.readTime}</p><h1>{article.title}</h1><span>{article.excerpt}</span><small>{locale === "ru" ? "РЕДАКЦИЯ FEDOROV TEA · ПРОВЕРЕНО 11 АВГУСТА 2026" : "FEDOROV TEA EDITORS · REVIEWED 11 AUGUST 2026"}</small></header><div className="article-hero-image"><Image src={article.image} alt={article.title} fill loading="eager" sizes="100vw"/></div><article className="article-body"><p className="drop-cap">{article.intro}</p>{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}{article.facts && <div className="article-facts">{article.facts.map((fact) => <div key={fact.value}><b>{fact.value}</b><span>{locale === "ru" ? fact.labelRu : fact.label}</span></div>)}</div>}{article.note && <aside className="evidence-note"><strong>{locale === "ru" ? "Важно" : "Important"}</strong><p>{article.note}</p></aside>}{source.sources && <section className="article-sources"><h2>{locale === "ru" ? "Источники" : "Sources"}</h2><ol>{source.sources.map((item) => <li key={item.href}><a href={item.href} target="_blank" rel="noreferrer">{locale === "ru" ? item.labelRu : item.label} ↗</a></li>)}</ol></section>}</article><section className="article-products section container"><p className="eyebrow">{locale === "ru" ? "ЗАВАРИТЬ ПО ТЕМЕ" : "BREW ALONG"}</p><h2>{locale === "ru" ? "Иван-чай для практики" : "Ivan Tea for the practice"}</h2><ProductGrid products={products.slice(0, 3)} locale={locale}/></section><nav className="article-next container"><Link href={localizedHref(locale, "/blog")}>{locale === "ru" ? "← Все статьи" : "← Back to Field Notes"}</Link><Link href={localizedHref(locale, `/blog/${next.slug}`)}>{locale === "ru" ? `Далее: ${next.title} →` : `Next: ${next.title} →`}</Link></nav></main>;
}
