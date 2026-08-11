import { CategorySection, FeatureCampaign, Hero, JournalSection, MembershipSection, PressSection, ProductDiscovery, TestimonialSection, TrustStrip } from "@/components/editorial/HomeSections";
import { resolveLocale } from "@/lib/i18n-server";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  return <main><Hero locale={locale}/><TrustStrip locale={locale}/><section className="brand-statement container"><p>{locale === "ru" ? "Мы делаем только иван-чай — чтобы глубже знать растение, место и каждую партию." : "We make only Ivan Tea—so we can know the plant, the place and every batch more deeply."}</p><span>{locale === "ru" ? "СОБРАН ВРУЧНУЮ. ИЗ МАРИЙ ЭЛ." : "HAND COLLECTED. FROM MARI EL."}</span></section><ProductDiscovery locale={locale}/><CategorySection locale={locale}/><FeatureCampaign locale={locale}/><TestimonialSection locale={locale}/><JournalSection locale={locale}/><MembershipSection locale={locale}/><PressSection locale={locale}/></main>;
}
