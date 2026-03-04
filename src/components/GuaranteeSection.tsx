import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="py-16 md:py-20 bg-card">
    <div className="container mx-auto px-4 max-w-lg text-center">
      <div className="bg-background rounded-2xl p-8 md:p-10 shadow-warm border border-gold/20">
        <div className="bg-gold/15 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShieldCheck className="w-8 h-8 text-gold" />
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
          7 dias de garantia
        </h3>
        <p className="text-muted-foreground text-base leading-relaxed">
          Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
        </p>
      </div>
    </div>
  </section>
);

export default GuaranteeSection;
