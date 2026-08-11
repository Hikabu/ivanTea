"use client";

import { Product } from "@/data/products";
import { Locale } from "@/lib/i18n";
import { useState } from "react";
import { Modal } from "../ui/Modal";
import { ProductVisual } from "./ProductVisual";

export function ProductGallery({ product, locale = "en" }: { product: Product; locale?: Locale }) {
  const views = locale === "ru" ? ["ВИД СПЕРЕДИ", "СОСТАВ", "НАСТОЙ", "ДЕТАЛИ"] : ["FRONT", "INGREDIENTS", "BREWED", "DETAIL"];
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  return <div className="gallery-wrap">
    <div className={`product-gallery-main view-${active}`} onClick={() => setZoom(true)}><ProductVisual product={product} scene={active > 0} locale={locale}/><button className="zoom-button">＋ {locale === "ru" ? "УВЕЛИЧИТЬ" : "ZOOM"}</button></div>
    <div className="gallery-thumbs">{views.map((view, index) => <button className={active === index ? "is-active" : ""} onClick={() => setActive(index)} key={view}><ProductVisual product={product} locale={locale}/><span>{view}</span></button>)}</div>
    <Modal open={zoom} onClose={() => setZoom(false)} title={locale === "ru" ? "Детали упаковки" : "Packaging detail"}><div className="zoomed-product"><ProductVisual product={product} scene locale={locale}/></div></Modal>
  </div>;
}
