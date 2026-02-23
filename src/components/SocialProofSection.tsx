import { Star, MessageCircle } from "lucide-react";

const testimonials = [
  { name: "Maria S.", text: "Meus brownies ficaram incríveis! Já vendi mais de 200 unidades no primeiro mês. 🤩", rating: 5 },
  { name: "Ana Paula", text: "Nunca pensei que seria tão fácil! A técnica de embalagem foi o diferencial.", rating: 5 },
  { name: "Juliana R.", text: "Curso direto ao ponto. Comecei a vender no dia seguinte! Super recomendo.", rating: 5 },
  { name: "Carla M.", text: "O brownie fica perfeito: crocante por fora e úmido por dentro. Meus clientes amam!", rating: 5 },
];

const SocialProofSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-primary mb-4">
        ⭐ Quem prova, sempre aprova!
      </h2>
      <p className="text-muted-foreground text-center mb-12 text-lg">Veja o que nossas alunas estão falando:</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-background p-6 rounded-xl shadow-warm border border-border hover:scale-105 transition-transform duration-300">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-foreground mb-4 text-sm leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MessageCircle className="w-4 h-4" />
              <span className="font-semibold">{t.name}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="#oferta"
          className="inline-block bg-cta hover:bg-cta-hover text-accent-foreground font-bold text-lg px-8 py-4 rounded-lg shadow-warm transition-all duration-300"
        >
          👉 Quero aprender essa delícia agora!
        </a>
      </div>
    </div>
  </section>
);

export default SocialProofSection;
