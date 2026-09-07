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

### 11. Wandern ging nicht

Befund am ersten C: „Wandern geht nicht, der Finger muss dazu jedes Mal neu
aufgesetzt werden." Zwei unabhängige Fehler, beide grundsätzlich.

**Der Takt wurde am Kern gemessen.** Beim Wandern hängt der Kern zurück, die
Handbahn *um ihn herum* wird dadurch zur Schleifenkurve, die gemessene
Winkelgeschwindigkeit springt, die Übereinstimmung fällt — und der Wirbel
stirbt genau dann, wenn man ihn mitnehmen will. Der Bezugspunkt muss die
**Mitte der Kreisbewegung** sein, nicht der nachlaufende Wirbel. A und B messen
weiter am Kern; dort steht er ohnehin fest.

**Finger wurden gezählt statt verfolgt.** Ein zweiter Kontakt — der Handballen
beim Wandern über ein großes iPad — legte die Eingabe still, bis alle Finger
weg waren. Und ein verlorengegangenes `pointerup` ließ den Zähler für immer
stehen. Jetzt wird der führende Finger an seiner Kennung verfolgt und mit
`setPointerCapture` festgehalten; weitere Finger stören nicht mehr.

Dazu ein dritter, kleinerer: Ein stillstehender Finger trieb weiter an, weil
die zuletzt gemessene Geschwindigkeit ihren Wert behielt, solange kein neues
Ereignis kam. Sie klingt jetzt ab.

Nachgemessen, kreisend über die Fläche gewandert, ohne abzusetzen:

```
Handmitte 250 -> 583      Kern 231 -> 566      Energie durchgehend 1.00
```

Vorher lag der Nachlauf bei rund 100 px, jetzt bei 20.

### 12. Der Rührstab wird zum Pinsel

Befund: „In dem Moment, in dem mein Finger das Radial verlässt, verlässt auch
die Farbe und folgt nicht meinem Finger."

Das war kein Fehler mehr, sondern ein Konstruktionsproblem. In C saß der
Wirbel im **Mittelpunkt der Kreisbewegung** — also immer einen Handbreit neben
dem Finger. Wer die Kreisbahn verlässt, für den gibt es keinen Mittelpunkt
mehr, dem das System folgen könnte; es hat nur noch den alten. Gebaut war ein
Rührstab, erwartet wird ein Pinsel.

Die Umkehr behält die Resonanz und dreht nur den Bezug:

> **Der Wirbel sitzt unter dem Finger. Getaktet wird mit dem Kringeln** — der
> Drehrate der eigenen Bewegungsrichtung.

Für eine Kreisbahn ist die Drehrate der Richtung genau die Kreisfrequenz, nur
braucht sie keinen Mittelpunkt. Damit ist die Farbe dort, wo die Hand ist, und
die Selektivität bleibt: Wer die Kringelbewegung aufgibt, dem versiegt sie.

Nachgemessen, kringelnd über die Fläche, mit einer geraden Strecke dazwischen:

```
Abstand Wirbel zu Finger    6 bis 20 px  (vorher ein Handbreit)
Energie beim Kringeln       1.00
nach der geraden Strecke    0.73  — die Farbe versiegt, ohne zu sterben
```

Auf dem Bild stehen danach zwei gemalte Züge dort, wo gekringelt wurde, und
die gerade Strecke dazwischen ist fast leer. Genau so soll es sein.

### 13. Das Bild lenkt

Mit C wurde die Bedienung praktikabel — es entstehen Bilder, die jemand
gemacht hat. Was fehlte, sah man nicht: **Jeder Zug wusste nichts von den
anderen.** Die Farbe, die schon lag, war totes Pigment; sie veränderte nichts.
Damit war Resonanz ein hübscher Pinsel, kein Gegenüber — und genau das steht
in der Vorgabe an drei Stellen: „Ein System mit Stimmung", §12 *Systemzustand
statt Memory-Feature*, EPIC 07 *Kopplung & Rückkopplung*.

**Versuch D** baut das, mit einem groben Dichteraster (80 × 60 Zellen), das
beim Auftragen mitgeschrieben wird. Daraus folgen zwei Regeln:

1. **Die Fäden fließen an vorhandenen Strähnen entlang**, nicht quer darüber —
   die Kraft zeigt entlang der Höhenlinie des Rasters, in die Richtung, die
   der Faden ohnehin verfolgt. Neue Züge flechten sich ein, statt zu überfahren.
2. **Wo schon viel liegt, nimmt die Fläche weniger an.** Damit beantwortet
   sich nebenbei die alte offene Frage, was passiert, wenn die Fläche voll ist:
   Sie läuft nicht zu, sie sättigt und wehrt sich.

