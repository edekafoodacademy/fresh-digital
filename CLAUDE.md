# Fresh Digital – EDEKA Food Academy Fresh

Eigenständige Web-Seite (GitHub Pages) für die Fresh-Digital-Videos der Food Academy Fresh.
Live: https://edekafoodacademy.github.io/fresh-digital/ – jeder Push auf `main` geht nach ca. 1–2 Minuten live
(GitHub Pages muss dafür einmalig unter Settings → Pages auf „main / (root)“ stehen).

Ursprung: Der frühere Bereich „Fresh Digital“ aus dem Seminar-Finder
(https://edekafoodacademy.github.io/food-academy-seminar-app/, Repo `food-academy-seminar-app`), dort Ende Nov. 2026 entfernt.
Optik und Gestaltungsregeln sind 1:1 von dort übernommen (nur die tatsächlich genutzten CSS-Regeln).

## Struktur
- `index.html` – komplette Seite (HTML/CSS/JS in einer Datei)
- `videos.js` – Videoliste `window.FD_VIDEOS`: Album (`hg` = 100 Handgriffe, `lege` = Legetechniken) → Reihen → Videos `[Titel, Bild-ID, Video-ID]`
- `thumbs/<Bild-ID>.webp` – Vorschaubilder (Handgriffe hochkant 9:16, Legetechniken quer 16:9); Bild-ID = alte Vimeo-Nummer, nur noch Dateiname
- `videos-alt-vimeo.csv` – alte Vimeo-Liste (Archiv, Vimeo wird nicht mehr genutzt)
- `img/logo-fa-fresh.png` – Logo „EDEKA Food Academy FRESH“ oben links (Hintergrund verlustfrei transparent gemacht), Original: `img/logo-fa-fresh-original.png`
- `fresh/` – Fresh-Digital-Logo (`fd-logo.webp`), Album-Cover, EDEKA-next- und Instagram-Bild
- `img/app/` – App-Symbole (Fresh-Digital-Logo auf dunklem Grund), `img/og-vorschau.jpg` – Teilen-Vorschau
- `manifest.webmanifest` + `sw.js` – PWA (Home-Bildschirm, offline). Seite/Skripte: immer beim Server nachfragen (`cache:'no-cache'`), Bilder/Schriften: Cache + Hintergrund-Update. Bei grundlegenden Änderungen `VERSION` in `sw.js` erhöhen.
- `.nojekyll` – GitHub Pages ohne Jekyll ausliefern

## Inhalte
- Kopfzeile: Logo EDEKA Food Academy FRESH (links) + Titel „Fresh Digital“
- Startbereich (volle Bildschirmhöhe): großes, schwebendes Fresh-Digital-Logo mit „NEU!“, Glühen, Unterzeile, Knopf „Zu den Videos“; beim Scrollen gleitet es langsamer mit und blendet aus (Parallax, nur transform/opacity)
- Darunter (`#fdmain`) die Netflix-Ansicht mit Suche über alle Videos; Album öffnen/schließen und Zurück-Taste springen dorthin, nicht zum Startbereich
- Album-Fächer (2 Cover) → Album öffnet sich mit Flug-Animation, Reihen nach Thema (Handgriffe) bzw. Level 1–3 (Legetechniken); Zurück-Taste/„Alben“ schließt
- Desktop: gelbe Pfeile zum Blättern in den Reihen
- „Mehr von der Food Academy“: EDEKA next, WizzUp, Instagram @edeka_foodacademy, Link zur Fresh-Broschüre im Seminar-Finder

## Videos (Stand: noch nicht eingebunden)
- Vimeo wird nicht mehr genutzt. Alle Kacheln zeigen „Bald verfügbar“, Antippen → Hinweis „Video folgt in Kürze“.
- Neuer Anbieter noch offen (Empfehlung: Bunny Stream, EU/DSGVO-freundlich, ohne Werbung; Alternativen: YouTube nicht gelistet, Cloudflare Stream).
- Die Seite selbst kann keine Videos speichern oder hochladen (GitHub Pages = statisch, kein Server, keine geheimen Schlüssel). Videos werden beim Anbieter hochgeladen, die Seite verweist nur per Video-ID.
- Einbau später: Video-ID je Video in `videos.js` (3. Feld) eintragen, Player für den gewählten Anbieter ergänzen, „Bald verfügbar“ nur bei Videos ohne ID zeigen.

## Regeln
- Bilder lokal im Repo, Pfade relativ (Seite läuft unter Subpfad `/fresh-digital/`).
- Optik: Food-Academy-CI wie im Seminar-Finder (Gelb #FCE531/#FFD200, Orange-Akzent #FF8A1F, dunkler Netflix-Look). EDEKA-/Food-Academy-/Fresh-Digital-Logos nicht verändern.
- Sprache: Deutsch.
