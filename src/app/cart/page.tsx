"use client";

import { useStore } from "@/components/layout/StoreProvider";
import { money } from "@/lib/format";
import Link from "next/link";
import { ProductVisual } from "@/components/commerce/ProductVisual";
import { QuantitySelector } from "@/components/commerce/QuantitySelector";

export default function CartPage() {
  const { cart, updateQuantity, removeLine } = useStore();
  const subtotal = cart.reduce((sum, line) => sum + (line.product.variants.find((item) => item.id === line.variantId)?.price ?? line.product.price) * line.quantity, 0);
  return <main className="simple-page cart-page container"><p className="eyebrow">YOUR SELECTION</p><h1>Shopping cart</h1>{!cart.length ? <div className="cart-page-empty"><h2>Your tea shelf is empty.</h2><p>Explore our blends and find something for the hour ahead.</p><Link className="button button--primary" href="/shop">Shop all tea</Link></div> : <div className="cart-page-layout"><div className="cart-page-lines">{cart.map((line) => { const variant = line.product.variants.find((item) => item.id === line.variantId) ?? line.product.variants[0]; return <article key={`${line.product.slug}-${line.variantId}`}><div className="cart-page-image"><ProductVisual product={line.product}/></div><div><h2>{line.product.name}</h2><p>{variant.label} · {variant.detail}</p><button className="remove-link" onClick={() => removeLine(line.product.slug, line.variantId)}>Remove</button></div><QuantitySelector value={line.quantity} onChange={(value) => updateQuantity(line.product.slug, line.variantId, value)}/><strong>{money(variant.price * line.quantity)}</strong></article>; })}</div><aside><div><span>Subtotal</span><strong>{money(subtotal)}</strong></div><p>Complimentary shipping on orders $65+. Taxes calculated at checkout.</p><button className="button button--primary">PROCEED TO CHECKOUT</button><small>SECURE CHECKOUT · 30-DAY HAPPINESS PROMISE</small></aside></div>}</main>;
}
