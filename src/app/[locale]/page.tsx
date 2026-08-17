import { Hero, MariElClosing, OriginChapters, TeaCollection } from "@/components/editorial/HomeSections";
import { resolveLocale } from "@/lib/i18n-server";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  return <main><Hero locale={locale}/><OriginChapters locale={locale}/><TeaCollection locale={locale}/><MariElClosing locale={locale}/></main>;
}
