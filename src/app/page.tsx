import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { FeaturesSection } from "@/components/home/features-section";
import { ContactSection } from "@/components/home/contact-section";
import { IntroAnimation } from "@/components/ui/intro-animation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <IntroAnimation />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <ContactSection />
    </main>
  );
}
