import { Product } from "@/data/products";
import { Locale } from "@/lib/i18n";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products, locale = "en" }: { products: Product[]; locale?: Locale }) {
  return <div className="product-grid">{products.map((product) => <ProductCard product={product} locale={locale} key={product.slug}/>)}</div>;
}
