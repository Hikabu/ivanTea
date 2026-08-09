import { CategorySection, FeatureCampaign, Hero, JournalSection, MembershipSection, PressSection, ProductDiscovery, TestimonialSection, TrustStrip } from "@/components/editorial/HomeSections";

export default function HomePage() {
  return <main>
    <Hero />
    <TrustStrip />
    <section className="brand-statement container"><p>We source exceptional leaves and botanicals, then blend them with a patient hand—for tea that feels at home in the everyday.</p><span>SELECTED WELL. BLENDED SLOWLY. SHARED OFTEN.</span></section>
    <ProductDiscovery />
    <CategorySection />
    <FeatureCampaign />
    <TestimonialSection />
    <JournalSection />
    <MembershipSection />
    <PressSection />
  </main>;
}
