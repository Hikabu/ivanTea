import { CSSProperties } from "react";
import { Product, productText } from "@/data/products";
import { Locale } from "@/lib/i18n";

export function ProductVisual({ product, scene = false, className = "", locale = "en" }: { product: Product; scene?: boolean; className?: string; locale?: Locale }) {
  const copy = productText(product, locale);
  return <div className={`product-visual ${scene ? "product-visual--scene" : ""} ${className}`} style={{ "--tin": product.color, "--accent": product.accent } as CSSProperties} role="img" aria-label={`${copy.name}, ${copy.imagery}`}>
    <svg className="botanical-stem" viewBox="0 0 120 300" aria-hidden="true"><path d="M70 300C72 230 61 169 76 93C81 67 85 39 82 5M72 241C45 228 35 209 34 188M70 212C91 195 102 178 104 155M73 165C50 150 43 134 43 117M77 121C96 104 102 86 101 68"/><path d="M80 82c-19-9-18-27 1-34 17 9 16 25-1 34Zm3-38c-17-8-15-24 2-31 15 8 14 23-2 31Z"/></svg>
    <div className="tea-pack"><div className="tea-pack__top"/><div className="tea-pack__label"><span>IVAN—TEA</span><small>{locale === "ru" ? "СОБРАНО В МАРИЙ ЭЛ" : "GATHERED IN MARI EL"}</small><i>{product.initials}</i><b>{copy.name}</b><em>{copy.imagery.split(" · ")[0]}</em><small>50 G · LOOSE LEAF</small></div></div>
  </div>;
}
