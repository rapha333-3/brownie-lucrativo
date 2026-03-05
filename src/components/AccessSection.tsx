import coursePreview from "@/assets/course-preview.png";

const AccessSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 max-w-lg text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
        Veja o que você terá acesso
      </h2>
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
        <img
          src={coursePreview}
          alt="Prévia da plataforma do Curso Brownie Chocolatudo"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default AccessSection;
