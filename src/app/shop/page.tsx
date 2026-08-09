import { CollectionBrowser } from "@/components/commerce/CollectionBrowser";
import { Suspense } from "react";

export default function ShopPage() {
  return <main><section className="collection-hero shop-hero"><p className="breadcrumbs">Home / Shop</p><h1>All Tea</h1><p>Explore the full tea room—from brisk breakfast leaves to quiet evening botanicals.</p></section><div className="container"><Suspense fallback={<div className="collection-loading">Preparing the tea room…</div>}><CollectionBrowser/></Suspense></div></main>;
}
