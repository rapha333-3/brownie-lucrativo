import { TrendingUp, DollarSign, Package, GraduationCap, BarChart3 } from "lucide-react";

const tiers = [
  { qty: 30, profit: "R$225,10" },
  { qty: 60, profit: "R$465,10" },
  { qty: 100, profit: "R$785,10" },
  { qty: 200, profit: "R$1.585,10" },
];

const stats = [
  { icon: DollarSign, label: "Preço médio de venda", value: "R$12,00" },
  { icon: Package, label: "Custo médio (ingredientes + embalagem)", value: "R$4,00" },
  { icon: GraduationCap, label: "Investimento único no curso", value: "R$14,90" },
  { icon: BarChart3, label: "Lucro médio por brownie", value: "R$8,00" },
];

const EarningsSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          💰 Como ganhar até R$5.000 por mês com Brownie Chocolatudo
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Transforme poucos ingredientes em uma renda extra vendendo brownies irresistíveis.
          Veja abaixo uma simulação simples de produção mensal.
        </p>
        <p className="text-primary font-medium mt-4 max-w-xl mx-auto">
          ✨ Mesmo começando do zero, é possível recuperar o investimento rapidamente e escalar suas vendas.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-card rounded-xl p-5 shadow-warm text-center border border-border"
          >
            <s.icon className="w-8 h-8 text-cta mx-auto mb-3" />
            <p className="text-sm text-muted-foreground mb-1">{s.label}</p>
            <p className="font-numbers text-2xl font-bold text-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Tiers */}
      <h3 className="font-display text-2xl font-bold text-center text-foreground mb-6">
        🟢 Simulação de Ganhos
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {tiers.map((t, i) => (
          <div
            key={i}
            className="relative bg-card rounded-xl p-6 shadow-warm border border-border text-center hover:scale-105 transition-transform duration-300"
          >
            <TrendingUp className="w-6 h-6 text-cta mx-auto mb-2" />
            <p className="text-muted-foreground text-sm mb-1">
              📦 {t.qty} brownies/mês
            </p>
            <p className="font-numbers text-3xl font-black text-cta">{t.profit}</p>
            <p className="text-xs text-muted-foreground mt-1">lucro estimado</p>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-8 max-w-lg mx-auto">
        ✨ Os valores apresentados são apenas simulações e podem variar conforme dedicação, região e estratégia de vendas.
      </p>
    </div>
  </section>
);

export default EarningsSection;
