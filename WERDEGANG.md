# Resonanz — Werdegang und aktueller Stand

Stand: 7. September 2026

Resonanz ist die dritte eigenständige Anwendung neben **Mandala Atelier** und
**Blatt**. Sie hat ein eigenes Repository, eine eigene Engine und keine Zeile
gemeinsamen Code. Der Bestand der beiden anderen Apps wurde nicht angefasst.

Der Einsatzzweck in einem Satz:

> Der Benutzer regt ein dynamisches System an. Das System entscheidet, **ob und
> wie stark** es darauf anspricht. Was in Resonanz war, hinterlässt Farbe.

---

## Teil I — Der Werdegang

Der Weg hierher ist kein gerader. Er ist hier vollständig aufgeschrieben,
einschließlich der Sackgassen, weil jede davon einen Befund geliefert hat, der
in der aktuellen Fassung steckt.

### 1. Die Ausgangsidee: Impuls und Antwort

Das erste Konzept beschrieb einen Kreislauf: Der Benutzer gibt einen Impuls,
das System antwortet, der Benutzer reagiert auf die Antwort. Abgegrenzt wurde
gegen die beiden bestehenden Apps — Atelier schenkt Ordnung, Blatt lässt
Material entdecken, Resonanz sollte ein Gegenüber sein.

### 2. Der erste Einwand

Ein System, das auf **jede** Berührung antwortet, ist kein Resonator, sondern
ein Effektgenerator. Im Konzept stand nirgends, dass das System auch schweigen
darf — dabei ist genau das der physikalische Kern des Wortes: Ein Resonator
spricht bei bestimmten Frequenzen stark an und daneben kaum.

### 3. Das Wort wörtlich genommen

Daraus wurde die zweite Konzeptfassung. Die vorher getrennten offenen Fragen
— kontrollierte Unvorhersehbarkeit, Gedächtnis, Stabilität und Instabilität —
erwiesen sich als Aspekte **eines** dynamischen Systems:

| Physikalisches Prinzip | Was es beiträgt |
|---|---|
| Selektivität / Güte Q | Nicht jeder Impuls erzeugt eine relevante Antwort |
| Einschwingen | Wiederholte passende Impulse bauen Wirkung auf |
| Phase, Verzögerung | Die Antwort kommt nicht immer sofort |
| Abklingen | Ein angeregter Zustand verliert Energie |
| Nichtlinearität | Ab einer Schwelle kippt das Verhalten |

Zwei Grundsätze wurden hier gesetzt und gelten bis heute:

- **Richtung vorhersehbar, Ausmaß nicht.** Nicht Zufall erzeugt Überraschung,
  sondern ein Kipppunkt, dessen Erreichen offen ist.
- **Nachhall ja, Eigeninitiative nein.** Das System darf fortsetzen, was der
  Benutzer begonnen hat. Es beginnt nie von selbst etwas Neues.

Ebenfalls hier entschieden: kein Xcode-Projekt. Das ganze Ökosystem ist
web-basiert, geschrieben und getestet wird auf einem iPad. Ein eigenes
Repository statt eines Ordners im Atelier, und zwar aus einem gemessenen
Grund: Der Service Worker des Ateliers (`sw.js`, Zeilen 80–145) umfasst alles
unterhalb `/mandala-atelier/`, ausgenommen ist nur `/atelier3/`. Ein Ordner
`resonanz/` dort wäre auf jedem eingerichteten iPad aus dem Atelier-Vorrat
bedient worden — bei einem Prüfstück, das mehrmals täglich geändert wird,
tödlich.

### 4. Prüfstück 01 — und warum es scheiterte

Gebaut wurde ein Feld gedämpfter harmonischer Oszillatoren auf einem Gitter,
angetrieben von der Handbewegung. Ein verborgenes Resonanzfenster, bei jedem
Öffnen neu ausgewürfelt, damit auch der Erbauer es nicht kennt. Dazu eine
Konvergenzmessung: Nähert sich die Handbewegung dem Fenster im Lauf der
Sitzung?

Die Physik funktionierte, nachgemessen im echten Browser:

