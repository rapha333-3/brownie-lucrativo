import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import SocialProofSection from "@/components/SocialProofSection";
import WhyProfitableSection from "@/components/WhyProfitableSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import EarningsSection from "@/components/EarningsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ContentSection />
      <SocialProofSection />
      <WhyProfitableSection />
      <HowItWorksSection />
      <PricingSection />
      <EarningsSection />
      <AboutSection />
      <FAQSection />
      <FinalCTASection />
      <footer className="bg-chocolate-dark text-primary-foreground/60 text-center py-6 text-sm">
        © {new Date().getFullYear()} Brownie Chocolatudo. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Index;
