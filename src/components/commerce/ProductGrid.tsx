import { Product } from "@/data/products";
import { Locale } from "@/lib/i18n";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products, className = "", locale = "en" }: { products: Product[]; className?: string; locale?: Locale }) {
  return <div className={`product-grid ${className}`}>{products.map((product) => <ProductCard product={product} locale={locale} key={product.slug}/>)}</div>;
}
