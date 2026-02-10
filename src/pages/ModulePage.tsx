import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Clock, Heart, Sparkles, Leaf, Flame } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const moduleData: Record<number, {
  title: string;
  subtitle: string;
  description: string;
  videos: { title: string; type: string; duration: string }[];
  exercises: { title: string; description: string; duration: string; mood: string }[];
}> = {
  1: {
    title: "Der Ruf",
    subtitle: "Erkennen, was los ist",
    description: "In diesem Modul erfahrt ihr, warum sexuelle Unlust entsteht, welche Faktoren eine Rolle spielen und was euch eure Unlust eigentlich sagen will.",
    videos: [
      { title: "Warum verschwindet die Lust?", type: "Erklärvideo", duration: "15 Min." },
      { title: "Die Biologie der Lust", type: "Erklärvideo", duration: "12 Min." },
      { title: "Eure Bestandsaufnahme", type: "Anleitung", duration: "20 Min." },
    ],
    exercises: [
      { title: "Lust-Tagebuch", description: "Beobachtet eine Woche lang, wann Nähe-Impulse auftauchen.", duration: "5 Min./Tag", mood: "Verbindung" },
      { title: "Wunsch-Landkarte", description: "Zeichnet eure Wünsche und Sehnsüchte auf.", duration: "30 Min.", mood: "Tiefe" },
    ],
  },
  2: {
    title: "Die Schwelle",
    subtitle: "Alte Muster loslassen",
    description: "Erkennt eure Beziehungsmuster, reflektiert eure Beziehungskultur und schafft Raum für Neues.",
    videos: [
      { title: "Muster erkennen", type: "Erklärvideo", duration: "18 Min." },
      { title: "Erwartungen loslassen", type: "Erklärvideo", duration: "14 Min." },
      { title: "Raum schaffen – Anleitung", type: "Anleitung", duration: "22 Min." },
    ],
    exercises: [
      { title: "Muster-Dialog", description: "Sprecht über eure gelernten Muster in Bezug auf Nähe.", duration: "40 Min.", mood: "Tiefe" },
      { title: "Rituale loslassen", description: "Identifiziert ein altes Ritual und ersetzt es bewusst.", duration: "20 Min.", mood: "Leichtigkeit" },
    ],
  },
  3: {
    title: "Der Weg",
    subtitle: "Verbindung neu aufbauen",
    description: "Stärkt eure Kommunikation, baut emotionale Intimität auf und findet neue Wege der Nähe.",
    videos: [
      { title: "Emotionale Intimität", type: "Erklärvideo", duration: "16 Min." },
      { title: "Wünsche kommunizieren", type: "Anleitung", duration: "20 Min." },
      { title: "Berührung neu entdecken", type: "Anleitung", duration: "18 Min." },
    ],
    exercises: [
      { title: "36 Fragen der Nähe", description: "Eine Auswahl an Fragen, die euch tiefer verbinden.", duration: "45 Min.", mood: "Verbindung" },
      { title: "Achtsame Berührung", description: "Spürt einander ohne Erwartung – einfach da sein.", duration: "20 Min.", mood: "Spielen" },
    ],
  },
  4: {
    title: "Die Verwandlung",
    subtitle: "Sexualkultur neu gestalten",
    description: "Gestaltet eure Sexualität spielerisch, neugierig und ohne Druck neu.",
    videos: [
      { title: "Was ist guter Sex?", type: "Erklärvideo", duration: "15 Min." },
      { title: "Spielerisch erkunden", type: "Anleitung", duration: "25 Min." },
      { title: "Ja/Nein/Vielleicht-Liste", type: "Anleitung", duration: "12 Min." },
    ],
    exercises: [
      { title: "Ja/Nein/Vielleicht", description: "Erstellt eure persönliche Liste – ehrlich und ohne Bewertung.", duration: "30 Min.", mood: "Spielen" },
      { title: "Sinnliche Entdeckungsreise", description: "Erkundet einander mit allen Sinnen.", duration: "45 Min.", mood: "Tiefe" },
    ],
  },
  5: {
    title: "Die Rückkehr",
    subtitle: "Integration ins Leben",
    description: "Verankert Leichtigkeit, Tiefe und Spielfreude nachhaltig in eurem gemeinsamen Alltag.",
    videos: [
      { title: "Nachhaltigkeit in der Liebe", type: "Erklärvideo", duration: "14 Min." },
      { title: "Euer Paar-Ritual", type: "Anleitung", duration: "18 Min." },
    ],
    exercises: [
      { title: "Unser Paar-Manifest", description: "Schreibt auf, was eure Beziehung ausmacht.", duration: "30 Min.", mood: "Verbindung" },
      { title: "Spielwiese-Date", description: "Plant ein besonderes Date nach euren neuen Regeln.", duration: "Flexibel", mood: "Leichtigkeit" },
      { title: "Check-in Ritual", description: "Ein wöchentliches Ritual, um verbunden zu bleiben.", duration: "15 Min.", mood: "Verbindung" },
    ],
  },
};

