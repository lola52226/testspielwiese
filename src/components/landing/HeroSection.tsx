import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-couple.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ein Paar in liebevoller Umarmung"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Eure{" "}
            <span className="text-primary">Spielwiese</span>
            <br />
            <span className="text-secondary">Zurück zur Lust,</span>
            <br />
            Leichtigkeit & Verbindung
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Ein Paarkurs für alle, die sich mehr Nähe, Leichtigkeit und
            lebendige Sexualität in ihrer Beziehung wünschen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              Jetzt starten
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-full"
            >
              Mehr erfahren
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
