"use client";

import { Product } from "@/data/products";
import { useState } from "react";
import { Accordion } from "../ui/Accordion";

const tabs = ["WHAT'S INSIDE", "DETAILS", "HOW TO BREW", "INGREDIENTS", "REVIEWS"];
export function ProductDetails({ product }: { product: Product }) {
  const [active, setActive] = useState(tabs[0]);
  return <section className="product-details container">
    <div className="detail-tabs" role="tablist">{tabs.map((tab) => <button role="tab" aria-selected={active === tab} onClick={() => setActive(tab)} key={tab}>{tab}</button>)}</div>
    <div className="detail-tab-content">
      {active === "WHAT'S INSIDE" && <div className="inside-content"><div><p className="eyebrow">A CUP WITH CHARACTER</p><h2>{product.subtitle}</h2><p>{product.ingredients} Each ingredient is cut and blended to release at the same pace, producing a cup with a clear beginning, middle and finish.</p></div><div className="ingredient-orbit"><span>{product.imagery.split(" · ")[0]}</span><b>{product.initials}</b><span>{product.imagery.split(" · ")[1]}</span></div></div>}
      {active === "DETAILS" && <dl className="detail-specs"><div><dt>Tea Type</dt><dd>{product.type}</dd></div><div><dt>Caffeine</dt><dd>{product.caffeine}</dd></div><div><dt>Calories</dt><dd>0 per cup</dd></div><div><dt>Origin</dt><dd>{product.origin}</dd></div><div><dt>Certification</dt><dd>{product.certification}</dd></div><div><dt>Storage</dt><dd>Keep cool and dry</dd></div></dl>}
      {active === "HOW TO BREW" && <div className="brew-steps">{[{ n: "01", t: "HEAT", d: product.type === "Green Tea" ? "175°F / 80°C" : "205°F / 96°C" }, { n: "02", t: "MEASURE", d: "1 sachet or 1 tsp" }, { n: "03", t: "STEEP", d: "3–5 minutes" }, { n: "04", t: "SERVE", d: "6–8 fl oz" }].map((step) => <div key={step.n}><span>{step.n}</span><div className={`brew-icon brew-icon--${step.n}`}/><b>{step.t}</b><p>{step.d}</p></div>)}</div>}
      {active === "INGREDIENTS" && <div className="text-detail"><p className="eyebrow">INGREDIENTS</p><h2>Nothing to hide.</h2><p>{product.ingredients}</p><small>Blended and packed in a facility that also handles tree nuts.</small></div>}
      {active === "REVIEWS" && <div className="reviews-panel" id="reviews"><strong>{product.rating}</strong><div><span>★★★★★</span><h2>Nearly perfect, cup after cup.</h2><p>Based on {product.reviews} verified customer reviews.</p></div></div>}
    </div>
    <div className="mobile-product-accordions">{tabs.slice(0, 4).map((tab) => <Accordion title={tab} key={tab}><p>{tab === "INGREDIENTS" ? product.ingredients : tab === "HOW TO BREW" ? "Heat fresh filtered water, steep for 3–5 minutes, then serve as you like it." : `${product.subtitle} ${product.ingredients}`}</p></Accordion>)}</div>
  </section>;
}
