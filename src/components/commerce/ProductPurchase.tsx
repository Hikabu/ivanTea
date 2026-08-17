"use client";
import { useState } from "react";
import { Product, productText } from "@/data/products";
import { money } from "@/lib/format";
import { Locale } from "@/lib/i18n";
import { useStore } from "@/components/layout/StoreProvider";
import { QuantitySelector } from "./QuantitySelector";

export function ProductPurchase({ product, locale = "en" }: { product: Product; locale?: Locale }) {
  const copy = productText(product, locale); const [variantId, setVariantId] = useState(product.variants[0].id); const [quantity, setQuantity] = useState(1); const { addToCart } = useStore(); const variant = copy.variants.find(v => v.id === variantId) ?? copy.variants[0];
  return <div className="purchase-panel"><div className="purchase-index"><span>{product.initials} / 04</span><span>{copy.type}</span></div><h1>{copy.name}</h1><p className="product-lede">{copy.subtitle}</p><div className="purchase-price">{money(variant.price, locale)}</div><dl className="purchase-facts"><div><dt>{locale === "ru" ? "Внутри" : "Inside"}</dt><dd>{copy.ingredients}</dd></div><div><dt>{locale === "ru" ? "Откуда" : "Origin"}</dt><dd>{copy.origin}</dd></div><div><dt>{locale === "ru" ? "Кофеин" : "Caffeine"}</dt><dd>{copy.caffeine}</dd></div></dl><div className="format-picker"><span>{locale === "ru" ? "Формат" : "Format"}</span>{copy.variants.map(item => <button key={item.id} className={item.id === variantId ? "is-selected" : ""} onClick={() => setVariantId(item.id)}><span>{item.label}<small>{item.detail}</small></span><b>{money(item.price, locale)}</b></button>)}</div><div className="add-row"><QuantitySelector value={quantity} onChange={setQuantity} locale={locale}/><button className="add-to-cart" onClick={() => addToCart(product, variantId, quantity)}>{locale === "ru" ? "Добавить в корзину" : "Add to bag"}<span>{money(variant.price * quantity, locale)}</span></button></div><p className="purchase-shipping">{locale === "ru" ? "В наличии · отправка за 1–2 дня · условия доставки" : "In stock · dispatches in 1–2 days · shipping details"}</p></div>;
}
