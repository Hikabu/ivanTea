import Image from "next/image";
import { Product, productText } from "@/data/products";
import { Locale } from "@/lib/i18n";

export function ProductVisual({ product, locale = "en" }: { product: Product; locale?: Locale }) {
  const copy = productText(product, locale);
  return <div className="product-visual">
    <Image src={product.image} alt={`${copy.name}: ${copy.ingredients}`} fill sizes="(max-width: 900px) 86vw, 50vw" />
  </div>;
}
