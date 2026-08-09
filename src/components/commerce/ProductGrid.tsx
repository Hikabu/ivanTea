import { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products, className = "" }: { products: Product[]; className?: string }) {
  return <div className={`product-grid ${className}`}>{products.map((product) => <ProductCard product={product} key={product.slug}/>)}</div>;
}
