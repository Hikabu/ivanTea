"use client";

import { Product, productText } from "@/data/products";
import { money } from "@/lib/format";
import { Locale, localizedHref, ui } from "@/lib/i18n";
import Link from "next/link";
import { useState } from "react";
import { useStore } from "../layout/StoreProvider";
import { QuantitySelector } from "./QuantitySelector";
import { Icon } from "../ui/Icon";

export function ProductPurchase({ product, locale = "en" }: { product: Product; locale?: Locale }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [quantity, setQuantity] = useState(1);
  const [subscribe, setSubscribe] = useState(false);
  const { addToCart } = useStore();
  const copy = productText(product, locale);
  const variant = copy.variants.find((item) => item.id === variantId) ?? copy.variants[0];
  const total = variant.price * quantity * (subscribe ? .9 : 1);
  return <div className="purchase-panel">
    {copy.badge && <span className="badge badge--static">{copy.badge}</span>}
    <h1>{copy.name}</h1><p className="product-lede">{copy.subtitle}</p>
    <a href="#reviews" className="product-rating"><span>★★★★★</span><b>{product.rating}</b><u>{product.reviews} {ui[locale].reviews}</u></a>
    <dl className="metadata"><div><dt>{locale === "ru" ? "Тип" : "Tea type"}</dt><dd>{copy.type}</dd></div><div><dt>{locale === "ru" ? "Кофеин" : "Caffeine"}</dt><dd>{copy.caffeine}</dd></div><div><dt>{locale === "ru" ? "Вес" : "Net weight"}</dt><dd>50 g</dd></div><div><dt>{locale === "ru" ? "Происхождение" : "Origin"}</dt><dd>{copy.origin}</dd></div></dl>
    <div className="option-heading"><span>{locale === "ru" ? "ВЫБЕРИТЕ ФОРМАТ" : "SELECT FORMAT"}</span><small>{locale === "ru" ? "Цена зависит от формата" : "Price varies by format"}</small></div>
    <div className="variant-grid">{copy.variants.map((item) => <button aria-pressed={variantId === item.id} className={variantId === item.id ? "is-selected" : ""} key={item.id} onClick={() => setVariantId(item.id)}><b>{item.label}</b><small>{item.detail}</small><span>{money(item.price, locale)}</span></button>)}</div>
    <div className="purchase-type"><label className={!subscribe ? "is-selected" : ""}><input type="radio" name="purchase" checked={!subscribe} onChange={() => setSubscribe(false)}/><span><b>{locale === "ru" ? "Разовая покупка" : "One-time purchase"}</b><small>{money(variant.price, locale)}</small></span></label><label className={subscribe ? "is-selected" : ""}><input type="radio" name="purchase" checked={subscribe} onChange={() => setSubscribe(true)}/><span><b>{locale === "ru" ? "Подписка со скидкой 10%" : "Subscribe & save 10%"}</b><small>{locale === "ru" ? "Можно пропустить или отменить" : "Pause or skip anytime"} · {money(variant.price * .9, locale)}</small></span></label></div>
    <div className="add-row"><QuantitySelector value={quantity} onChange={setQuantity} locale={locale}/><button className="add-to-cart" onClick={() => addToCart(product, variantId, quantity)}>{ui[locale].addToCart.toUpperCase()} <span>— {money(total, locale)}</span></button></div>
    <button className="wishlist-text"><Icon name="heart" size={17}/> {locale === "ru" ? "Добавить в избранное" : "Add to wishlist"}</button>
    <div className="stock-line"><i/> {locale === "ru" ? "В наличии · отправка в течение 1–2 дней" : "In stock · dispatches in 1–2 days"}</div>
    <div className="purchase-notes"><span>{locale === "ru" ? "ДОСТАВКА ПО ВСЕМУ МИРУ" : "WORLDWIDE DELIVERY"}</span><Link href={localizedHref(locale, "/wholesale")}>{locale === "ru" ? "НУЖЕН ОПТ?" : "NEED BULK?"}</Link></div>
  </div>;
}
