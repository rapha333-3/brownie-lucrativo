import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter experiência na cozinha?",
    answer: "Não! O curso foi feito para iniciantes. Você aprende do zero, passo a passo.",
  },
  {
    question: "Quanto tempo tenho de acesso?",
    answer: "Acesso vitalício. Assista quantas vezes quiser, para sempre.",
  },
  {
    question: "E se eu não gostar do curso?",
    answer: "Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos seu dinheiro.",
  },
  {
    question: "Preciso de equipamentos caros?",
    answer: "Não. Você usa utensílios simples que provavelmente já tem em casa.",
  },
  {
    question: "Como recebo o acesso?",
    answer: "Imediatamente após a confirmação do pagamento, você recebe o acesso por e-mail.",
  },
];

const FAQSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
        Perguntas frequentes
      </h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card rounded-xl border border-border px-6 shadow-warm"
          >
            <AccordionTrigger className="text-foreground font-semibold text-left text-base md:text-lg hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
