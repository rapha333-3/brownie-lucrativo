import { Gift, ShieldCheck, Clock, Zap } from "lucide-react";
import brownieHero from "@/assets/brownie-hero.jpg";

const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a
    href="#oferta"
    className={`inline-block bg-cta hover:bg-cta-hover text-accent-foreground font-bold text-lg md:text-xl px-8 py-4 rounded-lg shadow-warm transition-all duration-300 animate-pulse-gentle ${className}`}
  >
    {children}
  </a>
);

const HeroSection = () => {
  return (
    <>
      {/* Top banner */}
      <div className="bg-urgency text-accent-foreground text-center py-3 px-4">
        <p className="text-sm md:text-base font-semibold flex items-center justify-center gap-2 flex-wrap">
          <Gift className="w-5 h-5" />
          Desconto especial da Páscoa até hoje —
          <span className="line-through opacity-75">De R$87,90</span>
          <span className="text-lg font-bold"> por apenas R$14,90</span>
        </p>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={brownieHero} alt="Brownie chocolatudo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-chocolate opacity-80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-28 text-center">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight max-w-4xl mx-auto mb-6">
            Aprenda o <span className="text-gold">BROWNIE CHOCOLATUDO</span> que vende o ano inteiro — perfeito para esta Páscoa!
          </h1>

          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Domine a receita profissional, embalagem e montagem passo a passo e transforme brownies em uma fonte de renda mesmo começando do zero.
          </p>

          <CTAButton>👉 Quero aprender agora por R$14,90</CTAButton>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10 text-primary-foreground/90">
            <div className="flex items-center gap-2 text-sm md:text-base">
              <Zap className="w-5 h-5 text-gold" />
              Acesso imediato
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base">
              <ShieldCheck className="w-5 h-5 text-gold" />
              7 dias de garantia
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base">
              <Clock className="w-5 h-5 text-gold" />
              Compra segura
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
