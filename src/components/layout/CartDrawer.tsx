"use client";

import Link from "next/link";
import { products } from "@/data/products";
import { money } from "@/lib/format";
import { useStore } from "./StoreProvider";
import { Modal } from "../ui/Modal";
import { Icon } from "../ui/Icon";

export function CartDrawer() {
  const { cart, count, cartOpen, setCartOpen, updateQuantity, removeLine, addToCart } = useStore();
  const subtotal = cart.reduce((sum, line) => {
    const variant = line.product.variants.find((item) => item.id === line.variantId) ?? line.product.variants[0];
    return sum + variant.price * line.quantity;
  }, 0);
  const remaining = Math.max(0, 65 - subtotal);
  const recommendation = products.find((p) => !cart.some((line) => line.product.slug === p.slug)) ?? products[2];
  return <Modal open={cartOpen} onClose={() => setCartOpen(false)} title={`Your Cart (${count})`} side="right">
    <div className="cart-drawer">
      <div className="shipping-meter"><p>{remaining ? <><b>{money(remaining)}</b> away from complimentary shipping</> : <b>You&apos;ve earned complimentary shipping</b>}</p><div><i style={{ width: `${Math.min(100, subtotal / 65 * 100)}%` }}/></div></div>
      <div className="cart-lines">
        {!cart.length && <div className="empty-cart"><p>Your tea cupboard is waiting.</p><Link className="button button--primary" href="/shop" onClick={() => setCartOpen(false)}>Explore the collection</Link></div>}
        {cart.map((line) => {
          const variant = line.product.variants.find((item) => item.id === line.variantId) ?? line.product.variants[0];
          return <article className="cart-line" key={`${line.product.slug}-${line.variantId}`}>
            <div className="cart-product-image" style={{ "--tin": line.product.color, "--accent": line.product.accent } as React.CSSProperties}><span>{line.product.initials}</span></div>
            <div><h3>{line.product.name}</h3><p>{variant.label} · {variant.detail}</p><div className="cart-line-bottom"><div className="mini-quantity"><button aria-label="Decrease quantity" onClick={() => updateQuantity(line.product.slug, line.variantId, line.quantity - 1)}><Icon name="minus" size={15}/></button><span>{line.quantity}</span><button aria-label="Increase quantity" onClick={() => updateQuantity(line.product.slug, line.variantId, line.quantity + 1)}><Icon name="plus" size={15}/></button></div><b>{money(variant.price * line.quantity)}</b></div><button className="remove-link" onClick={() => removeLine(line.product.slug, line.variantId)}>Remove</button></div>
          </article>;
        })}
      </div>
      {!!cart.length && <div className="cart-recommendation"><p>A SMALL SOMETHING EXTRA</p><div><span className="mini-tin" style={{ "--tin": recommendation.color, "--accent": recommendation.accent } as React.CSSProperties}>{recommendation.initials}</span><span><b>{recommendation.name} Traveler</b><small>8 sachets · $7.00</small></span><button onClick={() => addToCart(recommendation, "traveler")}>ADD</button></div></div>}
      <div className="cart-summary"><div><span>Subtotal</span><strong>{money(subtotal)}</strong></div><p>Taxes and delivery calculated at checkout.</p><Link className={`button button--primary ${!cart.length ? "is-disabled" : ""}`} href="/cart" onClick={() => setCartOpen(false)}>CHECKOUT</Link><Link href="/cart" onClick={() => setCartOpen(false)}>View cart</Link></div>
    </div>
  </Modal>;
}
