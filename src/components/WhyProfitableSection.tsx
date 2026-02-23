import { TrendingUp, DollarSign, Home, Sparkles, PartyPopper } from "lucide-react";

const benefits = [
  { icon: TrendingUp, text: "Receita sem desperdício" },
  { icon: DollarSign, text: "Alto rendimento" },
  { icon: Home, text: "Fácil produção em casa" },
  { icon: Sparkles, text: "Baixo investimento inicial" },
  { icon: PartyPopper, text: "Ideal para festas, casamentos, aniversários e lembranças" },
];

const WhyProfitableSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        💰 Por que esse brownie é lucrativo?
      </h2>

      <div className="grid sm:grid-cols-2 gap-5 mb-10">
        {benefits.map((b, i) => (
          <div key={i} className="flex items-center gap-4 bg-card p-5 rounded-xl shadow-warm border border-border">
            <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center shrink-0">
              <b.icon className="w-6 h-6 text-cta" />
            </div>
            <span className="text-foreground font-medium">{b.text}</span>
          </div>
        ))}
      </div>

      <p className="text-center text-xl md:text-2xl font-semibold text-foreground">
        <span className="text-highlight">
          "Produza direto da sua cozinha usando utensílios simples."
        </span>
      </p>
    </div>
  </section>
);

export default WhyProfitableSection;
