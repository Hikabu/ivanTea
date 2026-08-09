import { CollectionBrowser } from "@/components/commerce/CollectionBrowser";
import { collections } from "@/data/content";
import { Accordion } from "@/components/ui/Accordion";
import { Suspense } from "react";

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug) ?? collections[0];
  const type = collection.slug === "black-tea" ? "Black Tea" : collection.slug === "green-tea" ? "Green Tea" : collection.slug === "herbal" ? "Herbal" : collection.slug === "matcha" ? "Matcha" : undefined;
  return <main>
    <section className="collection-hero"><p className="breadcrumbs">Home / Tea / {collection.name}</p><h1>{collection.name}</h1><p>{collection.description} Selected from trusted gardens and packed for freshness.</p><div className="collection-values"><span><b>○</b>No strings attached</span><span><b>◇</b>Compostable sachets</span><span><b>✦</b>Whole ingredients</span></div></section>
    <div className="container"><Suspense fallback={<div className="collection-loading">Preparing the collection…</div>}><CollectionBrowser initialType={type}/></Suspense></div>
    <section className="collection-editorial container"><p className="eyebrow">KNOW YOUR LEAF</p><h2>What makes {collection.name.toLowerCase()} distinct?</h2><div className="editorial-columns"><p>{collection.name} is defined as much by craft as origin. Careful plucking, measured oxidation and patient drying allow each leaf to show its natural aroma, body and finish.</p><p>Start with water just off the boil, use one generous teaspoon per cup, and taste as the infusion develops. A little attention reveals an astonishing range.</p></div><div className="faq-list"><Accordion title={`How should I brew ${collection.name.toLowerCase()}?`}><p>Use fresh filtered water and steep for 3–5 minutes. Delicate green teas prefer cooler water; black and herbal teas welcome a fuller boil.</p></Accordion><Accordion title="How should I store tea?"><p>Keep tea sealed away from light, heat, moisture and strong aromas. Our tins are designed to protect leaves between cups.</p></Accordion><Accordion title="Which format should I choose?"><p>Sachets offer ease and consistency. Loose leaf offers room for the leaf to open and lets you adjust each infusion to taste.</p></Accordion></div></section>
  </main>;
}
