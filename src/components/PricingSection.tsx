import { ShieldCheck, ThumbsUp, Lock } from "lucide-react";

const seals = [
  { icon: ShieldCheck, label: "Compra Segura" },
  { icon: ThumbsUp, label: "Satisfação Garantida" },
  { icon: Lock, label: "Privacidade Protegida" },
];

const PricingSection = () => (
  <section id="oferta" className="py-16 md:py-24 gradient-chocolate">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        Um clique de mudar sua renda ainda nessa páscoa
      </h2>

      <div className="bg-card max-w-md mx-auto rounded-2xl p-8 md:p-10 shadow-warm mb-8">
        <p className="text-muted-foreground line-through text-xl mb-1">R$87,90</p>
        <p className="font-display text-5xl md:text-6xl font-black text-cta mb-2">R$14,90</p>
        <p className="text-muted-foreground mb-6">à vista ou parcelamento simbólico</p>

        <a
          href="#"
          className="block w-full bg-cta hover:bg-cta-hover text-accent-foreground font-bold text-xl py-5 rounded-lg shadow-warm transition-all duration-300 animate-pulse-gentle"
        >
          👉 Quero garantir meu acesso agora
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {seals.map((s, i) => (
          <div key={i} className="flex items-center gap-2 text-primary-foreground/80">
            <s.icon className="w-6 h-6 text-gold" />
            <span className="font-medium text-sm">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
