import Image from "next/image";
import { Product } from "@/data/products";
import { Locale } from "@/lib/i18n";
import { ProductVisual } from "./ProductVisual";

export function ProductGallery({ product, locale = "en" }: { product: Product; locale?: Locale }) {
  return <div className="pdp-gallery" style={{ "--product-bg": product.accent } as React.CSSProperties}><ProductVisual product={product} locale={locale}/><span>{locale === "ru" ? "50 г · листовой чай" : "50 g · loose leaf"}</span><div className="pdp-gallery__detail"><Image src="/images/fedorov/product-still-life.png" alt="" fill sizes="(max-width: 800px) 45vw, 20vw"/></div></div>;
}
