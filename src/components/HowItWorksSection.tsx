import { Play, BookOpen, Clock, RefreshCw, Monitor } from "lucide-react";

const steps = [
  { icon: Play, title: "Videoaulas passo a passo", desc: "Método simples e direto" },
  { icon: BookOpen, title: "Receita completa", desc: "Casquinha crocante por fora e macio por dentro" },
  { icon: Clock, title: "Acesso vitalício", desc: "Assista quantas vezes quiser, para sempre" },
  { icon: Monitor, title: "Qualquer dispositivo", desc: "Celular, tablet ou computador" },
];

const HowItWorksSection = () => (
  <section className="py-16 md:py-24 gradient-warm">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        🎓 Como funciona o curso
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {steps.map((s, i) => (
          <div key={i} className="text-center bg-card p-6 rounded-xl shadow-warm border border-border">
            <div className="w-16 h-16 mx-auto rounded-full gradient-chocolate flex items-center justify-center mb-4">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="#oferta"
          className="inline-block bg-cta hover:bg-cta-hover text-accent-foreground font-bold text-lg px-8 py-4 rounded-lg shadow-warm transition-all duration-300"
        >
          👉 Clique aqui e aproveite a oferta
        </a>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
