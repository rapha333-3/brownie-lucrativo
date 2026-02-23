import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Preciso ter experiência na confeitaria?", a: "Não. O curso é para iniciantes completos. Você vai aprender tudo do zero." },
  { q: "Vou receber a receita completa?", a: "Sim, com passo a passo detalhado em videoaulas." },
  { q: "Quanto tempo tenho acesso?", a: "Você terá acesso por 1 ano completo." },
  { q: "Posso assistir pelo celular?", a: "Sim, acesso imediato em qualquer dispositivo: celular, tablet ou computador." },
  { q: "Existe garantia?", a: "Sim, 7 dias de garantia incondicional. Se não gostar, devolvemos seu dinheiro." },
  { q: "Vou aprender a vender também?", a: "Sim! O método ensina como transformar seus brownies em uma renda extra consistente." },
];

const FAQSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        ❓ Perguntas Frequentes
      </h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6 shadow-warm">
            <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