Der erste Anlauf war wirkungslos, und die Messung hat es gezeigt: Das Raster
erreichte nur eine Dichte von 0,147, die Lenkkraft lag damit bei 44 px/s gegen
mehrere hundert aus dem Wirbel. Mit sechsfacher Aufnahme erreicht es 0,382 und
rund 1 700 von 4 800 Zellen. Erst dann ist im Vergleichsbild zu sehen, was
gemeint ist: Bei D laufen helle Fäden durch die Kreuzung zweier Züge hindurch,
bei C wird dieselbe Stelle zum Brei.

Das Raster ist in Zellen gedacht, nicht in Bildpunkten; eine Größenänderung
des Fensters lässt es deshalb unangetastet.

### 14. Zwei Stimmen

Frage nach D: „Muss es immer eine Kreisbewegung sein?" Gemessen mit sechs
Gesten durch D, abgelesen wurde die erreichte Energie:

```
Kringel (Kreis)            1,00
Achterschleife             1,00
Gekritzel, unregelmässig   1,00
welliger Strich            0,62
Zickzack, hin und her      0,57
gerade Linie               0,15
```

Ein Kreis ist also nicht nötig — das System hört **Krümmung über Zeit**, und
alles, was seine Richtung fortlaufend dreht, treibt es an. Nebenbei ist das der
erste saubere Beleg, dass die Resonanzkurve stetig ist und keine Hürde.

Die eigentliche Grenze lag woanders: **Alle diese Bewegungen erzeugten dieselbe
Art von Antwort, nur mehr oder weniger davon.** Ein Instrument mit einer Taste.
In der Vorgabe steht die Antwort als EPIC 04, *Motion as Instrument*.

**Versuch E** gibt dem System zwei Ohren statt einem:

| Bewegungseigenschaft | Antwort |
|---|---|
| **Drehrichtung** | links herum kühl (Blau → Violett → Blauweiß), rechts herum warm (Zinnober → Bernstein → Gold) |
| **Schleifengröße** | kleine Kringel malen fein, große Schleifen breit — Pinselbreite aus der Geste, ohne Regler |

Die Schleifengröße ist der Krümmungsradius der Handbahn: Tempo geteilt durch
Drehrate. Gemessen, vier Gesten einzeln:

```
klein, rechts herum   Ton 1   Drehzahl  +3,1   Schleife  26 px   Kernradius  44 px
klein, links  herum   Ton 0   Drehzahl  -3,1   Schleife  26 px   Kernradius  44 px
gross, rechts herum   Ton 1   Drehzahl  +3,1   Schleife 115 px   Kernradius 135 px
gross, links  herum   Ton 0   Drehzahl  -3,1   Schleife 115 px   Kernradius 135 px
```

Beide Stimmen sind unabhängig ablesbar: Farbe folgt der Richtung, Breite der
Größe, Faktor 3 zwischen fein und breit.

Ein Nebenbefund musste dabei weg: Ein neuer Zug übernahm einen bis zu 260 px
entfernten, noch drehenden Wirbel — und kämpfte dann gegen dessen
Drehrichtung. Bei vier Zügen nebeneinander scheiterten dadurch zwei. In E ist
die Übernahme auf 120 px eingeengt; A bis D behalten die alte Fassung, damit
der Vergleich sauber bleibt.

### 15. Der Befund, der eine frühere Entscheidung umstößt

Nach E, unaufgefordert: „Ich kann es noch nicht fassen, momentan überwiegt das
Erlebnis in der Bewegung. Was bleibt gefällt mir gar nicht, was aber aktuell
noch nicht so wichtig ist."

Das steht quer zu der Festlegung aus Abschnitt 8, die den ganzen Niederschlag
begründet hat: „Es bleibt liegen. Es ist ein Bild, welches entsteht und bleiben
soll." Beides sind ehrliche Befunde desselben Testers, nur zu verschiedenen
Zeitpunkten — der zweite nach dem ersten Mal, dass die Bewegung wirklich
funktioniert hat.

Die wahrscheinliche Ursache ist ein Konstruktionsfehler, den bisher niemand
benannt hat: **Der Niederschlag ist kein eigenes Ding, sondern ein Abbild des
Mediums.** Es sind dieselben Fäden, nur mit geringer Deckkraft aufgetragen.
Alles, was die lebende Schicht trägt — Bewegung, Vergänglichkeit, der Schweif,
den es nur für 0,12 Sekunden gibt — ist genau das, was ein Standbild nicht
tragen kann. Der Niederschlag erbt die Erscheinung, aber nicht die Eigenschaft,
die sie wirken ließ. Eine Langzeitbelichtung von Feuerwerk ist kein Feuerwerk.

Drei Wege stehen offen, keiner ist entschieden:

1. **Es bleibt nichts.** Resonanz ist ein Erlebnis in der Zeit; was aufbewahrt
   wird, ist eine Wiedergabe, kein Bild.
