"use client";

import { useStore } from "@/components/layout/StoreProvider";
import { money } from "@/lib/format";
import { Locale, localizedHref } from "@/lib/i18n";
import Link from "next/link";
import { ProductVisual } from "./ProductVisual";
import { QuantitySelector } from "./QuantitySelector";
import { productText } from "@/data/products";

export function CartPageContent({ locale }: { locale: Locale }) {
  const { cart, updateQuantity, removeLine } = useStore();
  const subtotal = cart.reduce((sum, line) => sum + (line.product.variants.find((item) => item.id === line.variantId)?.price ?? line.product.price) * line.quantity, 0);
  return <main className="simple-page cart-page container"><p className="eyebrow">{locale === "ru" ? "ВАШ ВЫБОР" : "YOUR SELECTION"}</p><h1>{locale === "ru" ? "Корзина" : "Shopping cart"}</h1>{!cart.length ? <div className="cart-page-empty"><h2>{locale === "ru" ? "Ваша чайная полка пуста." : "Your Ivan Tea shelf is empty."}</h2><p>{locale === "ru" ? "Выберите классический кипрей или вкус с натуральными добавками." : "Choose pure fireweed or a variety with natural additions."}</p><Link className="button button--primary" href={localizedHref(locale, "/shop")}>{locale === "ru" ? "ВЫБРАТЬ ИВАН-ЧАЙ" : "SHOP IVAN TEA"}</Link></div> : <div className="cart-page-layout"><div className="cart-page-lines">{cart.map((line) => { const copy = productText(line.product, locale); const variant = copy.variants.find((item) => item.id === line.variantId) ?? copy.variants[0]; return <article key={`${line.product.slug}-${line.variantId}`}><div className="cart-page-image"><ProductVisual product={line.product} locale={locale}/></div><div><h2>{copy.name}</h2><p>{variant.label} · {variant.detail}</p><button className="remove-link" onClick={() => removeLine(line.product.slug, line.variantId)}>{locale === "ru" ? "Удалить" : "Remove"}</button></div><QuantitySelector value={line.quantity} onChange={(value) => updateQuantity(line.product.slug, line.variantId, value)} locale={locale}/><strong>{money(variant.price * line.quantity, locale)}</strong></article>; })}</div><aside><div><span>{locale === "ru" ? "Сумма" : "Subtotal"}</span><strong>{money(subtotal, locale)}</strong></div><p>{locale === "ru" ? "Стоимость международной доставки, налоги и возможные импортные сборы рассчитываются при оформлении." : "Worldwide delivery, taxes and any applicable import charges are calculated at checkout."}</p><button className="button button--primary">{locale === "ru" ? "ПЕРЕЙТИ К ОФОРМЛЕНИЮ" : "PROCEED TO CHECKOUT"}</button><small>{locale === "ru" ? "БЕЗОПАСНАЯ ОПЛАТА · ОТСЛЕЖИВАЕМАЯ ДОСТАВКА" : "SECURE CHECKOUT · TRACKED DELIVERY"}</small></aside></div>}</main>;
}
