import { Product, productText } from "@/data/products";
import { Locale } from "@/lib/i18n";
import { CSSProperties } from "react";

export function ProductVisual({ product, scene = false, className = "", locale = "en" }: { product: Product; scene?: boolean; className?: string; locale?: Locale }) {
  const copy = productText(product, locale);
  return <div className={`product-visual ${scene ? "product-visual--scene" : ""} ${className}`} style={{ "--tin": product.color, "--accent": product.accent } as CSSProperties} role="img" aria-label={`${copy.name}, ${copy.imagery}`}>
    <div className="visual-leaf visual-leaf--one"/><div className="visual-leaf visual-leaf--two"/>
    {scene && <><div className="visual-cup"><i/></div><div className="loose-leaf"/></>}
    <div className="tea-tin"><div className="tin-lid"/><div className="tin-label"><span>FEDOROV TEA</span><small>{locale === "ru" ? "СОБРАН ВРУЧНУЮ · МАРИЙ ЭЛ" : "HAND COLLECTED · MARI EL"}</small><b>{product.initials}</b><em>{copy.name}</em><small>{locale === "ru" ? "ИВАН-ЧАЙ · 50 Г" : "IVAN TEA · 50 G"}</small></div><div className="tin-info-panel"><i/><i/><i/><span>{locale === "ru" ? "Состав · хранение · срок годности" : "Ingredients · storage · best before"}</span></div></div>
  </div>;
}
