import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import socialProof1 from "@/assets/social-proof-1.png";
import socialProof2 from "@/assets/social-proof-2.png";
import socialProof3 from "@/assets/social-proof-3.png";

const images = [socialProof1, socialProof2, socialProof3];

const SocialProofSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-primary mb-4">
        ⭐ Quem prova, sempre aprova!
      </h2>
      <p className="text-muted-foreground text-center mb-12 text-lg">Veja o que nossos clientes estão falando:</p>

      <div className="max-w-md mx-auto mb-12">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
        >
          <CarouselContent>
            {images.map((src, i) => (
              <CarouselItem key={i}>
                <div className="flex justify-center">
                  <img
                    src={src}
                    alt={`Depoimento de cliente ${i + 1}`}
                    className="rounded-xl shadow-warm border border-border max-h-[500px] w-auto object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
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