```
Fenster bei 1,84 Hz
0.60 Hz  0.22      1.80 Hz  5.63   <- Fenster
0.80 Hz  0.34      2.10 Hz  4.26
1.00 Hz  0.55      2.50 Hz  0.62
1.25 Hz  1.25      3.00 Hz  0.38
1.50 Hz  3.80
```

Faktor 25 zwischen daneben und getroffen. Sauberer Einzelgipfel.

**Und es war trotzdem nichts.** Der Befund des Testers: „Das ist zwar ganz
nett, aber ich kann überhaupt nichts damit anfangen."

Drei Fehler steckten darin, und alle drei waren meine:

1. **Ein Suchspiel ohne Gefälle.** Außerhalb des Fensters gab es nichts zu
   fühlen und nichts, woran man sich entlanghangeln konnte. Eine Suche ohne
   Gefälle ist keine Suche, sondern eine Lotterie.
2. **Selektivität als Schweigen missverstanden.** Wer nicht zufällig
   hineinstolpert, sieht ein graues Strichfeld, das auf nichts reagiert, und
   schließt: kaputt.
3. **Ein Konzept ohne Erfahrung.** Auf vierzig Abschnitten stand kein einziger
   Satz darüber, wie es sich anfühlt — nur, was das System tut. Der
   Mechanismus wurde getreu gebaut. Der Mechanismus war nie die App.

### 5. Das Bild

Die Wende kam nicht durch Argumente, sondern durch ein Bild: eine Designtafel
mit leuchtenden Partikelströmen, Wirbeln, Bändern aus Licht. Daraus ließ sich
ablesen, was in keinem Text stand:

- Es geht um **Licht**, nicht um Linie. Emission statt Strich.
- Die Geste ist **Ziehen und Wirbeln**, nicht Zeichnen.
- Die drei Tafeln sind eine **Lebensgeschichte**: Entstehen, Aufbau, Zerfall.
- Farbe ist eine **Energieskala**: kalt im Ruhigen, Gold im Höhepunkt.

Angemerkt wurde dazu, dass diese Optik — glühende Partikel auf Schwarz — die
häufigste Ästhetik generativer Grafik überhaupt ist und die Gefahr birgt, in
zwei Sekunden einsortiert zu werden. Das Neue an Resonanz liegt nicht im Bild,
sondern in der Bedingung, unter der es entsteht.

### 6. Der Mechanismuswechsel

Der Text beschrieb die Physik eines **Resonators**, das Bild zeigt die Physik
eines **Mediums**. Das Medium ist das bessere System, aus einem Grund, der
genau das vorherige Scheitern behebt:

> **Ein Medium antwortet immer.** Wer hineinfasst, schiebt es — jedes Mal.
> Ein Gitter aus Oszillatoren kann schweigen. Ein Strom kann das nicht.

Damit ließ sich der Widerspruch auflösen, an dem Prüfstück 01 hing:

**Selektivität ist nicht die Wahl zwischen Antwort und Schweigen, sondern
zwischen verschiedenen Antworten.** Falscher Takt: der Strom zerfasert und
löst sich auf. Richtiger Takt: er sammelt sich und wird Struktur. Beides ist
zu sehen, beides ist unmissverständlich die eigene Bewegung — nur eines ist
Ordnung.

Als Vorbild trat die **Schaukel** an die Stelle der Stimmgabel. Eine Schaukel
lässt sich nicht in beliebigem Takt anschieben; man schiebt im Takt oder man
bremst sie. Und der Takt ist dabei **nicht versteckt**: Er ist die Drehzahl
des Wirbels, den man selbst erzeugt hat, und die sieht man.

### 7. Vier Fehler mit Messwert

Der Weg zur ersten brauchbaren Fassung ging über vier Fehlversuche, jeder im
echten Browser nachgemessen:

