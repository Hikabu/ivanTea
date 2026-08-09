"use client";

import Image from "next/image";
import Link from "next/link";
import { articles, collections, testimonials } from "@/data/content";
import { products } from "@/data/products";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { ProductGrid } from "../commerce/ProductGrid";

export function Hero() {
  return <section className="hero">
    <Image src="/images/alder-hearth-hero.png" alt="Alder and Hearth tea tin, ceramic cup and fresh botanicals in warm morning light" fill priority sizes="100vw"/>
    <div className="hero-overlay"/>
    <div className="container hero-copy"><p className="eyebrow">THE ORCHARD COLLECTION · SUMMER 2026</p><h1>Let the morning<br/><em>unfold slowly.</em></h1><span>Bright stone fruit, fragrant leaves and warming ginger—blended for unrushed cups and open windows.</span><div><Button href="/collections/black-tea">Shop the Collection</Button><Button href="/blog/a-practical-guide-to-brewing" variant="text">Read the story <Icon name="arrow" size={17}/></Button></div></div>
  </section>;
}

export function TrustStrip() {
  const items = [{ mark: "320+", label: "Distinctive blends" }, { mark: "◇", label: "Responsibly sourced" }, { mark: "1994", label: "Crafted since" }, { mark: "✦", label: "Whole botanicals" }];
  return <section className="trust-strip"><div className="container">{items.map((item) => <div key={item.label}><b>{item.mark}</b><span>{item.label}</span></div>)}</div></section>;
}

export function ProductDiscovery() {
  const [tab, setTab] = useState<"best" | "new">("best");
  const shown = tab === "best" ? products.slice(0, 4) : [products[3], products[4], products[5], products[6]];
  return <section className="section product-discovery container">
    <div className="section-head tab-head"><div><p className="eyebrow">FROM THE TEA ROOM</p><div className="tabs" role="tablist"><button role="tab" aria-selected={tab === "best"} onClick={() => setTab("best")}>BEST SELLERS</button><button role="tab" aria-selected={tab === "new"} onClick={() => setTab("new")}>NEW ARRIVALS</button></div></div><Link href="/shop">View all teas <Icon name="arrow" size={17}/></Link></div>
    <ProductGrid products={shown}/>
  </section>;
}

export function CategorySection() {
  return <section className="section category-section container"><div className="section-head"><div><p className="eyebrow">FIND YOUR CUP</p><h2>Shop by category</h2><span>Begin with the leaf, the hour, or simply what sounds good.</span></div></div><div className="category-grid">{collections.map((collection) => <Link className="category-tile" href={`/collections/${collection.slug}`} key={collection.slug}><Image src={collection.image} alt={`${collection.name} served in an editorial tea setting`} fill sizes="(max-width: 700px) 50vw, 25vw"/><div/><span><small>{collection.description}</small><b>{collection.name}</b><u>Explore <Icon name="arrow" size={16}/></u></span></Link>)}</div></section>;
}

export function FeatureCampaign() {
  return <section className="campaign-section"><div className="campaign-image"><Image src="/images/organic-campaign.jpg" alt="Loose green tea and botanical leaves in a ceramic bowl" fill sizes="60vw"/></div><div className="campaign-copy"><p className="eyebrow">THE GARDEN, PRESERVED</p><h2>Nothing added.<br/>Nothing hurried.</h2><p>Our certified organic collection begins with whole botanicals, careful harvests and growers we know by name. The result is a cup with clarity—of flavor and of origin.</p><dl><div><dt>32</dt><dd>certified organic blends</dd></div><div><dt>11</dt><dd>growing regions</dd></div></dl><Button href="/shop?certification=organic" variant="outline">Explore organic tea</Button></div></section>;
}

export function TestimonialSection() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];
  return <section className="section testimonials"><div className="container"><p className="eyebrow">NOTES FROM THE TEA TABLE</p><h2>What our customers say</h2><div className="quote-mark">“</div><blockquote>{testimonial.quote}</blockquote><p className="quote-author">{testimonial.name} <span>on {testimonial.product}</span></p><div className="testimonial-controls"><button aria-label="Previous testimonial" onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}>←</button><span>{String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span><button aria-label="Next testimonial" onClick={() => setActive((active + 1) % testimonials.length)}>→</button></div></div></section>;
}

export function JournalSection() {
  return <section className="section journal-section container"><div className="section-head"><div><p className="eyebrow">THE FIELD NOTES</p><h2>Learn the leaf</h2><span>Practical knowledge and small stories for a more considered cup.</span></div><Link href="/blog">Visit the journal <Icon name="arrow" size={17}/></Link></div><div className="article-grid">{articles.map((article) => <article className="article-card" key={article.slug}><Link href={`/blog/${article.slug}`} className="article-image"><Image src={article.image} alt={article.title} fill sizes="(max-width: 700px) 100vw, 25vw"/></Link><p>{article.category}</p><h3><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3><span>{article.excerpt}</span><Link className="text-link" href={`/blog/${article.slug}`}>Read story <Icon name="arrow" size={15}/></Link></article>)}</div></section>;
}

export function MembershipSection() {
  return <section className="membership-section container"><div><p className="eyebrow">SUBSCRIPTIONS</p><h3>A well-stocked tea shelf.</h3><p>Save 10% on the teas you reach for most. Pause, skip or cancel at any time.</p><Link href="/shop">Learn more <Icon name="arrow" size={16}/></Link></div><div><p className="eyebrow">THE HEARTH CIRCLE</p><h3>Good tea returns the favor.</h3><p>Earn leaves with every order and redeem them on future cups, gifts and tastings.</p><Link href="/account">Join rewards <Icon name="arrow" size={16}/></Link></div></section>;
}

export function PressSection() {
  return <section className="press-section container"><p>FEATURED IN</p><div><span>BON APPÉTIT</span><span>goop</span><span>FOOD &amp; WINE</span><span>Kinfolk</span><span>MARTHA STEWART</span></div></section>;
}
