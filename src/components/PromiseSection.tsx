import { CheckCircle } from "lucide-react";

const benefits = [
  "Produzir brownies profissionais",
  "Vender para festas e encomendas",
  "Começar com baixo investimento",
];

const PromiseSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
        Você não precisa de confeitaria profissional.
      </h2>
      <p className="text-muted-foreground text-lg mb-10">
        Com ingredientes simples e utensílios que já tem em casa, é possível:
      </p>

      <div className="space-y-4 max-w-md mx-auto text-left mb-10">
        {benefits.map((b, i) => (
          <div key={i} className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-cta flex-shrink-0" />
            <span className="text-foreground font-medium text-lg">{b}</span>
          </div>
        ))}
      </div>

      <a
        href="https://www.ggcheckout.com/checkout/v5/d2QS1A5kM8dXzNJEQgJ4"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-cta hover:bg-cta-hover text-accent-foreground font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
      >
        👉 Quero aprender agora
      </a>
    </div>
  </section>
);

export default PromiseSection;