const moodIcons: Record<string, typeof Heart> = {
  Verbindung: Heart,
  Tiefe: Sparkles,
  Leichtigkeit: Leaf,
  Spielen: Flame,
};

const moodColors: Record<string, string> = {
  Verbindung: "bg-purple-light text-secondary",
  Tiefe: "bg-purple-light text-secondary",
  Leichtigkeit: "bg-orange-light text-primary",
  Spielen: "bg-orange-light text-primary",
};

const ModulePage = () => {
  const { id } = useParams();
  const moduleNumber = parseInt(id || "1");
  const mod = moduleData[moduleNumber];
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) navigate("/auth");
    });
  }, [navigate]);

  if (!mod) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Modul nicht gefunden.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container flex items-center h-16">
          <Link to="/kurs" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Übersicht
          </Link>
        </div>
      </header>

      <main className="container py-10 max-w-4xl">
        {/* Module header */}
        <div className="mb-10">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Modul {moduleNumber}
          </span>
          <h1 className="text-3xl md:text-4xl font-display font-bold mt-1 mb-2">
            {mod.title}
          </h1>
          <p className="text-lg text-secondary font-medium mb-3">{mod.subtitle}</p>
          <p className="text-muted-foreground">{mod.description}</p>
        </div>

        {/* Videos */}
        <section className="mb-12">
          <h2 className="text-xl font-display font-bold mb-5">Videos</h2>
          <div className="space-y-3">
            {mod.videos.map((video, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border/50 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Play className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.type}</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground flex-shrink-0">
                  <Clock className="h-3.5 w-3.5" />
                  {video.duration}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 italic">
            Video-Platzhalter – füge deine YouTube/Vimeo-Links ein
          </p>
        </section>

        {/* Exercises */}
        <section>
          <h2 className="text-xl font-display font-bold mb-2">
            Übungen für heute
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            Wählt etwas Passendes für eure gemeinsame Übungszeit aus.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {mod.exercises.map((exercise, i) => {
              const MoodIcon = moodIcons[exercise.mood] || Heart;
              const colorClass = moodColors[exercise.mood] || "bg-muted text-muted-foreground";
              return (
                <div
                  key={i}
                  className="bg-card rounded-2xl p-5 border border-border/50 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${colorClass}`}>
                      <MoodIcon className="h-3 w-3" />
                      {exercise.mood}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {exercise.duration}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold mb-1">{exercise.title}</h3>
                  <p className="text-sm text-muted-foreground">{exercise.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Module navigation */}
        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          {moduleNumber > 1 ? (
            <Link to={`/kurs/modul/${moduleNumber - 1}`}>
              <Button variant="outline" className="rounded-full">
                ← Modul {moduleNumber - 1}
              </Button>
            </Link>
          ) : <div />}
          {moduleNumber < 5 ? (
            <Link to={`/kurs/modul/${moduleNumber + 1}`}>
              <Button className="rounded-full">
                Modul {moduleNumber + 1} →
              </Button>
            </Link>
          ) : <div />}
        </div>
      </main>
    </div>
  );
};

export default ModulePage;
