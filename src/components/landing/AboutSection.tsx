import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-accent/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-orange-light to-purple-light flex items-center justify-center border border-border/50 overflow-hidden">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4" />
                <p className="text-muted-foreground text-sm italic">
                  Dein Foto hier
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Hi, ich bin <span className="text-primary">[Dein Name]</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Als Coach für Paare und Sexualität begleite ich Paare dabei,
                ihre Beziehung und ihre Sexualität neu zu entdecken – mit
                Leichtigkeit, Tiefe und ohne Druck.
              </p>
              <p>
                Ich glaube daran, dass jedes Paar seinen eigenen Weg zu
                erfüllter Intimität finden kann. Die Spielwiese ist entstanden,
                weil ich immer wieder gesehen habe, wie Paare unter dem Thema
                Unlust leiden – und wie viel sich verändern kann, wenn man den
                richtigen Zugang findet.
              </p>
              <p className="font-medium text-foreground">
                [Deine Qualifikationen und persönliche Note hier einfügen]
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
