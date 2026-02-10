import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const FooterCTA = () => {
  return (
    <>
      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-orange-light to-purple-light rounded-3xl p-10 md:p-16 border border-border/50">
            <Heart className="h-10 w-10 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Bereit für eure Spielwiese?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              Startet jetzt eure Reise zurück zu Nähe, Leichtigkeit und
              lebendiger Verbindung.
            </p>
            <Button size="lg" className="text-lg px-10 py-6 rounded-full shadow-lg">
              Jetzt Zugang sichern
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="font-display font-semibold text-foreground">
              Spielwiese
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Impressum</a>
              <a href="#" className="hover:text-foreground transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-foreground transition-colors">Kontakt</a>
            </div>
            <p>© 2026 Spielwiese. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCTA;