2. **Der Niederschlag bekommt eine eigene Sprache** — nicht Fäden bei niedriger
   Deckkraft, sondern etwas, das nur beim Verweilen entsteht und im Stehen
   funktioniert: Flächen, Grate, Kanten statt Streifen.
3. **Nichts ändern**, solange die Bewegung selbst trägt.

Der Tester hat den Punkt ausdrücklich zurückgestellt. Er ist hier
festgehalten, damit er nicht verlorengeht.

### 16. Die zweite Handschrift

Einwand nach E: „Wir haben Kreisel. In der Vorgabe siehst du, dass das erst der
Beginn ist. Es gibt Linien und begonnene Kreise, welche sich in andere
Richtungen fortbewegen lassen. An Linien hängen Lichtpunkte, gleich mit
Galaxien."

Richtig — mit einer Bedingung, die dagegengehalten wurde: **Mehr Formen sind
nicht dasselbe wie mehr Sprache.** Werden Linien, Bögen und Lichtpunkte einfach
als weitere Dinge eingebaut, die das System ausspucken kann, wird Resonanz ein
Formenkatalog, und genau dann zerfällt, was sie von jedem Partikelspielzeug
unterscheidet. Jede neue Form muss von einer unterscheidbaren Bewegung
**verdient** sein.

Zwei Bewegungseigenschaften lagen brach und ergeben genau das Gewünschte:

| Bewegung | Was daraus wird |
|---|---|
| gerichtet, wenig gekrümmt — der Zug, der bisher nichts tat | ein **Filament**: ein dünner, farbiger Strang statt eines Wirbels |
| verweilen auf dieser Bahn | ein **Knoten**: ein weißglühender Lichtpunkt, der auf dem Strang sitzt |

Aus der einzigen Bewegung, die bisher tot war, wird damit die zweite
Handschrift. Filamentfäden bringen ihre eigene Hitze mit, behalten sie, und
lassen sich vom Wirbelfeld und von der Hand kaum verbiegen — sonst zerfließt
der Strang, kaum dass er liegt.

Gemessen, drei Gesten nacheinander auf einer Fläche:

```
kringeln            Wirbel 1,00   Linienwert 0,24   Knoten 0   feste Fäden     0
ziehen              Wirbel 0,00   Linienwert 0,37   Knoten 0   feste Fäden 2 213
ziehen + anhalten   Wirbel 0,00   Linienwert 1,00   Knoten 1   feste Fäden 2 441
```

Die drei Gesten bleiben sauber getrennt: Beim Kringeln bleibt der Linienwert
unter der Schwelle, beim Ziehen entsteht kein Wirbel. Beim ersten Anlauf waren
die Stränge kreidig weiß und zu breit — Hitze von 0,55–0,95 auf 0,26–0,52
gesenkt und die seitliche Streuung halbiert, damit der Strang Farbe hat und
der Knoten allein weißglüht. Erst dadurch entsteht eine Rangfolge statt einer
Fläche.

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

| | **A — Höhepunkt** | **B — Normalzustand** | **C / D — unter dem Finger** |
|---|---|---|---|
| Taktfenster (σ) | 1,8 | 3,2 | 3,2 |
| Störung bei Danebengreifen | 1,4 | 0,7 | 0,7 |
| Grundzerfall | 0,30 | 0,14 | 0,14 |
| Aufbaugeschwindigkeit | 1,3 | 1,7 | 1,7 |
| Schwelle zum Schreiben | 0,34 | 0,20 | 0,20 |
| Farbauftrag | 0,040 | 0,026 | 0,140 |
| Kern verankert sich | ja | ja | **nein — er sitzt unter dem Finger** |
| Wirbelradius (kurze Kante) | 0,34 | 0,34 | 0,13 |
| Takt gemessen an | Umkreisen des Wirbels | Umkreisen des Wirbels | **Kringeln der Richtung** |
| Bisheriger Eindruck | war zuerst unerreichbar, jetzt prüfbar | „imposant", aber ohne Sinn | offen |

F ist E plus die zweite Handschrift (Ziehen macht Linien, Anhalten Knoten).
E ist D plus zwei Stimmen (Drehrichtung färbt, Schleifengröße malt).
C hat dieselbe Stimmung wie B. Anders ist nur, wo der Wirbel sitzt und woran
der Takt gemessen wird. **D ist C mit genau einer Änderung: Das schon Gemalte
wirkt zurück** — es lenkt die Fäden und begrenzt die Aufnahme. Eine Änderung je
Fassung, damit der Vergleich etwas aussagt.

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

**Trägt das Bleibende überhaupt?** Siehe Abschnitt 15 — der bisher wichtigste
unentschiedene Punkt.

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
