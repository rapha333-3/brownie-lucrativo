import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import socialProof1 from "@/assets/social-proof-1.png";
import socialProof2 from "@/assets/social-proof-2.png";
import socialProof3 from "@/assets/social-proof-3.png";

const images = [socialProof1, socialProof2, socialProof3];

const SocialProofSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-primary mb-4">
        Quem prova, aprova
      </h2>
      <p className="text-center text-muted-foreground text-lg italic mb-10">
        "Eu vendi tudo no primeiro final de semana."
      </p>

      <div className="max-w-md mx-auto mb-10">
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
          href="https://www.ggcheckout.com/checkout/v5/d2QS1A5kM8dXzNJEQgJ4"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cta hover:bg-cta-hover text-accent-foreground font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          👉 Quero começar também
        </a>
      </div>
    </div>
  </section>
);

export default SocialProofSection;
