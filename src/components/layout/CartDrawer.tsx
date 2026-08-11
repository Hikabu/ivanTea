"use client";

import Link from "next/link";
import { productText, products } from "@/data/products";
import { money } from "@/lib/format";
import { useStore } from "./StoreProvider";
import { Modal } from "../ui/Modal";
import { Icon } from "../ui/Icon";
import { Locale, localizedHref } from "@/lib/i18n";

export function CartDrawer({ locale }: { locale: Locale }) {
  const { cart, count, cartOpen, setCartOpen, updateQuantity, removeLine, addToCart } = useStore();
  const subtotal = cart.reduce((sum, line) => { const variant = line.product.variants.find((item) => item.id === line.variantId) ?? line.product.variants[0]; return sum + variant.price * line.quantity; }, 0);
  const remaining = Math.max(0, 65 - subtotal);
  const recommendation = products.find((product) => !cart.some((line) => line.product.slug === product.slug)) ?? products[2];
  const recommendationCopy = productText(recommendation, locale);
  const text = locale === "ru" ? {
    title: `Корзина (${count})`, away: "до бесплатной международной доставки", earned: "Бесплатная международная доставка", empty: "Ваша полка ждёт иван-чай.", explore: "Выбрать иван-чай", extra: "ДОБАВИТЬ К ЗАКАЗУ", add: "ДОБАВИТЬ", remove: "Удалить", subtotal: "Сумма", note: "Налоги и стоимость доставки рассчитываются при оформлении.", checkout: "ОФОРМИТЬ ЗАКАЗ", view: "Открыть корзину",
  } : {
    title: `Your cart (${count})`, away: "away from complimentary worldwide delivery", earned: "You have earned complimentary worldwide delivery", empty: "Your shelf is waiting for Ivan Tea.", explore: "Explore Ivan Tea", extra: "A SMALL SOMETHING EXTRA", add: "ADD", remove: "Remove", subtotal: "Subtotal", note: "Taxes and delivery are calculated at checkout.", checkout: "CHECKOUT", view: "View cart",
  };
  return <Modal open={cartOpen} onClose={() => setCartOpen(false)} title={text.title} side="right"><div className="cart-drawer">
    <div className="shipping-meter"><p>{remaining ? <><b>{money(remaining, locale)}</b> {text.away}</> : <b>{text.earned}</b>}</p><div><i style={{ width: `${Math.min(100, subtotal / 65 * 100)}%` }}/></div></div>
    <div className="cart-lines">{!cart.length && <div className="empty-cart"><p>{text.empty}</p><Link className="button button--primary" href={localizedHref(locale, "/shop")} onClick={() => setCartOpen(false)}>{text.explore}</Link></div>}{cart.map((line) => { const copy = productText(line.product, locale); const variant = copy.variants.find((item) => item.id === line.variantId) ?? copy.variants[0]; return <article className="cart-line" key={`${line.product.slug}-${line.variantId}`}><div className="cart-product-image" style={{ "--tin": line.product.color, "--accent": line.product.accent } as React.CSSProperties}><span>{line.product.initials}</span></div><div><h3>{copy.name}</h3><p>{variant.label} · {variant.detail}</p><div className="cart-line-bottom"><div className="mini-quantity"><button aria-label="Decrease quantity" onClick={() => updateQuantity(line.product.slug, line.variantId, line.quantity - 1)}><Icon name="minus" size={15}/></button><span>{line.quantity}</span><button aria-label="Increase quantity" onClick={() => updateQuantity(line.product.slug, line.variantId, line.quantity + 1)}><Icon name="plus" size={15}/></button></div><b>{money(variant.price * line.quantity, locale)}</b></div><button className="remove-link" onClick={() => removeLine(line.product.slug, line.variantId)}>{text.remove}</button></div></article>; })}</div>
    {!!cart.length && <div className="cart-recommendation"><p>{text.extra}</p><div><span className="mini-tin" style={{ "--tin": recommendation.color, "--accent": recommendation.accent } as React.CSSProperties}>{recommendation.initials}</span><span><b>{recommendationCopy.name}</b><small>{recommendationCopy.variants[0].detail} · {money(recommendation.price, locale)}</small></span><button onClick={() => addToCart(recommendation)}>{text.add}</button></div></div>}
    <div className="cart-summary"><div><span>{text.subtotal}</span><strong>{money(subtotal, locale)}</strong></div><p>{text.note}</p><Link className={`button button--primary ${!cart.length ? "is-disabled" : ""}`} href={localizedHref(locale, "/cart")} onClick={() => setCartOpen(false)}>{text.checkout}</Link><Link href={localizedHref(locale, "/cart")} onClick={() => setCartOpen(false)}>{text.view}</Link></div>
  </div></Modal>;
}
