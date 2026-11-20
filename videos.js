/* Fresh Digital – Videoliste
   Aufbau: Album (hg = 100 Handgriffe, lege = Legetechniken) → Reihen → Videos
   Jedes Video: [Titel, Bild-ID, Video-ID]
   - Bild-ID: Vorschaubild unter thumbs/<Bild-ID>.webp (die alten Vimeo-Nummern, nur noch als Dateiname)
   - Video-ID: noch leer (null). Sobald der Video-Anbieter feststeht, kommt hier die ID des Videos hinein.
   Neue Videos: Zeile in der passenden Reihe ergänzen + Vorschaubild in thumbs/ ablegen. */
window.FD_VIDEOS = {
  hg: [
    { g: "Schneiden & Portionieren", v: [
      ["Schnitttechnik Neuburger", "1237625070", null],
      ["Taschen schneiden", "1137712996", null],
      ["Käse sauber schneiden (1)", "1237623962", null],
      ["Rinderhüfte zerteilen", "1137712343", null],
      ["Putenbrust zerteilen", "1137711607", null],
      ["Schinken richtig schneiden", "1237623963", null],
      ["Oberschalenschnitzel schneiden", "1137710818", null],
      ["Käse sauber schneiden (2)", "1137709073", null],
      ["Schnitttechnik Käseharfe", "1182604341", null],
      ["Käse – Genussdreiecke schneiden", "1182604071", null],
      ["Doppelgriffmesser – Käse richtig schneiden", "1182603766", null]
    ] },
    { g: "Vorbereiten", v: [
      ["Austern öffnen", "1139260071", null],
      ["Wursthautschneider", "1237625539", null],
      ["Frischkäse herstellen – Vorbereitung", "1237625173", null],
      ["Schinkennetz abziehen", "1237623959", null],
      ["Lachshaut abziehen", "1137710404", null],
      ["Lachs filetieren", "1137709947", null],
      ["Lachs entschuppen", "1137709418", null],
      ["Gräten entfernen (Pinzette)", "1137708716", null],
      ["Gräten entfernen (Messer)", "1137707827", null]
    ] },
    { g: "Verpacken", v: [
      ["Weichkäse-Ecken verpacken", "1137714273", null],
      ["Vakuumiergerät – Ware halb vakuumieren", "1182604412", null],
      ["Vakuumiergerät – Ware richtig vakuumieren", "1182604413", null],
      ["Käse richtig verpacken", "1182604226", null],
      ["Foliergerät – Käse richtig verpacken", "1182604001", null],
      ["Foliergerät – Käse-Einpackvarianten", "1182603841", null],
      ["Foliergerät – Erklärung", "1182603836", null]
    ] },
    { g: "Präsentieren & Frische", v: [
      ["Anschnitt frisch halten", "1137714536", null],
      ["Platz für Käse", "1137711181", null]
    ] },
    { g: "Warenkunde", v: [
      ["Tafelspitz und Bürgermeisterstück unterscheiden", "1137713501", null],
      ["Weichkäse Messerkunde", "1182603513", null],
      ["Anwendung Käsewerkzeug", "1182603515", null]
    ] },
    { g: "Geräte & Waage", v: [
      ["Waage – Tara", "1182604626", null],
      ["Waage – Produktinfo", "1182604598", null],
      ["Waage – ABC-Suche", "1182604532", null],
      ["Käseharfe – Draht richtig wechseln", "1182604275", null]
    ] },
    { g: "Sicherheit & Hygiene", v: [
      ["Richtig Tragen & Heben", "1237623960", null],
      ["Aufschnittmaschine – Zusammenbauen", "1182603716", null],
      ["Aufschnittmaschine – Zerlegen", "1182603642", null]
    ] }
  ],
  lege: [
    { g: "Level 1", v: [
      ["Würstchen", "1134566359", null],
      ["Röllchen", "1134566075", null],
      ["Weichkäsetreppe", "1134555164", null],
      ["Ringware", "1134554213", null],
      ["Käse-Sticks", "1134553902", null],
      ["Käsespitzen", "1134545690", null],
      ["Käseröllchen", "1134541041", null],
      ["Käse mit Gewürzrand", "1134540933", null],
      ["Genussdreiecke", "1134540818", null],
      ["Fischbites", "1134540689", null],
      ["Fischspitzen", "1134540595", null],
      ["Fischpyramide", "1134540531", null],
      ["Fächer", "1134540449", null],
      ["Einfacher Fächer", "1134540001", null],
      ["Aspikware", "1134539554", null]
    ] },
    { g: "Level 2", v: [
      ["Tête de Moine", "1137704997", null],
      ["Schmetterlingsflügel", "1137704706", null],
      ["Salamirose (Glas)", "1137704456", null],
      ["Rand betonen", "1137704201", null],
      ["Offener Kragen", "1137703997", null],
      ["Lachsfalten", "1137703741", null],
      ["Kragentechnik", "1137703466", null],
      ["Käsefächer", "1137703249", null],
      ["Hütchentechnik", "1137703080", null],
      ["Gefüllte Röllchen", "1137702735", null],
      ["Fischfächer", "1137702296", null]
    ] },
    { g: "Level 3", v: [
      ["Schwarzwurstlocken", "1137707052", null],
      ["Schinkenspitzen", "1137706670", null],
      ["Salamirose (Hand)", "1137706343", null],
      ["Rollfächer", "1137706130", null],
      ["Rette mich", "1137705856", null],
      ["Konische Röllchen", "1137705468", null]
    ] }
  ]
};
