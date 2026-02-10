import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Für wen ist die Spielwiese geeignet?",
    answer:
      "Für alle Paare in festen Beziehungen, die sich mehr Leichtigkeit, Verbindung und lebendige Sexualität wünschen – egal ob ihr gerade wenig oder keinen Sex habt oder einfach Neues entdecken wollt.",
  },
  {
    question: "Müssen wir den Kurs zusammen machen?",
    answer:
      "Idealerweise ja! Die Spielwiese ist als Paarkurs konzipiert. Die Übungen sind für euch beide gedacht und entfalten ihre Wirkung am besten, wenn ihr sie gemeinsam macht.",
  },
  {
    question: "Wie viel Zeit sollten wir einplanen?",
    answer:
      "Jedes Modul hat Erklärvideos (ca. 20-30 Min.) und Übungen, die ihr flexibel in euren Alltag integrieren könnt. Plant ca. 1-2 Stunden pro Woche ein.",
  },
  {
    question: "Können wir die Module in beliebiger Reihenfolge machen?",
    answer:
      "Ja! Obwohl die Module einer Heldenreise folgen, könnt ihr frei navigieren und dort starten, wo es sich für euch richtig anfühlt.",
  },
  {
    question: "Wie lange haben wir Zugang zum Kurs?",
    answer:
      "Nach dem Kauf habt ihr unbegrenzten Zugang zu allen Inhalten. Ihr könnt den Kurs in eurem eigenen Tempo durcharbeiten und jederzeit zurückkehren.",
  },
  {
    question: "Ist der Kurs diskret?",
    answer:
      "Absolut. Der Kurs findet online statt, ihr braucht nur ein Gerät mit Internetzugang. Eure Daten werden vertraulich behandelt.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Häufige Fragen
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border border-border/50 shadow-sm"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