| Fehler | Was passierte | Befund |
|---|---|---|
| Hand als Rührstab | dunkles Loch mit hellem Ring außen | Schub auf ein Drittel; die Hand regt an, sie rührt nicht um |
| Zu viel Sog | alles fiel in einen Punkt | Arme entstehen durch **differentielle Rotation**, nicht durch Sog |
| Festes Teilchenfeld | wurde zu dünnen Fäden ausgezogen, Löcher blieben | Lebensdauer und ständiger Nachschub |
| `SRC_ALPHA` beim Addieren | alles zu dunkel, Niederschlag unsichtbar | Der Shader multipliziert die Deckkraft bereits — `SRC_ALPHA` quadriert sie. Beim Niederschlag Faktor 2500 |

Der letzte war der teuerste: Dreimal wurde die Helligkeit hochgedreht, statt
die Ursache zu suchen.

### 8. Deckende Farbe statt addiertem Licht

Erster Befund am fertigen Wirbel: „Was bleibt? Auf einem Medium mit echter
Farbe würde nichts verblassen."

Der Einwand traf einen echten Konstruktionsfehler. Der Niederschlag war
**addiertes Licht**, und addiertes Licht kennt nur zwei Enden: zu schwach, um
zu bleiben, oder zugelaufen zu Weiß. Echte Farbe macht ein Drittes: **sie
deckt.** Neue Farbe verbirgt alte, statt sich zu ihr zu addieren.

Umgestellt auf deckendes Auftragen. Folgen:

- Es verblasst nichts. Nie.
- Es läuft nicht zu Weiß zu — das Bild geht gegen die zuletzt aufgetragene
  Farbe, nicht gegen Überstrahlung.
- Später Gemaltes verdeckt früher Gemaltes: es entstehen **Schichten**, und
  damit eine sichtbare Reihenfolge.

### 9. Die Verankerung

Letzter Befund: In Fassung A wanderte der Wirbel unter der Hand davon, in B
nicht. Ursache: Die Verankerung hing an der **aktuellen** Energie. In B steht
die bei 1 und der Kern ist festgenagelt; in A fällt sie absichtlich ständig
ab — und bei jedem Abfall wurde der Kern wieder beweglich.

Jetzt zählt die **höchste je erreichte** Energie: Was einmal gestanden hat,
steht, bis es ganz erloschen ist. Nachgemessen mit absichtlich unsauberem
Kreisen, bei dem Tempo und Radius schwanken:

```
Energie schwankt zwischen 0.00 und 1.00
Kern zuletzt:  436 -> 438 -> 439 · 355     (3 px über 3 Sekunden)
```

Dieselbe Messung zeigt nebenbei, dass A und B sich bei einer echten,
schwankenden Hand deutlich unterscheiden — unter einem mathematisch perfekten
Kreis waren sie noch fast gleich.

### 10. Der Sinn fehlte

Erster ehrlicher Eindruck nach dem Wirbel: „Das ist schon ganz nett. Aber der
Sinn bleibt mir verborgen. Ich bewege den Finger in der Mitte im Kreis, ein
Wirbel entsteht, und wenn ich aufhöre, bleibt ein dunkles Etwas stehen."

Die Diagnose war nicht die Physik, sondern der Handlungsraum. Die App bot
**ein Verb und ein Substantiv**: kreisen, Wirbel. Es gab keinen Grund für eine
zweite Bewegung, weil die zweite Bewegung dasselbe an derselben Stelle tat.
Daraus folgt der Satz, der das ganze Konzept betrifft:

> **Selektivität ohne Auswahl ist keine Resonanz, sondern eine Hürde.**

Bevorzugen setzt voraus, dass es etwas zu bevorzugen gibt. Die Selektivität war
sauber gebaut und hatte nichts zur Auswahl.

Gebaut wurde daraufhin **Versuch C**: Der glühende Kern darf der Hand folgen,
statt sich festzunageln. Wer kreist *und* dabei wandert, zieht ihn mit und malt
eine **Spur** statt eines Flecks. Damit bekommt Resonanz neben der Zeit endlich
auch den Ort.

Das Kreiseln auf der Stelle bleibt trotzdem ruhig, weil der Kern nicht der Hand
folgt, sondern der geglätteten **Mitte** der Bewegung — und die steht still,
solange man auf der Stelle kreist. Eine Glättungsstufe ließ dabei rund 30 px
Zittern stehen; zwei Stufen drücken es bei gleicher Verzögerung auf ein
Drittel. Gemessen beim Wandern über die Fläche: Der Kern folgt mit rund 100 px
Nachlauf, die Energie bleibt bei 1.

