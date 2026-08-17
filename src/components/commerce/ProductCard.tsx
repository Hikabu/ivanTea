"use client";
import Link from "next/link";
import { Product, productText } from "@/data/products";
import { money } from "@/lib/format";
import { Locale, localizedHref } from "@/lib/i18n";
import { ProductVisual } from "./ProductVisual";

export function ProductCard({ product, locale = "en" }: { product: Product; locale?: Locale }) {
  const copy = productText(product, locale);
  return <article className="product-card"><Link className="product-card__visual" href={localizedHref(locale, `/products/${product.slug}`)} style={{ "--product-bg": product.accent } as React.CSSProperties}><span>{product.initials}</span><ProductVisual product={product} locale={locale}/></Link><div className="product-card__copy"><span>{copy.type}</span><Link href={localizedHref(locale, `/products/${product.slug}`)}><h3>{copy.name}</h3></Link><p>{copy.ingredients}</p><div><strong>{money(product.price, locale)}</strong><Link href={localizedHref(locale, `/products/${product.slug}`)}>{locale === "ru" ? "Смотреть" : "View"} →</Link></div></div></article>;
}
