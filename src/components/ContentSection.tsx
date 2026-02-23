import { CheckCircle, Gift } from "lucide-react";
import brownieGift from "@/assets/brownie-gift.jpg";

const items = [
  "Massa do brownie chocolatudo (textura úmida e profissional)",
  "Técnica de embalagem no celofane",
  "Laço duplo elegante",
  "Como transformar brownies em lembranças lucrativas",
];

const bonuses = [
  "Ideias lucrativas para datas comemorativas",
  "Receita extra cremosa para aumentar ticket médio",
];

const ContentSection = () => (
  <section className="py-16 md:py-24 gradient-warm">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        🍫 Dentro do curso você vai aprender <span className="text-chocolate-medium">passo a passo:</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        <div className="space-y-5">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-warm">
              <CheckCircle className="w-6 h-6 text-cta shrink-0 mt-0.5" />
              <span className="text-foreground font-medium">{item}</span>
            </div>
          ))}

          <div className="mt-8 space-y-3">
            {bonuses.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-gold/10 border border-gold-light p-4 rounded-lg">
                <Gift className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <span className="text-foreground font-semibold">Bônus {i + 1} — {b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={brownieGift}
            alt="Brownies embalados para presente"
            className="rounded-2xl shadow-warm max-w-sm w-full animate-float"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContentSection;
