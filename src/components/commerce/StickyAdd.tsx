"use client";

import { Product } from "@/data/products";
import { money } from "@/lib/format";
import { useStore } from "../layout/StoreProvider";

export function StickyAdd({ product }: { product: Product }) {
  const { addToCart } = useStore();
  return <div className="sticky-mobile-add"><span><b>{product.name}</b><small>{money(product.price)}</small></span><button onClick={() => addToCart(product)}>ADD TO CART</button></div>;
}
