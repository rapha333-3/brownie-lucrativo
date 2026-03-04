import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Camila S.",
    text: "Eu nunca tinha feito um brownie na vida. Segui o passo a passo e vendi 60 unidades no primeiro fim de semana!",
    stars: 5,
  },
  {
    name: "Juliana M.",
    text: "O curso me deu confiança pra começar. Hoje já tenho clientes fixos e faço encomendas toda semana.",
    stars: 5,
  },
  {
    name: "Rafael T.",
    text: "Investimento ridículo pelo tanto que aprendi. Em 2 semanas já tinha recuperado o valor do curso.",
    stars: 5,
  },
  {
    name: "Ana Paula R.",
    text: "As receitas são incríveis e super fáceis. Meus clientes pedem bis toda vez!",
    stars: 5,
  },
  {
    name: "Fernanda L.",
    text: "Comecei vendendo pra vizinhos e hoje entrego pra 3 cafeterias. Tudo graças ao curso!",
    stars: 5,
  },
];

const SocialProofSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-primary mb-4">
        Quem prova, aprova
      </h2>
      <p className="text-center text-muted-foreground text-lg italic mb-10">
        Veja o que nossos alunos estão dizendo:
      </p>

      <div className="max-w-md mx-auto mb-10">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
        >
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i}>
                <div className="bg-background rounded-xl p-8 shadow-warm border border-border flex flex-col gap-4 text-center mx-2">
                  <div className="flex justify-center gap-0.5">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground text-base leading-relaxed italic">
                    "{t.text}"
                  </p>
                  <p className="text-muted-foreground text-sm font-semibold">
                    — {t.name}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="text-center">
        <a
          href="https://www.ggcheckout.com/checkout/v5/d2QS1A5kM8dXzNJEQgJ4"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cta hover:bg-cta-hover text-accent-foreground font-button font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          👉 Quero começar também
        </a>
      </div>
    </div>
  </section>
);

export default SocialProofSection;
