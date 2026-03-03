const objections = [
  {
    question: "Mas eu nunca fiz brownie.",
    answer: "Perfeito. O curso foi feito para iniciantes.",
  },
  {
    question: "E se eu não gostar?",
    answer: "Você tem 7 dias de garantia.",
  },
];

const ObjectionsSection = () => (
  <section className="py-16 md:py-24 gradient-warm">
    <div className="container mx-auto px-4 max-w-2xl">
      <div className="space-y-8">
        {objections.map((o, i) => (
          <div key={i} className="bg-card rounded-xl p-8 shadow-warm border border-border">
            <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 italic">
              "{o.question}"
            </p>
            <p className="text-foreground text-lg font-medium">{o.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ObjectionsSection;
