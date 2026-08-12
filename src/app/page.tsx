import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { TechStackMarquee } from "@/components/home/tech-stack-marquee";
import { ServicesSection } from "@/components/home/services-section";
import { AiCapabilitiesSection } from "@/components/home/ai-capabilities";
import { CaseStudiesSection } from "@/components/home/case-studies-section";
import { ProcessSection } from "@/components/home/process-section";
import { IndustriesSection } from "@/components/home/industries-section";
import { TechStackSection } from "@/components/home/tech-stack-section";
import { PricingSection } from "@/components/home/pricing-section";
import { FounderSummarySection } from "@/components/home/founder-summary-section";
import { FaqSection } from "@/components/home/faq-section";
import { ContactSection } from "@/components/home/contact-section";
import { IntroAnimation } from "@/components/ui/intro-animation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <IntroAnimation />
      <HeroSection />
      <StatsSection />
      <TechStackMarquee />
      <ServicesSection />
      <AiCapabilitiesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <IndustriesSection />
      <TechStackSection />
      <PricingSection />
      <FounderSummarySection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}