Zwei Zugaben waren nötig, damit aus dem Zug eine Spur wird und kein Wischer:
engerer Wirbel (Radius 0,20 statt 0,34 der kurzen Bildkante) und engerer
Hitzehof (1,15 statt 2,2 Kernradien). Und der Farbauftrag musste von 0,034 auf
0,090 steigen, weil der Kern jede Stelle nur kurz überstreicht.

---

## Teil II — Die aktuelle Ausprägung

### Zwei Schichten

```
MEDIUM          14 000 Fäden. Antwortet immer: Wer die Fläche
                berührt, schiebt es — ausnahmslos, sofort.
                Leuchtet nach Geschwindigkeit und Hitze.
                In Ruhe unsichtbar.

NIEDERSCHLAG    Was liegen bleibt. Deckende Farbe, kein Licht.
                Geschrieben wird nur, solange der Wirbel glüht.
                Verblasst nie, sättigt nie.
```

Was der Benutzer sieht, ist beides übereinander: das Bild, das bereits liegt,
und darüber das lebende Medium.

### Die Physik

**Der Kern (bis zu drei gleichzeitig).** Ein Wirbel mit Ort, Drehzahl Ω und
Energie s. Die Hand wirkt über ihre Winkelgeschwindigkeit um den Kern:

- Der Grad der Übereinstimmung mit dem vorhandenen Takt bestimmt, ob Energie
  aufgebaut oder der Wirbel zerlegt wird.
- Das Taktfenster ist bei **wenig Energie breit und nachsichtig** — der erste
  Kreis setzt das Tempo — und wird **mit wachsender Energie schmal**. Das
  System ist anfangs großzügig und wird wählerisch.
- Der Kern zieht zur **Mitte der Bewegung**, nicht zur Hand; bei einer
  Kreisbewegung ist das genau der Mittelpunkt. Was einmal Energie hatte,
  steht fest.
- Ohne Anregung klingt alles ab und kommt vollständig zur Ruhe.

**Das Feld.** Differentielle Rotation: Die Winkelgeschwindigkeit fällt nach
außen ab, daraus wickeln sich die Arme von selbst auf. Ein starrer Wirbel
dreht nur, er zeichnet nichts. Dazu ein schwacher Sog und ein sehr schwacher
direkter Schub der Hand.

**Der Nachschub.** Jeder Faden hat eine Lebensdauer von 2,6 bis 6,2 Sekunden.
Ein Drittel der neuen Fäden setzt neben einem lebenden Faden wieder ein, der
Rest gleichverteilt — dadurch verdichtet sich das Medium dort, wo schon etwas
ist, und aus gleichmäßiger Körnung werden Adern.

### Die Bedienung

Eine Fläche. Sonst nichts.

- **Kreisen**, nicht zeichnen. Dann dem Wirbel folgen, den man erzeugt hat.
- **Zwei Finger kurz auftippen** versucht Vollbild (funktioniert nicht in
  jedem eingebetteten Rahmen).
- Keine Einstellungen, keine Menüs, keine Regler, kein Generate-Knopf.

### Die zwei Stimmungen

Ein Motor, sechs Zahlen Unterschied. Zwei getrennte Dateien statt eines
Schalters, damit in der App keine Bedienoberfläche entsteht.

| | **A — Höhepunkt** | **B — Normalzustand** | **C — Wandernder Wirbel** |
|---|---|---|---|
| Taktfenster (σ) | 1,8 | 3,2 | 3,2 |
| Störung bei Danebengreifen | 1,4 | 0,7 | 0,7 |
| Grundzerfall | 0,30 | 0,14 | 0,14 |
| Aufbaugeschwindigkeit | 1,3 | 1,7 | 1,7 |
| Schwelle zum Schreiben | 0,34 | 0,20 | 0,20 |
| Farbauftrag | 0,040 | 0,026 | 0,090 |
| Kern verankert sich | ja | ja | **nein — er wird mitgezogen** |
| Wirbelradius (kurze Kante) | 0,34 | 0,34 | 0,20 |
| Bisheriger Eindruck | war zuerst unerreichbar, jetzt prüfbar | „imposant", aber ohne Sinn | offen |

