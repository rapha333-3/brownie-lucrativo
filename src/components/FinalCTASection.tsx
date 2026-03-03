import { Star, Clock, ShieldCheck, ThumbsUp, Lock } from "lucide-react";

const seals = [
  { icon: ShieldCheck, label: "Compra Segura" },
  { icon: ThumbsUp, label: "Satisfação Garantida" },
  { icon: Lock, label: "Privacidade Protegida" },
];

const FinalCTASection = () => (
  <section className="py-16 md:py-24 gradient-chocolate relative overflow-hidden">
    <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

    <div className="container mx-auto px-4 text-center relative z-10 max-w-lg">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
        Última chance de garantir com desconto
      </h2>

      <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-gold/20 relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cta text-accent-foreground font-bold text-sm px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
          <Star className="w-4 h-4" />
          DESCONTO ESPECIAL
          <Star className="w-4 h-4" />
        </div>

        <p className="text-muted-foreground line-through text-xl mt-4 mb-1 font-numbers">R$87,90</p>
        <p className="text-muted-foreground text-lg mb-1">por apenas</p>
        <p className="font-numbers text-6xl md:text-7xl font-black text-cta mb-6 tracking-tight">
          R$14,90
        </p>

        <a
          href="https://www.ggcheckout.com/checkout/v5/d2QS1A5kM8dXzNJEQgJ4"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-cta hover:bg-cta-hover text-accent-foreground font-button font-bold text-xl py-5 rounded-xl shadow-lg transition-all duration-300 animate-pulse-gentle hover:scale-[1.02]"
        >
          👉 Quero garantir meu acesso agora
        </a>

        <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-sm">
          <Clock className="w-4 h-4" />
          Oferta por tempo limitado
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {seals.map((s, i) => (
          <div key={i} className="flex items-center gap-2 text-primary-foreground/80">
            <div className="bg-gold/20 p-2 rounded-full">
              <s.icon className="w-5 h-5 text-gold" />
            </div>
            <span className="font-medium text-sm">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FinalCTASection;
