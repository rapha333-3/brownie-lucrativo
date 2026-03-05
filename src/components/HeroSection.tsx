import { ShieldCheck, Clock, Zap, Gift } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <>
      {/* Fixed urgency bar */}
      <div className="sticky top-0 z-50 bg-urgency text-accent-foreground text-center py-3 px-4 shadow-md">
        <p className="text-sm md:text-base font-semibold flex items-center justify-center gap-2 flex-wrap">
          <Gift className="w-5 h-5" />
          Oferta Especial de Páscoa — Vagas Limitadas
          <span className="hidden sm:inline">•</span>
          <span>
            <span className="line-through opacity-75">De <span className="font-numbers">R$87,90</span></span>
            {" "}por apenas <span className="font-numbers font-bold text-lg">R$14,90</span>
          </span>
        </p>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Brownie chocolatudo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-chocolate opacity-85" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-28 text-center">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight max-w-4xl mx-auto mb-4">
            Aprenda a Fazer o <span className="text-gold">Brownie Chocolatudo</span>
          </h1>
          <p className="text-gold text-xl md:text-2xl font-bold mb-2">
            que pode gerar renda ainda nesta Páscoa
          </p>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Mesmo começando do zero.
          </p>

          <a
            href="https://www.ggcheckout.com/checkout/v5/d2QS1A5kM8dXzNJEQgJ4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cta hover:bg-cta-hover text-accent-foreground font-button font-bold text-lg md:text-xl px-10 py-5 rounded-xl shadow-lg transition-all duration-300 animate-pulse-gentle hover:scale-[1.02]"
          >
            👉 Quero garantir por <span className="font-numbers">R$14,90</span>
          </a>

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
              Método simples
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
