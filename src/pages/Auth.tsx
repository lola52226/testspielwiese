import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate("/kurs");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        toast({
          title: "Registrierung erfolgreich!",
          description: "Bitte bestätige deine E-Mail-Adresse, um fortzufahren.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Fehler",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-light to-purple-light p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>

        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
          <h1 className="text-2xl font-display font-bold text-center mb-2">
            {isLogin ? "Willkommen zurück" : "Registrierung"}
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-6">
            {isLogin
              ? "Melde dich an, um auf deinen Kursbereich zuzugreifen."
              : "Erstelle dein Konto für die Spielwiese."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="eure@email.de"
                required
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Passwort</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                className="rounded-xl"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-xl py-5"
              disabled={loading}
            >
              {loading
                ? "Bitte warten..."
                : isLogin
                ? "Anmelden"
                : "Registrieren"}
            </Button>
          </form>

          <p className="text-sm text-center text-muted-foreground mt-6">
            {isLogin ? "Noch kein Konto?" : "Schon registriert?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary font-medium hover:underline"
            >
              {isLogin ? "Registrieren" : "Anmelden"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
