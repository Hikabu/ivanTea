"use client";

import { Product } from "@/data/products";
import { money } from "@/lib/format";
import { useState } from "react";
import { useStore } from "../layout/StoreProvider";
import { QuantitySelector } from "./QuantitySelector";
import { Icon } from "../ui/Icon";

export function ProductPurchase({ product }: { product: Product }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [quantity, setQuantity] = useState(1);
  const [subscribe, setSubscribe] = useState(false);
  const { addToCart } = useStore();
  const variant = product.variants.find((item) => item.id === variantId) ?? product.variants[0];
  const total = variant.price * quantity * (subscribe ? .9 : 1);
  return <div className="purchase-panel">
    {product.badge && <span className="badge badge--static">{product.badge}</span>}
    <h1>{product.name}</h1><p className="product-lede">{product.subtitle}</p>
    <a href="#reviews" className="product-rating"><span>★★★★★</span><b>{product.rating}</b><u>{product.reviews} reviews</u></a>
    <dl className="metadata"><div><dt>Tea Type</dt><dd>{product.type}</dd></div><div><dt>Caffeine</dt><dd>{product.caffeine}</dd></div><div><dt>Calories</dt><dd>0</dd></div><div><dt>Origin</dt><dd>{product.origin}</dd></div></dl>
    <div className="option-heading"><span>SELECT FORMAT</span><small>Price varies by format</small></div>
    <div className="variant-grid">{product.variants.map((item) => <button aria-pressed={variantId === item.id} className={variantId === item.id ? "is-selected" : ""} key={item.id} onClick={() => setVariantId(item.id)}><b>{item.label}</b><small>{item.detail}</small><span>{money(item.price)}</span></button>)}</div>
    <div className="purchase-type"><label className={!subscribe ? "is-selected" : ""}><input type="radio" name="purchase" checked={!subscribe} onChange={() => setSubscribe(false)}/><span><b>One-time purchase</b><small>{money(variant.price)}</small></span></label><label className={subscribe ? "is-selected" : ""}><input type="radio" name="purchase" checked={subscribe} onChange={() => setSubscribe(true)}/><span><b>Subscribe &amp; save 10%</b><small>Pause or skip anytime · {money(variant.price * .9)}</small></span></label></div>
    <div className="add-row"><QuantitySelector value={quantity} onChange={setQuantity}/><button className="add-to-cart" onClick={() => addToCart(product, variantId, quantity)}>ADD TO CART <span>— {money(total)}</span></button></div>
    <button className="wishlist-text"><Icon name="heart" size={17}/> Add to Wishlist</button>
    <div className="stock-line"><i/> In stock and ready to steep <span>·</span> Ships in 1–2 days</div>
    <div className="purchase-notes"><span>FREE SHIPPING $65+</span><span>30-DAY HAPPINESS PROMISE</span></div>
  </div>;
}
