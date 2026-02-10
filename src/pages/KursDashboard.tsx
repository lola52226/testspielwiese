import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import type { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Compass, DoorOpen, Route, Sparkles, Home, LogOut, Play } from "lucide-react";
import { Link } from "react-router-dom";

const modules = [
  { number: 1, title: "Der Ruf", subtitle: "Erkennen, was los ist", icon: Compass },
  { number: 2, title: "Die Schwelle", subtitle: "Alte Muster loslassen", icon: DoorOpen },
  { number: 3, title: "Der Weg", subtitle: "Verbindung neu aufbauen", icon: Route },
  { number: 4, title: "Die Verwandlung", subtitle: "Sexualkultur neu gestalten", icon: Sparkles },
  { number: 5, title: "Die Rückkehr", subtitle: "Integration ins Leben", icon: Home },
];

const KursDashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) navigate("/auth");
      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (!session?.user) navigate("/auth");
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Laden...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="font-display text-xl font-bold text-primary">
            Spielwiese
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user?.email}
            </span>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Abmelden
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Welcome */}
        <div className="mb-10">
          <h1 className="text-3xl font-display font-bold mb-2">
            Willkommen auf eurer Spielwiese 🌿
          </h1>
          <p className="text-muted-foreground">
            Schön, dass ihr hier seid. Wählt ein Modul und startet eure Reise.
          </p>
        </div>

        {/* Progress */}
        <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm mb-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display font-semibold">Eure Heldenreise</h2>
            <span className="text-sm text-muted-foreground">0 / 5 Module</span>
          </div>
          <Progress value={0} className="h-3 rounded-full" />
        </div>

        {/* Modules Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <Link
                key={mod.number}
                to={`/kurs/modul/${mod.number}`}
                className="group bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {mod.number}
                  </div>
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg mb-1">
                  {mod.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {mod.subtitle}
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="h-4 w-4" />
                  Modul starten
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default KursDashboard;
