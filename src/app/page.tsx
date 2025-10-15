import { AuthoritySection } from '@/components/sections/authority-section';
import { FaqSection } from '@/components/sections/faq-section';
import { FinalCtaSection } from '@/components/sections/final-cta-section';
import { Footer } from '@/components/sections/footer';
import { GuaranteeSection } from '@/components/sections/guarantee-section';
import { HeroSection } from '@/components/sections/hero-section';
import { OfferSection } from '@/components/sections/offer-section';
import { ProblemSection } from '@/components/sections/problem-section';
import { SocialProofSection } from '@/components/sections/social-proof-section';
import { UrgencySection } from '@/components/sections/urgency-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <AuthoritySection />
        <SocialProofSection />
        <OfferSection />
        <UrgencySection />
        <GuaranteeSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
