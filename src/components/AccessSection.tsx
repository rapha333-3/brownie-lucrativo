import { Monitor, BookOpen, Gift, TrendingUp, PlayCircle } from "lucide-react";
import coursePreview from "@/assets/course-preview.png";

const features = [
  { icon: PlayCircle, text: "8 videoaulas passo a passo" },
  { icon: BookOpen, text: "Receita completa e exclusiva" },
  { icon: Gift, text: "Bônus para datas comemorativas" },
  { icon: TrendingUp, text: "Simulação de ganhos reais" },
  { icon: Monitor, text: "Acesso vitalício à plataforma" },
];

const AccessSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-3">
        Veja o que você terá acesso
      </h2>
      <p className="text-muted-foreground text-center text-lg mb-12">
        Uma plataforma completa para você aprender no seu ritmo
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Imagem da plataforma */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
          <img
            src={coursePreview}
            alt="Prévia da plataforma do Curso Brownie Chocolatudo"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* Lista de acessos */}
        <div className="space-y-5">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border shadow-sm">
              <div className="bg-gold/15 p-3 rounded-full shrink-0">
                <f.icon className="w-5 h-5 text-gold" />
              </div>
              <span className="text-foreground font-medium">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AccessSection;
