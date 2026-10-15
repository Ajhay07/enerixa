import { HeroSection } from "@/components/landing/HeroSection";
import { TrustFeatureStrip, AboutSection } from "@/components/landing/AboutSection";
import { SolutionsSection } from "@/components/landing/SolutionsSection";
import { WhyChooseSection, ProcessSection } from "@/components/landing/WhyAndProcess";
import { BenefitsSection, CtaSection } from "@/components/landing/BenefitsAndCta";
import { SubsidySection } from "@/components/landing/SubsidySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustFeatureStrip />
      <AboutSection />
      <SolutionsSection />
      <WhyChooseSection />
      <ProcessSection />
      <BenefitsSection />
      <SubsidySection />
      <CtaSection />
    </>
  );
}


