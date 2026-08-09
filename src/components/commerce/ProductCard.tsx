"use client";

import Link from "next/link";
import { Product } from "@/data/products";
import { money } from "@/lib/format";
import { ProductVisual } from "./ProductVisual";
import { useStore } from "../layout/StoreProvider";
import { Icon } from "../ui/Icon";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useStore();
  return <article className="product-card">
    <div className="product-card-image">
      {product.badge && <span className="badge">{product.badge}</span>}
      <button className="wishlist" aria-label={`Add ${product.name} to wishlist`}><Icon name="heart" size={18}/></button>
      <Link href={`/products/${product.slug}`}><ProductVisual product={product}/></Link>
      <button className="quick-add" onClick={() => addToCart(product)}>QUICK ADD <span>{money(product.price)}</span></button>
    </div>
    <div className="product-card-copy">
      <Link href={`/products/${product.slug}`}><h3>{product.name}</h3></Link>
      <p>{product.type} · {product.imagery.split(" · ").slice(0, 2).join(" + ")}</p>
      <div className="rating" aria-label={`${product.rating} out of 5 stars, ${product.reviews} reviews`}><span>★★★★★</span><small>{product.rating} ({product.reviews})</small></div>
      <strong>From {money(product.price)}</strong>
    </div>
  </article>;
}