C ist B mit **einer** Änderung: Der Kern darf wandern. Alles andere an der
Stimmung ist gleich, damit der Vergleich etwas aussagt.

### Technisches

- Eine HTML-Datei je Fassung, WebGL, kein Fremdcode, keine Abrufe nach außen.
- 14 000 Fäden, auf der CPU gerechnet, auf der GPU gezeichnet.
- **Fester Zeitschritt (1/120 s), gesäter Zufallsgenerator.** Kostete am
  ersten Tag drei Handgriffe und wäre nachträglich kaum einzubauen; die
  spätere Wiedergabe eines Resonanzwerks hängt daran. Dieselbe Regel wie bei
  Blatt: gesicherte Arbeiten müssen reproduzierbar bleiben.
- Der Niederschlag überlebt das Drehen des iPads (er verzerrt sich auf das
  neue Seitenverhältnis).
- Kein Service Worker, kein Speichern, kein Export — noch nicht.

---

## Teil III — Entschiedene Regeln

Diese Punkte sind geklärt und stehen nicht mehr zur Debatte:

1. **Eigenständig.** Eigenes Repository, eigene Engine. Atelier und Blatt
   bleiben unangetastet.
2. **Für Erwachsene.** Resonanz ist die erste der drei Apps, in der man
   scheitern kann. Das ist gewollt.
3. **Nachhall ja, Eigeninitiative nein.** Ohne Anregung kommt alles zur Ruhe.
   Kein Bildschirmschoner.
4. **Wahrgenommen wird immer, geantwortet wird selektiv.**
5. **Es entsteht ein Bild, und es bleibt.** Der Prozess ist nicht das einzige
   Werk.
6. **Nur was in Resonanz war, hinterlässt Farbe.** Danebengegriffenes wirbelt
   sichtbar und verschwindet spurlos.
7. **Kein Xcode, kein Metal, keine KI, keine Cloud, kein Konto.**
8. **Keine Parameter in der Oberfläche.** Unterschiedliche Stimmungen sind
   unterschiedliche Fassungen, keine Regler.

## Teil IV — Offene Fragen

**Was passiert, wenn die Fläche voll ist?** Bei deckender Farbe malt man
weiter und übermalt. Dann ist das Bild nach zwanzig Minuten das, was zuletzt
oben lag, und alles darunter ist verloren. Die Alternative wäre eine Fläche,
die mitwächst oder sich verschiebt. Zu klären ist nicht die Technik, sondern
ob Übermalen als Verlust oder als Tiefe empfunden wird.

**Höhepunkt oder Normalzustand?** Soll der starke Zustand selten und schwer
erreichbar sein oder der Normalfall? Erster Eindruck spricht für B; A war beim
ersten Versuch unerreichbar und ist erst seit der letzten Fassung überhaupt
prüfbar. Die Entscheidung fällt am Gerät.

**Wie viel Farbauftrag?** Die einzige Zahl, die sich am Roboter nicht sinnvoll
einstellen lässt. Ein simulierter Kreis ist mathematisch perfekt; eine Hand
ist es nicht.

**Läuft es auf dem iPad flüssig?** Bisher nur gegen einen Software-Renderer
geprüft. Über die GPU sagt das nichts.

**Was ist eigentlich neu?** Ein Partikelwirbel, der Farbe ablegt, existiert
hundertfach. Neu ist die Kopplung: dass das Bild nur entsteht, wenn man im
Takt bleibt. Diese Behauptung ist noch nicht bewiesen.

## Teil V — Was ausdrücklich nicht gebaut wird

Kein Generate-Knopf · keine einstellbaren Resonanzparameter · keine
Gamification · keine KI im Kern · keine Cloud · keine Konten · kein Server ·
keine geschützten Marken · kein Xcode-Projekt · keine Änderung an Mandala
Atelier oder Blatt.
