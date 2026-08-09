import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/content";
import { BlogBrowser } from "@/components/editorial/BlogBrowser";

export default function BlogPage() {
  const featured = articles[0];
  return <main className="blog-page"><header className="journal-hero container"><p className="eyebrow">THE FIELD NOTES</p><h1>Stories for a<br/><em>better cup.</em></h1><p>Practical guides, growing stories and seasonal recipes from the Alder &amp; Hearth tea room.</p></header><section className="featured-article container"><div><Image src={featured.image} alt={featured.title} fill priority sizes="60vw"/></div><article><p>{featured.category} · {featured.readTime}</p><h2>{featured.title}</h2><span>{featured.excerpt} Learn how small adjustments reveal structure, sweetness and aroma in every kind of leaf.</span><Link href={`/blog/${featured.slug}`}>Read the feature →</Link></article></section><section className="all-articles container"><div className="section-head"><div><p className="eyebrow">EXPLORE THE JOURNAL</p><h2>Field notes &amp; guides</h2></div></div><BlogBrowser/></section></main>;
}
