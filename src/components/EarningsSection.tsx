import { Zap } from "lucide-react";

const EarningsSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
        Simulação simples de ganhos
      </h2>

      <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8 text-left">
        <div className="col-span-3 grid grid-cols-3 bg-card rounded-xl p-5 shadow-warm border border-border gap-y-4">
          <div>
            <p className="text-muted-foreground text-sm">Venda média</p>
            <p className="font-numbers text-2xl font-bold text-foreground">R$12</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Custo médio</p>
            <p className="font-numbers text-2xl font-bold text-foreground">R$4</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Lucro/unidade</p>
            <p className="font-numbers text-2xl font-bold text-cta">R$8</p>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
        <div className="bg-card rounded-xl p-6 shadow-warm border border-border text-center">
          <p className="text-muted-foreground text-sm mb-1">Vendendo 50 unidades</p>
          <p className="font-numbers text-3xl font-black text-cta">R$400</p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-warm border border-border text-center">
          <p className="text-muted-foreground text-sm mb-1">Vendendo 100 unidades</p>
          <p className="font-numbers text-3xl font-black text-cta">R$800</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-foreground font-semibold text-lg">
        <Zap className="w-5 h-5 text-gold" />
        O curso custa menos que 2 brownies vendidos.
      </div>
    </div>
  </section>
);

export default EarningsSection;
