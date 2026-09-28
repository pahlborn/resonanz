# Absprachen für die Arbeit an Resonanz

Das Ausführliche steht in [`WERDEGANG.md`](WERDEGANG.md) — hier steht nur, was
sonst jedes Mal neu erfragt werden müsste.

## Offene Fäden

Ganz oben, weil sie sonst untergehen. **Von Zeit zu Zeit daran erinnern** — das
ist ausdrücklich gewünscht.

1. **Zwei Schichten für die Zeit.** Je Element *nichts · flüchtig · bleibend*,
   dazu **eine** Uhr für alles Flüchtige. Damit ließe sich sagen: Funken
   vergehen, Wirbel bleiben. Bewusst zurückgestellt — „wir versuchen es zuerst
   ohne Uhren" —, aber nicht verworfen. Die Hälfte davon ist schon gebaut: Jeder
   Faden trägt ein Kennzeichen (`art[]`), und `ABGABE[]` regelt je Art, wieviel
   liegen bleibt. Es fehlt nur die zweite Schicht.
   Warum nicht fünf Uhren: Der Niederschlag ist ein **Bild, kein Protokoll**.
   Je Art eine eigene Uhr hieße je Art ein eigener Bildspeicher — auf dem iPad
   rund 60 MB und die vierfache Zeichenlast.
2. **Welche Fassung ist „die App"?** Steht in `gen.py` als `LEBENDE`. Derzeit R.
   Die Entscheidung fällt an der Hand, nicht an der Zahl.
3. **Welche Verblassen-Stärke gehört in R?** Drei Kabinettseiten stehen zur
   Wahl (sacht 45 s, mittel 20 s, stark 7 s); R liegt bei 25 s.
4. **Der Start in der zuletzt benutzten Fassung** wurde angekündigt und
   *nicht* gebaut: Er bräuchte eine Umleitung bei jedem Start, fragil ohne Netz
   und im schlechten Fall eine Falle in einer alten Fassung.
5. **A bis I sind tot** und kosten bei jeder Vorlagenänderung mit. Irgendwann
   einfrieren — aber erst, wenn die Endstufe steht.

## Beim Antworten

**Der Link gehört in die erste Zeile**, nicht in den Text. Bei allem, was man
ansehen möchte — neue Fassung, neue Wirkung, neue Seite. Bei Zwischenfragen
nicht.

    https://pahlborn.github.io/resonanz/

**Getestet wird auf einem iPad, und geschrieben wird auf einem iPad.** Keine
Anweisungen, die eine Kommandozeile voraussetzen.

**Texte gehören ihm, nicht mir.** Ein vorliegender Text wird übernommen wie er
ist. Wer eine Schwäche sieht, sagt sie **als Anmerkung daneben**.

**Erst sagen, was man vorhat, dann nachfragen, dann machen** — bei allem, was
Bestehendes umkrempelt statt es zu ergänzen.

**Beobachtung und Erklärung trennen.** Er liefert Beobachtungen, ich liefere
Erklärungen — und meine Erklärungen sind bis zur Messung wertlos. Das ist keine
Bescheidenheit, das ist die Bilanz: Drei Erklärungen hintereinander wurden durch
Messung widerlegt (WERDEGANG 26, 27, 29). Eine Beobachtung wird **nicht
übersetzt**, sondern zurückgespiegelt: „Du sagst X. Ich lese das als [messbare
Aussage]." Das kostet eine Zeile statt einer Fassung.

**Der zuverlässigste Kanal ist ein Screenshot mit einem Kringel darum.** Er hat
zweimal Vermutungen geschlagen, meine und seine.

## Beim Bauen

**Eine Änderung je Fassung, mit Messwert.** Was sich nicht messen lässt, gehört
in einen eigenen Commit. Auch widerlegte Erklärungen kommen ins WERDEGANG,
damit sie niemand ein zweites Mal baut.

**Alles wird aus `vorlage.html` erzeugt.** `python3 gen.py` schreibt alle 33
Seiten, das Regal, die Galerie, den Service Worker und das Manifest. Nie eine
erzeugte Datei von Hand ändern — sie wird beim nächsten Lauf überschrieben.
`gen.py` prüft selbst, dass kein `__PLATZHALTER__` übrigbleibt.

**Cache-Version bei jedem Release erhöhen** (`FASSUNG` in `gen.py`).

**Genau ein Service Worker.** Ein zweiter löscht beim Aktivieren den Vorrat des
ersten — das ist im Nachbarprojekt passiert.

**Was ausdrücklich nicht gebaut wird:** kein Generate-Knopf · keine
einstellbaren Resonanzparameter (Takt, Zerfall, Aufbau, Schwelle bleiben fest —
das Pult bestimmt, *welche Dinge es gibt*, nicht *wie wählerisch das Feld ist*) ·
keine Gamification · keine KI im Kern · keine Cloud · kein Konto · kein Server ·
zur Laufzeit kein einziger Abruf nach außen.

**Namen, keine Nummern.** Über eine Sache, die einen Namen hat, lässt sich
reden; über „Nummer 17" nicht. Das ist die Lehre aus dem Kabinett und der Grund,
warum das Regal keine nummerierten Kästchen hat.

## Fallen, die schon einmal Zeit gekostet haben

- **Vormultiplizierte Farbe braucht `blendFunc(ONE, ONE)`** bzw.
  `(ONE, ONE_MINUS_SRC_ALPHA)`. Mit `SRC_ALPHA` wird das Alpha quadriert — der
  Auftrag war dadurch um Faktor ~2500 zu dunkel.
- **`toDataURL` auf einem WebGL-Canvas liefert Schwarz.** Der Zeichenpuffer ist
  nach dem Rahmen geleert. Lösung: einen Wunsch stellen, den die Schleife
  unmittelbar nach `zeichnen()` erfüllt — nicht `preserveDrawingBuffer`.
- **Verblassen durch Multiplizieren kommt bei 8 Bit nie an.** 1/255 mal 0,97
  rundet auf 1/255. Es braucht zusätzlich einen kleinen Abzug, und der darf nur
  am schwachen Ende greifen.
- **Die Zeichenschleife kann starten, bevor das letzte Skript geparst ist.** Der
  Parser darf zwischen zwei Skriptblöcken ein Bild zeichnen. Alles, was die
  Schleife im ersten Rahmen braucht, muss **vor** dem Hauptskript stehen.
- **Finger verfolgen, nicht zählen.** `pointerId` + `setPointerCapture`. Sonst
  friert ein Handballen die Eingabe ein.
- **Der Roboter findet die interessanten Fehler nicht.** Er hat einen Finger,
  hebt nie ab, hat keinen Handballen und zieht mathematisch perfekte Kreise.
  Drei der wichtigsten Befunde kamen von der Hand, nicht vom Prüfstand.

## Git

Entwickelt und gepusht wird direkt nach `main` — GitHub Pages liefert nur `main`
aus, und sonst kommt die Änderung nicht aufs iPad.
