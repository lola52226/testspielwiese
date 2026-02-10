import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Die Spielwiese hat uns geholfen, wieder miteinander ins Gespräch zu kommen – über Themen, die wir jahrelang vermieden haben.",
    author: "Anna & Markus",
    detail: "Zusammen seit 8 Jahren",
  },
  {
    text: "Endlich ein Kurs, der nicht belehrend ist, sondern einladend. Wir fühlen uns wieder als Team.",
    author: "Julia & Stefan",
    detail: "Zusammen seit 12 Jahren",
  },
  {
    text: "Die Übungen sind so gestaltet, dass man sich sicher fühlt – und trotzdem Neues wagen kann.",
    author: "Lisa & Thomas",
    detail: "Zusammen seit 5 Jahren",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Was Paare sagen
          </h2>
          <p className="text-lg text-muted-foreground">
            Platzhalter für echte Kundenstimmen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border/50"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-4 leading-relaxed">
                „{t.text}"
              </p>
              <div>
                <p className="font-semibold text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
