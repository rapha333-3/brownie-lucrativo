import HeroSection from "@/components/HeroSection";
import PromiseSection from "@/components/PromiseSection";
import ContentSection from "@/components/ContentSection";
import SocialProofSection from "@/components/SocialProofSection";
import EarningsSection from "@/components/EarningsSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import MobileFixedCTA from "@/components/MobileFixedCTA";

const Index = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <HeroSection />
      <PromiseSection />
      <ContentSection />
      <SocialProofSection />
      <EarningsSection />
      <ObjectionsSection />
      <FinalCTASection />
      <footer className="bg-chocolate-dark text-primary-foreground/60 text-center py-6 text-sm">
        © {new Date().getFullYear()} Brownie Chocolatudo. Todos os direitos reservados.
      </footer>
      <MobileFixedCTA />
    </div>
  );
};

export default Index;
