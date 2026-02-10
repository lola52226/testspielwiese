import { motion } from "framer-motion";
import { useState } from "react";
import { Flame, MessageCircle, Frown, RotateCcw, Snowflake } from "lucide-react";

const painPoints = [
  {
    icon: Flame,
    title: "Die Lust ist einfach weg",
    description: "Ihr habt kaum noch Sex und wisst nicht warum.",
    module: 1,
    color: "text-primary",
    bgColor: "bg-orange-light",
  },
  {
    icon: MessageCircle,
    title: "Wir reden nicht mehr darüber",
    description: "Das Thema Sexualität fühlt sich schwierig an.",
    module: 3,
    color: "text-secondary",
    bgColor: "bg-purple-light",
  },
  {
    icon: Frown,
    title: "Einer will, der andere nicht",
    description: "Unterschiedliches Verlangen belastet euch.",
    module: 2,
    color: "text-primary",
    bgColor: "bg-orange-light",
  },
  {
    icon: RotateCcw,
    title: "Es fühlt sich routiniert an",
    description: "Sex ist langweilig geworden.",
    module: 4,
    color: "text-secondary",
    bgColor: "bg-purple-light",
  },
  {
    icon: Snowflake,
    title: "Wir haben uns emotional entfernt",
    description: "Die Verbindung fehlt.",
    module: 3,
    color: "text-primary",
    bgColor: "bg-orange-light",
  },
];

const moduleNames: Record<number, string> = {
  1: "Der Ruf",
  2: "Die Schwelle",
  3: "Der Weg",
  4: "Die Verwandlung",
  5: "Die Rückkehr",
};

const PainPointsSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Wo steht ihr gerade?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wählt den Punkt, der am besten zu euch passt – und findet euren
            idealen Einstieg in die Spielwiese.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            const isSelected = selected === index;
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelected(isSelected ? null : index)}
                className={`relative p-6 rounded-2xl text-left transition-all duration-300 border-2 ${
                  isSelected
                    ? "border-primary shadow-lg scale-[1.02]"
                    : "border-transparent hover:border-border shadow-sm hover:shadow-md"
                } ${point.bgColor}`}
              >
                <Icon className={`h-8 w-8 ${point.color} mb-3`} />
                <h3 className="font-display font-semibold text-lg mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 pt-4 border-t border-border"
                  >
                    <p className="text-sm font-medium">
                      🎯 Dein bester Einstieg:{" "}
                      <span className="text-primary">
                        Modul {point.module} – {moduleNames[point.module]}
                      </span>
                    </p>
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
