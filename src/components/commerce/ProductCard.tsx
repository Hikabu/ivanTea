"use client";

import Link from "next/link";
import { Product, productText } from "@/data/products";
import { money } from "@/lib/format";
import { Locale, localizedHref, ui } from "@/lib/i18n";
import { ProductVisual } from "./ProductVisual";
import { useStore } from "../layout/StoreProvider";
import { Icon } from "../ui/Icon";

export function ProductCard({ product, locale = "en" }: { product: Product; locale?: Locale }) {
  const { addToCart } = useStore();
  const copy = productText(product, locale);
  const labels = ui[locale];
  return <article className="product-card">
    <div className="product-card-image">
      {copy.badge && <span className="badge">{copy.badge}</span>}
      <button className="wishlist" aria-label={locale === "ru" ? `Добавить ${copy.name} в избранное` : `Add ${copy.name} to wishlist`}><Icon name="heart" size={18}/></button>
      <Link href={localizedHref(locale, `/products/${product.slug}`)}><ProductVisual product={product} locale={locale}/></Link>
      <button className="quick-add" onClick={() => addToCart(product)}>{labels.quickAdd} <span>{money(product.price, locale)}</span></button>
    </div>
    <div className="product-card-copy">
      <Link href={localizedHref(locale, `/products/${product.slug}`)}><h3>{copy.name}</h3></Link>
      <p>{copy.type} · {copy.imagery.split(" · ").slice(0, 2).join(" + ")}</p>
      <div className="rating" aria-label={`${product.rating} out of 5 stars, ${product.reviews} reviews`}><span>★★★★★</span><small>{product.rating} ({product.reviews})</small></div>
      <strong>{labels.from} {money(product.price, locale)}</strong>
    </div>
  </article>;
}
