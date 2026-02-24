import { ShieldCheck, ThumbsUp, Lock, Flame, Clock, Star, CheckCircle } from "lucide-react";

const seals = [
  { icon: ShieldCheck, label: "Compra Segura" },
  { icon: ThumbsUp, label: "Satisfação Garantida" },
  { icon: Lock, label: "Privacidade Protegida" },
];

const benefits = [
  "Acesso imediato após a compra",
  "Videoaulas passo a passo",
  "Bônus exclusivos inclusos",
  "Suporte e comunidade",
  "Acesso vitalício completo",
];

const PricingSection = () => (
  <section id="oferta" className="py-16 md:py-24 gradient-chocolate relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

    <div className="container mx-auto px-4 text-center relative z-10">
      {/* Urgency badge */}
      <div className="inline-flex items-center gap-2 bg-cta/20 border border-cta/40 text-cta px-5 py-2 rounded-full text-sm font-bold mb-6 animate-pulse-gentle">
        <Flame className="w-4 h-4" />
        Oferta especial de Páscoa — vagas limitadas
        <Flame className="w-4 h-4" />
      </div>

      <h2 className="font-display text-3xl md:text-5xl font-black text-primary-foreground mb-3 leading-tight">
        Um clique de mudar sua renda
        <br />
        <span className="text-gold">ainda nessa Páscoa</span>
      </h2>
      <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
        Invista menos que o preço de um lanche e aprenda a faturar com brownies o ano inteiro.
      </p>

      {/* Pricing Card */}
      <div className="bg-card max-w-lg mx-auto rounded-3xl p-8 md:p-12 shadow-2xl border border-gold/20 relative">
        {/* Discount ribbon */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cta text-accent-foreground font-bold text-sm px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
          <Star className="w-4 h-4" />
          <span className="font-numbers">83%</span> DE DESCONTO
          <Star className="w-4 h-4" />
        </div>

        <p className="text-muted-foreground line-through text-xl mt-4 mb-1 font-numbers">R$87,90</p>
        <div className="flex items-baseline justify-center gap-1 mb-1">
          <span className="text-muted-foreground text-2xl font-medium">por apenas</span>
        </div>
        <p className="font-numbers text-6xl md:text-7xl font-black text-cta mb-1 tracking-tight">
          R$14,90
        </p>
        <p className="text-muted-foreground mb-6">à vista ou parcelamento simbólico</p>

        {/* Benefits checklist */}
        <div className="text-left space-y-3 mb-8 max-w-xs mx-auto">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-cta flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{b}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="block w-full bg-cta hover:bg-cta-hover text-accent-foreground font-bold text-xl py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-gentle hover:scale-[1.02]"
        >
          👉 Quero garantir meu acesso agora
        </a>

        {/* Timer hint */}
        <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-sm">
          <Clock className="w-4 h-4" />
          Oferta por tempo limitado
        </div>
      </div>

      {/* Trust seals */}
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

export default PricingSection;
