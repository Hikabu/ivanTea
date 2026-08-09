"use client";

import { Product } from "@/data/products";
import { useState } from "react";
import { Modal } from "../ui/Modal";
import { ProductVisual } from "./ProductVisual";

const views = ["FRONT", "INGREDIENTS", "BREWED", "DETAIL"];
export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  return <div className="gallery-wrap">
    <div className={`product-gallery-main view-${active}`} onClick={() => setZoom(true)}><ProductVisual product={product} scene={active > 0}/><button className="zoom-button">＋ ZOOM</button></div>
    <div className="gallery-thumbs">{views.map((view, index) => <button className={active === index ? "is-active" : ""} onClick={() => setActive(index)} key={view}><ProductVisual product={product}/><span>{view}</span></button>)}</div>
    <Modal open={zoom} onClose={() => setZoom(false)} title={`${product.name} detail`}><div className="zoomed-product"><ProductVisual product={product} scene/></div></Modal>
  </div>;
}
