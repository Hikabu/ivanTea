import { Product } from "@/data/products";
import { CSSProperties } from "react";

export function ProductVisual({ product, scene = false, className = "" }: { product: Product; scene?: boolean; className?: string }) {
  return <div className={`product-visual ${scene ? "product-visual--scene" : ""} ${className}`} style={{ "--tin": product.color, "--accent": product.accent } as CSSProperties} role="img" aria-label={`${product.name} tea tin with ${product.imagery}`}>
    <div className="visual-leaf visual-leaf--one"/><div className="visual-leaf visual-leaf--two"/>
    {scene && <><div className="visual-cup"><i/></div><div className="loose-leaf"/></>}
    <div className="tea-tin"><div className="tin-lid"/><div className="tin-label"><span>ALDER &amp; HEARTH</span><b>{product.initials}</b><em>{product.name}</em><small>BOTANICAL TEA</small></div></div>
  </div>;
}
