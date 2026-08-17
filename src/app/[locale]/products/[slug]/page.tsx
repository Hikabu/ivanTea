import { ProductGallery } from "@/components/commerce/ProductGallery";
import { ProductPurchase } from "@/components/commerce/ProductPurchase";
import { ProductDetails } from "@/components/commerce/ProductDetails";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { StickyAdd } from "@/components/commerce/StickyAdd";
import { getProduct, productText, products } from "@/data/products";
import { resolveLocale } from "@/lib/i18n-server";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export default async function ProductPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const locale = await resolveLocale(params); const { slug } = await params; const product = getProduct(slug); const copy = productText(product, locale); const related = products.filter((item) => item.slug !== product.slug).slice(0, 4);
  return <main className="product-page"><div className="breadcrumbs">{locale === "ru" ? `Чаи / ${copy.name}` : `Teas / ${copy.name}`}</div><section className="pdp-layout"><ProductGallery product={product} locale={locale}/><ProductPurchase product={product} locale={locale}/></section><ProductDetails product={product} locale={locale}/><section className="related"><header><span>{locale === "ru" ? "ПРОДОЛЖИТЬ" : "CONTINUE"}</span><h2>{locale === "ru" ? "Другие поля" : "Other fields"}</h2></header><ProductGrid products={related} locale={locale}/></section><StickyAdd product={product} locale={locale}/></main>;
}
