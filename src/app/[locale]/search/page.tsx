import { SearchPageContent } from "@/components/editorial/SearchPageContent";
import { resolveLocale } from "@/lib/i18n-server";
import { Suspense } from "react";

export default async function SearchPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  return <Suspense><SearchPageContent locale={locale}/></Suspense>;
}
