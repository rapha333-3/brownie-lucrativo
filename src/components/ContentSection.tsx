import { CheckCircle, Gift } from "lucide-react";

const items = [
  "Videoaulas passo a passo",
  "Receita completa chocolatuda",
  "Técnica de embalagem profissional",
  "Acesso vitalício",
];

const bonuses = [
  "Bônus para datas comemorativas",
  "Receita extra para aumentar lucro",
];

const ContentSection = () => (
  <section className="py-16 md:py-24 gradient-warm">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        O que você recebe
      </h2>

      <div className="space-y-4 max-w-md mx-auto mb-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-warm">
            <CheckCircle className="w-6 h-6 text-cta shrink-0" />
            <span className="text-foreground font-medium">{item}</span>
          </div>
        ))}
      </div>

      <div className="space-y-3 max-w-md mx-auto">
        {bonuses.map((b, i) => (
          <div key={i} className="flex items-center gap-3 bg-gold/10 border border-gold-light p-4 rounded-lg">
            <Gift className="w-6 h-6 text-gold shrink-0" />
            <span className="text-foreground font-semibold">{b}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContentSection;
