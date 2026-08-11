"use client";

import { Product, productText } from "@/data/products";
import { money } from "@/lib/format";
import { Locale, ui } from "@/lib/i18n";
import { useStore } from "../layout/StoreProvider";

export function StickyAdd({ product, locale = "en" }: { product: Product; locale?: Locale }) {
  const { addToCart } = useStore();
  const copy = productText(product, locale);
  return <div className="sticky-mobile-add"><span><b>{copy.name}</b><small>{money(product.price, locale)}</small></span><button onClick={() => addToCart(product)}>{ui[locale].addToCart.toUpperCase()}</button></div>;
}
