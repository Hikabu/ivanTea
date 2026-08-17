import { HomeLanding } from "@/components/editorial/HomeSections";
import { resolveLocale } from "@/lib/i18n-server";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  return <HomeLanding locale={locale}/>;
}
