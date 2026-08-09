import { ProductGallery } from "@/components/commerce/ProductGallery";
import { ProductPurchase } from "@/components/commerce/ProductPurchase";
import { ProductDetails } from "@/components/commerce/ProductDetails";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { StickyAdd } from "@/components/commerce/StickyAdd";
import { getProduct, products } from "@/data/products";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 4);
  return <main className="product-page">
    <div className="breadcrumbs container">Home / {product.type} / {product.name}</div>
    <section className="pdp-layout container"><ProductGallery product={product}/><ProductPurchase product={product}/></section>
    <ProductDetails product={product}/>
    <section className="section related container"><div className="section-head"><div><p className="eyebrow">CONTINUE YOUR EXPLORATION</p><h2>You may also like</h2></div></div><ProductGrid products={related}/></section>
    <StickyAdd product={product}/>
  </main>;
}
