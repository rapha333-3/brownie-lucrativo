const FinalCTASection = () => (
  <section className="py-16 md:py-24 gradient-chocolate text-center">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6 leading-tight">
        Não importa se você está começando do zero — esse brownie pode ser sua próxima fonte de renda!
      </h2>

      <p className="text-primary-foreground/80 text-lg mb-10">
        Garanta agora o melhor preço e comece a lucrar com seus brownies ainda hoje.
      </p>

      <a
        href="#oferta"
        className="inline-block bg-cta hover:bg-cta-hover text-accent-foreground font-bold text-xl px-10 py-5 rounded-lg shadow-warm transition-all duration-300 animate-pulse-gentle"
      >
        👉 Quero começar por apenas R$14,90
      </a>
    </div>
  </section>
);

export default FinalCTASection;
