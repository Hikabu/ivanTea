import Image from "next/image";
import { Product, productText } from "@/data/products";
import { Locale } from "@/lib/i18n";
import { CSSProperties } from "react";

const productScenes: Record<string, string> = {
  "pure-ivan-tea": "/images/fedorov/cold-ivan-tea.png",
  "ivan-tea-apple-lingonberry": "/images/fedorov/teaTime.png",
  "ivan-tea-wild-berry": "/images/fedorov/product-still-life.png",
  "ivan-tea-mari-meadow": "/images/fedorov/mari-el-landscape.png",
  "ivan-tea-sea-buckthorn-rowan": "/images/fedorov/alder-hearth-hero.png",
  "ivan-tea-alder-hearth": "/images/fedorov/teaTime.png",
};

export function ProductVisual({ product, scene = false, className = "", locale = "en" }: { product: Product; scene?: boolean; className?: string; locale?: Locale }) {
  const copy = productText(product, locale);
  const preparedImage = productScenes[product.slug] ?? "/images/fedorov/teaTime.png";
  return <div className={`product-visual ${scene ? "product-visual--scene" : ""} ${className}`} style={{ "--tin": product.color, "--accent": product.accent } as CSSProperties} role="img" aria-label={`${copy.name}, ${copy.imagery}`}>
    <Image className="product-visual-photo product-visual-photo--primary" src="/images/fedorov/product-still-life.png" alt="" fill sizes="(max-width: 700px) 90vw, 25vw" />
    <Image className="product-visual-photo product-visual-photo--prepared" src={preparedImage} alt="" fill sizes="(max-width: 700px) 90vw, 25vw" />
    <div className="product-visual-tint" />
    <div className="visual-leaf visual-leaf--one"/><div className="visual-leaf visual-leaf--two"/>
    {scene && <><div className="visual-cup"><i/></div><div className="loose-leaf"/></>}
    <div className="tea-tin"><div className="tin-lid"/><div className="tin-label"><span>GAROF</span><small>{locale === "ru" ? "СОБРАНО · МАРИЙ ЭЛ" : "GATHERED · MARI EL"}</small><b>{product.initials}</b><em>{copy.name}</em><small>{locale === "ru" ? "ЧАЙ · 50 Г" : "TEA · 50 G"}</small></div><div className="tin-info-panel"><i/><i/><i/><span>{locale === "ru" ? "Состав · хранение · срок годности" : "Ingredients · storage · best before"}</span></div></div>
  </div>;
}
