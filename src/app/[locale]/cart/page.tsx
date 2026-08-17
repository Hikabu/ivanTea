import { CartPageContent } from "@/components/commerce/CartPageContent";
import { resolveLocale } from "@/lib/i18n-server";

export default async function CartPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  return <CartPageContent locale={locale}/>;
}
