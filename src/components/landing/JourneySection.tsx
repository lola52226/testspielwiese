import { motion } from "framer-motion";
import { Compass, DoorOpen, Route, Sparkles, Home } from "lucide-react";

const modules = [
  {
    number: 1,
    title: "Der Ruf",
    subtitle: "Erkennen, was los ist",
    description:
      "Hintergrundwissen zu Unlust – warum sie entsteht und was sie euch sagen will.",
    icon: Compass,
  },
  {
    number: 2,
    title: "Die Schwelle",
    subtitle: "Alte Muster loslassen",
    description:
      "Beziehungskultur reflektieren, Raum schaffen und alte Muster erkennen.",
    icon: DoorOpen,
  },
  {
    number: 3,
    title: "Der Weg",
    subtitle: "Verbindung neu aufbauen",
    description:
      "Kommunikation, Nähe und emotionale Intimität stärken.",
    icon: Route,
  },
  {
    number: 4,
    title: "Die Verwandlung",
    subtitle: "Sexualkultur neu gestalten",
    description:
      "Spielerisch, neugierig und ohne Druck erkunden.",
    icon: Sparkles,
  },
  {
    number: 5,
    title: "Die Rückkehr",
    subtitle: "Integration ins Leben",
    description:
      "Leichtigkeit, Tiefe und Spielfreude nachhaltig verankern.",
    icon: Home,
  },
];

const JourneySection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Eure <span className="text-primary">Heldenreise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In 5 Modulen begleiten wir euch von der Erkenntnis bis zur
            nachhaltigen Veränderung.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30 transform md:-translate-x-px" />

          {modules.map((mod, index) => {
            const Icon = mod.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={mod.number}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Circle on line */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                    {mod.number}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-20 md:ml-0 ${
                    isEven
                      ? "md:mr-auto md:pr-16 md:w-[calc(50%-24px)]"
                      : "md:ml-auto md:pl-16 md:w-[calc(50%-24px)]"
                  }`}
                >
                  <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border/50">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Modul {mod.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold mb-1">
                      {mod.title}
                    </h3>
                    <p className="text-sm font-medium text-secondary mb-2">
                      {mod.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {mod.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
