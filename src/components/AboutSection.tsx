import chefPortrait from "@/assets/chef-portrait.jpg";

const AboutSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        👩‍🍳 Quem vai te ensinar
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <img
          src={chefPortrait}
          alt="Professora do curso"
          className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover shadow-warm shrink-0"
        />

        <div>
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Oi, eu sou <strong>Jose Mendes</strong>, especialista em brownies lucrativos.
          </p>
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Comecei produzindo em casa com utensílios simples e hoje ensino pessoas comuns a transformar confeitaria em renda extra real.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed italic">
            "Se eu consegui começar do zero, você também consegue. Vou te mostrar exatamente como."
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
