

# 🌟 Spielwiese – Online-Kurs Website

## Überblick
Eine warme, einladende Website für den Paarkurs "Spielwiese" mit Sales Page und geschütztem Kursbereich. Farbwelt: sanfte Orange- und Lila-Schattierungen auf cleaner, weißer Basis. KI-generierte Paarbilder für authentische, warme Stimmung.

---

## 1. Sales Page (Startseite)

### Hero-Bereich
- Emotionaler Headline: z.B. *"Eure Spielwiese – Zurück zur Lust, Leichtigkeit und Verbindung"*
- Subline die das Problem anspricht (sexuelle Unlust in festen Beziehungen)
- CTA-Button zum Kursbereich / Anmeldung
- Generiertes Paarbild mit warmem, sinnlichem Vibe

### Pain-Point Einstieg ("Wo steht ihr gerade?")
- Interaktive Auswahl mit 4-5 Pain-Points als Karten:
  - 🔥 *"Die Lust ist einfach weg"* – Ihr habt kaum noch Sex und wisst nicht warum
  - 💬 *"Wir reden nicht mehr darüber"* – Das Thema Sexualität fühlt sich schwierig an
  - 😔 *"Einer will, der andere nicht"* – Unterschiedliches Verlangen belastet euch
  - 🔄 *"Es fühlt sich routiniert an"* – Sex ist langweilig geworden
  - 🧊 *"Wir haben uns emotional entfernt"* – Die Verbindung fehlt
- Jeder Pain-Point zeigt, welches Modul den besten Einstieg bietet

### Heldenreise-Übersicht (5 Module)
Visuell als Reisepfad/Journey dargestellt:

1. **Modul 1: Der Ruf** – Erkennen, was los ist. Hintergrundwissen zu Unlust, warum sie entsteht und was sie euch sagen will
2. **Modul 2: Die Schwelle** – Alte Muster erkennen und loslassen. Beziehungskultur reflektieren und Raum schaffen
3. **Modul 3: Der Weg** – Verbindung neu aufbauen. Kommunikation, Nähe und emotionale Intimität stärken
4. **Modul 4: Die Verwandlung** – Sexualkultur neu gestalten. Spielerisch, neugierig und ohne Druck erkunden
5. **Modul 5: Die Rückkehr** – Integration ins gemeinsame Leben. Leichtigkeit, Tiefe und Spielfreude nachhaltig verankern

### Über dich (Coach-Bereich)
- Kurzvorstellung mit Bild-Platzhalter
- Deine Qualifikation und Philosophie

### Testimonials / Social Proof
- Platzhalter für Kundenstimmen

### FAQ-Bereich
- Häufige Fragen zum Kurs

### Footer mit CTA
- Nochmals Anmeldungs-Button und Kontaktmöglichkeit

---

## 2. Authentifizierung
- Registrierung & Login für Kursteilnehmer (via Supabase Auth)
- E-Mail/Passwort-basiert
- Geschützter Kursbereich nur für eingeloggte Nutzer

---

## 3. Kursbereich (nach Login)

### Dashboard
- Willkommen-Nachricht
- Fortschrittsanzeige über die Heldenreise
- Empfohlener Startpunkt basierend auf gewähltem Pain-Point

### Modul-Ansicht
- Übersicht aller 5 Module als visueller Pfad
- Jedes Modul enthält:
  - **Erklärvideos** – Video-Player mit eingebetteten Videos (YouTube/Vimeo Embed)
  - **Anleitungsvideos** – Step-by-step Anleitungen von dir
  - **Übungsauswahl** – Kartenbasierte Auswahl von Übungen für die gemeinsame Übungszeit ("Wählt etwas Passendes für heute aus")
- Module können frei navigiert werden (kein Zwang zur Reihenfolge)

### Übungsbereich
- Übungen als schöne Karten mit Titel, kurzer Beschreibung und geschätzter Dauer
- Kategorisierung nach Stimmung/Intention (z.B. Verbindung, Spielen, Tiefe, Leichtigkeit)

---

## 4. Design & Stimmung
- **Farbpalette**: Warmes Orange (#F97316 Schattierungen) und sanftes Lila (#A855F7 Schattierungen) auf weißem Grund
- **Typografie**: Weiche, einladende Schriften
- **Bildwelt**: KI-generierte Paarbilder – liebevoll, sinnlich, verbunden
- **Layout**: Viel Weißraum, sanfte Rundungen, fließende Übergänge
- **Mobile-First**: Optimiert für Smartphone-Nutzung

---

## 5. Backend (Supabase / Lovable Cloud)
- Nutzer-Authentifizierung
- Profil-Tabelle mit gewähltem Pain-Point / Startpunkt
- Kurs-Fortschritt pro Nutzer speichern
- Modul- und Übungsinhalte in der Datenbank

