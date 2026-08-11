import Image from "next/image";
import Link from "next/link";
import { articleText, articles } from "@/data/content";
import { BlogBrowser } from "@/components/editorial/BlogBrowser";
import { resolveLocale } from "@/lib/i18n-server";
import { localizedHref } from "@/lib/i18n";

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params); const featured = articleText(articles[3], locale);
  return <main className="blog-page"><header className="journal-hero container"><p className="eyebrow">{locale === "ru" ? "ПОЛЕВЫЕ ЗАМЕТКИ" : "FIELD NOTES"}</p><h1>{locale === "ru" ? <>Знание для<br/><em>лучшей чашки.</em></> : <>Knowledge for<br/><em>a better cup.</em></>}</h1><p>{locale === "ru" ? "История, технология, состав, традиции и рецепты — только об иван-чае и без недоказанных медицинских обещаний." : "History, processing, composition, tradition and recipes—only about Ivan Tea, and without unsupported medical promises."}</p></header><section className="featured-article container"><div><Image src={featured.image} alt={featured.title} fill loading="eager" sizes="60vw"/></div><article><p>{featured.category} · {featured.readTime}</p><h2>{featured.title}</h2><span>{featured.excerpt}</span><Link href={localizedHref(locale, `/blog/${featured.slug}`)}>{locale === "ru" ? "Читать исследование →" : "Read the research note →"}</Link></article></section><section className="all-articles container"><div className="section-head"><div><p className="eyebrow">{locale === "ru" ? "ВСЕ МАТЕРИАЛЫ" : "EXPLORE THE JOURNAL"}</p><h2>{locale === "ru" ? "Статьи и рецепты" : "Articles & recipes"}</h2></div></div><BlogBrowser locale={locale}/></section></main>;
}
