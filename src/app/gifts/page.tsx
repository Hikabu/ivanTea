import Image from "next/image";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { Button } from "@/components/ui/Button";

export default function GiftsPage() {
  return <main className="gifts-page"><section className="gifts-hero"><div><Image src="/images/gifts-campaign.jpg" alt="A considered tea gift set on linen" fill priority sizes="60vw"/></div><article><p className="eyebrow">GIFTS FOR EVERY TABLE</p><h1>Something warm<br/>to pass along.</h1><p>Thoughtful tea collections, useful wares and handwritten notes—packed beautifully and ready to give.</p><Button href="#gift-collection">Explore gifts</Button></article></section><section className="gift-intents container"><div><span>01</span><h2>For the curious</h2><p>Tasting flights and discovery sets.</p></div><div><span>02</span><h2>For the daily drinker</h2><p>Generous tins and useful infusers.</p></div><div><span>03</span><h2>For the host</h2><p>Table-ready tea and serving pieces.</p></div><div><span>04</span><h2>For the hard to choose</h2><p>A gift note they can redeem.</p></div></section><section className="section container" id="gift-collection"><div className="section-head"><div><p className="eyebrow">THE GIFT EDIT</p><h2>Chosen for giving</h2></div></div><ProductGrid products={products.slice(0, 4)}/></section></main>;
}
