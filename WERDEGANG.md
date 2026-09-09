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

### 17. Der begonnene Kreis

Aus der Vorgabe fehlte noch der Bogen, „der sich in eine andere Richtung
fortbewegen lässt". Die Messgröße dafür ist der **aufsummierte Drehwinkel seit
dem letzten Richtungswechsel**: unter einer vollen Umdrehung ein begonnener
Kreis, darüber ein geschlossener. Ein offener Bogen erbt beim Loslassen die
Wanderung der Hand und trägt den Wirbel weiter; ein geschlossener bleibt
stehen. Das setzt fort, was der Benutzer begonnen hat — von selbst beginnt
nach wie vor nichts.

Vier Anläufe waren nötig, jeder mit einem eigenen Befund:

1. **Der Prüfgriff war zu langsam.** Unter 60 px/s greift die Taktmessung gar
   nicht; die ersten Zahlen waren Artefakte des Testroboters, nicht des Codes.
2. **Der Zug kam aus der falschen Größe.** Aus der Momentangeschwindigkeit
   gemessen kamen 27 px/s heraus, wo 300 richtig waren — die Schleife
   beherrscht sie und mittelt sich nur zufällig weg.
3. **Ein Rückblick von 0,45 s fällt mitten in die Kreisbahn** und misst eine
   Sehne statt der Wanderung. Das Fenster muss vom Beginn des Zuges reichen.
4. **Ohne Verfall sammelt durchgehendes Kreiseln Winkel ohne Ende** — und man
   könnte nie mehr etwas loswerfen. Mit Verfall bleibt anhaltendes Kreiseln
   geschlossen (Gleichgewicht bei rund 590 Grad), während ein einzelner Bogen
   offen bleibt.

Dabei kam ein Fehler aus F zum Vorschein, den erst G sichtbar gemacht hat:
**Jeder Zuganfang setzte einen Knoten.** Dort ist die Hand noch langsam und die
Drehung noch nicht erkannt, und beides zusammen sieht aus wie Verweilen. Jetzt
gilt: Ein Knoten sitzt auf einer Linie — er entsteht nur, wenn kurz zuvor ein
Filament gelegt wurde.

Die eigentliche Geste ist damit dreiteilig: **laden, öffnen, loslassen.**
Gemessen:

```
nach dem Laden (2,5 enge Umdrehungen)   Energie 1,00   Bogen 324°
nach dem Öffnen (weiter, langsamer Bogen) Energie 0,75   Bogen  48°
beim Loslassen                          offen 1,00     Drift 206 px/s
danach                                  266 px geflogen, Energie nach 4,6 s noch 0,62
```

Weil die Energie den Flug überdauert, schreibt der Wirbel unterwegs weiter —
im Bild bleibt ein Komet: ein dichter Kern und ein heller Bogen, der davonzieht.
Von kalt gestartet fliegt ein Bogen zwar auch, ist aber zu schwach, um Farbe zu
lassen. Das ist ehrlich: Was nichts geladen hat, hinterlässt nichts.

### 18. Lichtpunkte

Frage nach G: „Können wir Lichtpunkte erzeugen?" — mit einem
herangezoomten Ausschnitt der Vorgabe, auf dem zwischen den Streifen überall
einzelne, scharfe Punkte sitzen.

Dafür braucht es keinen neuen Mechanismus. **Ein Lichtpunkt ist derselbe Faden,
nur langsam:** Ein schneller Faden schmiert zu einem Streifen, ein langsamer
bleibt ein Punkt. Genau das war bisher unmöglich, weil die Helligkeit an der
Geschwindigkeit hing — ein stehender Faden war unsichtbar.

**Versuch H** gibt vierzehn Prozent der Fäden **Trägheit**: Sie folgen dem
Wirbelfeld nur zu einem Fünftel und bleiben fast stehen. Drei Folgen:

* Sie ziehen keinen Schweif, sondern werden als **scharfer Punkt** gezeichnet,
  mit eigener Größe je Faden — es gibt große und kleine.
* Ihre Helligkeit kommt aus der **Hitze**, nicht aus dem Tempo: fern von allem
  ein schwaches Korn, nahe an einem glühenden Wirbel helle Funken.
* Sie schreiben mit — und ein Punkt ist im Standbild lesbar, wo ein
  verwischter Streifen es nicht ist. Das ist der erste Beitrag zu dem in
  Abschnitt 15 festgehaltenen Problem, ohne dass er dafür gebaut wurde.

Der erste Anlauf war zu blass, und der Grund war ein Fehler in der Prüfung
selbst: Das Bild wurde sechs Sekunden nach dem Loslassen aufgenommen, als die
lebende Schicht längst tot war. Lichtpunkte sind ein Phänomen der lebenden
Schicht; gemessen und beurteilt wird ab jetzt **während** der Bewegung.

Nebenwirkung, die eine Entscheidung verlangte: Die Fläche war damit auch in
Ruhe nicht mehr leer. Entschieden in Abschnitt 20 — sie ist es wieder.

### 19. Sterne und das Tempo als Farbe

Zwei Befunde nach H: „Die ganz hellen Lichtpunkte sind leider noch nicht da"
und der Vorschlag, die Farbe vom Fingertempo abhängig zu machen — „langsame
Bewegungen dunkler, je schneller umso heller".

**Die hellen Punkte fehlten, weil alle Körner gleich behandelt wurden.** Ein
Sternfeld hat wenige sehr helle und viele schwache. Jetzt bekommen 1,6 Prozent
der Fäden die zwei- bis dreifache Größe und eine Helligkeit nahe eins; sie
werden mit einer schärferen Kante gezeichnet als das übrige Glühen. Das gehört
noch zu H — es macht ein Versprechen ein, das H gegeben und nicht gehalten hat.

**Beim Tempo wurde dem Ziel zugestimmt, dem Weg widersprochen.** Helligkeit ist
bereits vergeben: Sie zeigt die Resonanz. Hängt das Tempo auch daran, kämpfen
zwei Bedeutungen um eine Anzeige und man liest keine mehr. Das Tempo gehört an
die **Farbe**: langsam die tiefen, satten Töne, schnell die hellen — dunkelblau
bis blauweiß, tiefrot bis gold. Das ist dasselbe Erlebnis ohne den Konflikt.
Damit trägt jede Achse genau eine Bedeutung:

| Achse | Bedeutung |
|---|---|
| Farbfamilie | Drehrichtung |
| Lage auf der Skala | **Handtempo** (neu) |
| Helligkeit | Resonanz |
| Breite | Schleifengröße |
| Form | Kringeln, Ziehen, Anhalten, Werfen |

Zwei Fehler unterwegs, beide meine: Der Tempo-Block landete zunächst in der
**falschen Schleife** — in der Abklingschleife, wo es den angeregten Kern gar
nicht gibt (`Cannot read properties of undefined`). Und die Tempofarbe kam
zuerst nur im glühenden Kern an, weil sie sich nach dem *heißesten* Wirbel
richtete; jetzt nach dem *nächsten*, damit sie im ganzen Zug ankommt.

### 20. Der leere Anfang, und wo Lichtpunkte herkommen

Die in Abschnitt 18 offengelassene Entscheidung ist gefallen: „Zu Beginn bitte
ein leerer Bildschirm. Die Lichtpunkte entstehen mit der Bewegung."

Das Korn ist damit keine Grundausstattung der Fläche, sondern eine Folge des
Handelns. Eine **Weckhüllkurve** steuert es: Sie steigt schnell (2,4 pro
Sekunde), sobald ein Finger liegt oder ein Wirbel Energie hat, und fällt
langsam (0,45), solange noch etwas glüht. Bei null wird sie hart auf null
gesetzt, damit wirklich nichts stehen bleibt.

Gemessen:

```
am Anfang, unberührt     wach = 0,000   Fläche vollständig leer
während der Bewegung     wach = 1,000   Sternfeld
16 s nach dem Loslassen  wach = 0,371   klingt mit dem Wirbel ab
```

Das genügte nicht. Der nächste Befund: „Die Lichtpunkte sind nach wie vor
bereits zu Beginn sichtbar. Zudem haben sie ein Eigenleben und entstehen nicht
entlang oder mit den Strahlen."

Beides war dieselbe Ursache, und sie lag tiefer als die Hüllkurve: **Das Korn
war ein vorhandenes Raster, das angeht.** Vierzehn Prozent aller Fäden waren
von Anfang an Korn, gleichmäßig über die Fläche verstreut; sobald Leben aufkam,
leuchteten sie alle zugleich auf — überall, auch dort, wo nie ein Finger war.
Das sah nach Eigenleben aus, weil es genau das war.

Richtig ist: **Ein Lichtpunkt entsteht dort, wo ein Strahl war.** Körner werden
nicht mehr beim Säen verteilt, sondern im Lauf der Bewegung gesetzt — sie
übernehmen Ort, Hitze und Farbe eines hellen Fadens und bleiben liegen. Wo
nichts leuchtet, entsteht nichts.

Gemessen, nur auf der linken Bildhälfte gemalt:

```
unberührt          0 Körner links     0 rechts
nur links gemalt   193 Körner links   4 rechts
14 s danach         83 Körner links   1 rechts
```

Damit gilt die alte Regel wieder ohne Ausnahme: **Das Medium ist in Ruhe
unsichtbar. Was bleibt, ist allein das Gemalte.** Und der Nachhall ist auch
hier keine Eigeninitiative — die Punkte klingen mit dem Wirbel ab, den der
Benutzer selbst erzeugt hat.

### 21. Zwei Korrekturen an I

„Bei I haben wir Farbe verloren. Zudem sollten sich Lichtpunkte nicht am
Bildschirmrand ansammeln."

**Die Farbe war nicht verschoben, sie war ersetzt.** In H bestimmte die
Resonanz, wo auf der Skala gemalt wird; in I saß das Tempo an derselben Stelle.
Eine echte Hand bewegt sich meist mittelschnell — also landete alles in der
Mitte der Skala, und der helle Bereich, den ein glühender Wirbel vorher
erreichte, kam nie mehr vor. Richtig ist:

> **Die Hitze bestimmt die Lage auf der Skala, das Tempo verschiebt sie.**

Formal `r = Hitze · 0,88 + (Tempo − 0,45) · 0,62`. Dazu wurden die tiefen Enden
wieder farbiger gesetzt: Sie waren dunkel *und* entsättigt, und nur das erste
war gewollt.

**Das Korn wanderte.** Gemessen bewegte es sich mit rund 60 px/s, zwei Drittel
davon nach außen — über eine Lebensdauer gut 240 px. Wer den Rand erreichte,
wurde umgeschlagen und tauchte gegenüber wieder auf; das ist die Ansammlung am
Bildschirmrand. Ein Lichtpunkt hat aber nichts zu wandern.

Der erste Reparaturversuch griff nicht, und die Messung zeigte es: Das Tempo
des Korns **stieg** nach dem Loslassen sogar. Ursache war die Reihenfolge — ich
hatte das Korn stillgestellt, *bevor* die Bildlenkung aus Abschnitt 13 es
wieder anschob. Jetzt steht es zuletzt, unmittelbar vor der Integration.

```
vorher    Tempo 58 px/s   zwei Drittel nach außen
falsch    Tempo 57 px/s   die Bildlenkung schob weiter
jetzt     Tempo  0,1 px/s  nichts nach außen, nichts am Rand
```

Wer trotzdem hinausgerät, verschwindet, statt gegenüber wieder aufzutauchen.

### 22. Weniger Punkte, und ein Ende für die großen

„Die Lichtpunkte könnten wir versuchsweise etwas reduzieren, es liegt nun zu
viel Fokus darauf. Kann der eine oder andere Lichtpunkt explodieren?"

Beim zweiten Teil war eine Grenze zu ziehen, die gerade erst wiederhergestellt
worden war: **Ein Lichtpunkt darf nicht von sich aus explodieren.** Das wäre
Eigeninitiative — ausgeschlossen seit dem ersten Konzept und in Abschnitt 20
mit dem leeren Anfang zurückerobert.

Legitim ist eine andere Lesart, und sie ist die bessere: **Die Explosion ist
nicht spontan, sie ist das Ende seines Lebens.** Ein Punkt existiert nur, weil
ihn jemand erzeugt hat; dass er nicht verlöscht, sondern zerspringt, gehört zu
seinem Leben wie der Nachhall zum Wirbel. Getroffen werden nur die wenigen
großen, und auch die nur in einem Drittel der Fälle. Funken sind selbst kein
Korn und können deshalb nicht weiterzünden.

**Versuch J** senkt die Kornrate von 80 auf 26 je Weckeinheit. Gemessen:

```
vorher   bis zu 800 Körner gleichzeitig
J        bis zu 251 Körner, davon rund 20 große
Funken   höchstens 15 gleichzeitig, ein Zerfall alle paar Sekunden
```

Ein Zerfall war im Standbild nur zu erwischen, indem 159 Einzelbilder danach
abgesucht wurden — das ist die richtige Häufigkeit für „der eine oder andere",
nicht für ein Feuerwerk.

### 23. Zusammenstoß

„Lichtpunkte explodieren bei Kollision!?" — und das ist besser als der Auslöser
aus Abschnitt 22, mit einem Haken, der zuerst zu nennen war: **Zwei Lichtpunkte
können nicht kollidieren, sie stehen beide still.** Genau das wurde in
Abschnitt 21 repariert. Bewegt ist etwas anderes — die Hand, und ein geworfener
Wirbel aus Abschnitt 17.

Damit ist die Explosion nicht nur verursacht, sondern **beabsichtigt**: Zum
ersten Mal kann man auf etwas einwirken, das schon im Bild liegt. Das ersetzt
den Zufall am Lebensende; J behält ihn zum Vergleich.

Zwei Befunde bei der Prüfung:

1. **Nichts löste aus.** Die Schwelle lag bei 280 px/s Handtempo, der
   Testroboter zog mit 227 — und 280 war ohnehin zu hoch gegriffen. Ohne die
   Einzelmessung der Bedingungen (Tempo, Umkreis, Anzahl treffbarer Punkte)
   hätte ich am falschen Ende gesucht. Jetzt 130 px/s.
2. **Die Hand zerschlug, was sie gerade gesetzt hatte.** Vierzehn Zerfälle
   allein beim Malen, weil der kreisende Finger über die eben erzeugten Punkte
   fährt. Ein Punkt muss erst existieren, bevor er getroffen werden kann —
   Mindestalter 0,45 s.

```
Hand quer durch ein Sternfeld     2 Zerfälle bei 5 treffbaren Punkten
geworfener Wirbel, 6 s Flug       6 Zerfälle, bis zu 29 Funken gleichzeitig
```

Funken sind selbst kein Korn und können deshalb nicht weiterzünden — eine
Kettenreaktion wäre Eigenleben.

### 24. Weiß, sparsamer, und ein dritter Auslöser

Drei Rückmeldungen zu K auf einmal: „Es bleiben zu viele Lichtpunkte", „sie
sollten nur weiß sein" und — als Antwort auf die Frage aus Abschnitt 23 — „Ja,
zerspringen ohne Zutun bei Kollision."

Die dritte war die interessante. Sie ergibt einen Auslöser, den es noch nicht
gab: **ein Faden trifft einen Lichtpunkt.** Die Fäden fliegen durch den Wirbel,
den der Benutzer gemacht hat; der Treffer geschieht ohne sein Zutun, aber nicht
ohne seine Ursache. Damit das bezahlbar bleibt, merkt sich ein grobes Raster
(45 × 35 Zellen), wo die treffbaren Punkte liegen — sonst wäre es ein Vergleich
jedes Fadens mit jedem Punkt.

K hat damit drei Auslöser, alle drei kausal:

| Auslöser | Wer bewegt sich |
|---|---|
| Hand fährt über einen Punkt | die Hand |
| geworfener Wirbel überstreicht ihn | der Wirbel, den man geworfen hat |
| ein Faden trifft ihn | das Medium, das man angeregt hat |

Dazu: Lichtpunkte sind in K **weiß**, und es sind weniger. Beim Einstellen habe
ich zuerst weit überzogen — Rate, Quellschwelle und Lebensdauer gleichzeitig
gesenkt, dazu die neuen Fadentreffer, und es blieben zwei bis vier Punkte übrig.
Drei Stellschrauben auf einmal zu drehen ist genau der Fehler, den die
Fassungsleiter eigentlich verhindern soll.

```
vorher (J)   bis zu 800 Körner
zu weit      2 bis 4 Körner
K jetzt      26 bis 35 Körner, 16 Zerfälle im Testlauf
```

A bis J behalten ihre farbigen, zahlreicheren Punkte zum Vergleich.

### 25. Drei Beschwerden, eine Ursache

Zu J: „Das Endprodukt, also was bleibt, ist ein ziemlich diffuses Geschmiere.
Es gibt zu viele Lichtpunkte, die liegen bleiben. Die Wirbel gehen etwas unter
und bewegen sich nicht mehr zentral am Finger, der Radius steuert nach außen."

Die Messung zeigte, dass zwei davon **dieselbe** Ursache haben, und es ist
meine Zuordnung Schleifengröße → Wirbelradius aus Abschnitt 19:

```
Kringel    Wirbelradius   Hitzehof   Abstand Kern ↔ Finger
 30 px         51 px        69 px          10 px
 90 px        111 px       150 px          31 px
170 px        192 px       259 px          58 px
```

Bei großen Schleifen glühte ein Hof von 259 px — ein Viertel der kurzen
iPad-Kante, weich über die Fläche verteilt: das Geschmiere. Der schnellste Ring
lag bei 192 px, also *außerhalb* der Fingerbahn: „der Radius steuert nach
außen". Und der Kern hinkte 58 px hinterher, weil er bei großen, schnellen
Schleifen der Hand nicht folgen kann: „nicht mehr zentral am Finger". Ein
Zusammenhang, den man ohne die drei Zahlen nebeneinander nicht sieht.

**Versuch L** fasst den Wirbel enger (Faktor 0,62 statt 1,15, Deckel 0,125
statt 0,26 der kurzen Kante), verkleinert den Hitzehof (0,95 statt 1,35
Kernradien) und lässt den Kern schneller folgen (20 statt 9):

```
 30 px   Wirbelradius  48 px   Hof  46 px   Abstand   4 px
 90 px                 69 px        66 px            11 px
170 px                104 px        99 px            21 px
```

Dazu ein Auftrag, der sich sammelt statt zu verwaschen: Er folgt jetzt der
Hitze **hoch 1,45** statt linear, sodass die Farbe in der Mitte liegen bleibt
und der Rand ausdünnt. Beim ersten Versuch war die Kurve mit 1,7 zu steil und
fraß die Stärke gleich mit; erst mit stärkerem Grundauftrag (0,50 statt 0,14)
lesen sich die einzelnen Schleifen als Schleifen.

Die zu vielen Lichtpunkte waren bereits in K erledigt; L erbt das.

### 26. Ein Zug ist ein Werk oder ein Beitrag

Der Befund am Gerät stellte L und J/K gegeneinander: „L ist ein farbiges
Abenteuer, die Figuren phänomenaler als bei J/K. Allerdings fließt es nicht,
man wird schnell fertig, die Ergebnisse sind so einzigartig perfekt, dass man
nach wenigen Handstrichen aufhören mag. J/K laden zu weitermachen ein, ein
minutenlanges Schauspiel."

Das ist kein Fehler, sondern eine Eigenschaft, die man einstellen kann. Ein
Zug, der für sich vollständig ist, beendet das Bild. Ein Zug, der ein Beitrag
ist, lädt zum nächsten ein.

**Meine erste Erklärung war falsch, und die Messung hat sie widerlegt.** Ich
hatte vermutet, L fülle die Fläche schneller. Gemessen wurde die mittlere
Helligkeit des Bildes nach n Zügen, alles in Ruhe:

```
Züge         J        L
   1       3,3      1,7
   3      14,9     13,7
   6      22,7     22,8
```

J und L füllen gleich schnell. Die Sättigung ist es also nicht. Was L beendet,
ist die **Lesbarkeit je Zug**: Eine einzelne Schleife steht in L sofort als
fertige Figur da, und wo etwas fertig ist, hört man auf.

**Versuch M** ist L mit einem Viertel des Auftrags (0,15 statt 0,50) — sonst
nichts. Dieselben Figuren, dieselben Radien, dieselbe Farbe; nur braucht es
mehrere Züge, bis eine Figur steht. Gemessen füllt M rund dreimal langsamer als
L (nach sechs Zügen 3,8 statt 22,6). Ob das aus dem fertigen Werk einen Beitrag
macht, entscheidet die Hand, nicht die Zahl.

### 27. Ein Befund, den ich noch nicht erklären kann

Beim Messen der Sättigung fiel im Bild etwas auf, das bei einem einzelnen Zug
nicht sichtbar ist: Nach sechs Zügen liegen **lange, blasse Schrägstriche** über
die ganze Fläche — parallele Bündel, tangential zu den Wirbeln. Sie stecken in
F bis M, nicht erst in M.

Zwei Erklärungen habe ich gebaut und beide durch Messung verworfen:

1. *Verankerte Fäden (Stränge, Knoten, Funken) tragen eingefrorene Hitze und
   segeln quer über die Fläche.* Widerlegt: Unter den 200 schnellsten Fäden nach
   dem Loslassen sind **null** verankerte und null Lichtpunkte — es sind
   ausnahmslos freie Fäden des Mediums.
2. *Nach dem Loslassen schreibt der Wirbel noch sekundenlang weiter, und kalte
   Fäden malen dabei die Fläche voll.* Widerlegt: Ein einzelner Zug hinterlässt
   auch nach 14 Sekunden ein sauberes Wirbelbild ohne einen einzigen Strich, und
   die gemessene Helligkeit **fällt** nach dem Loslassen (0,69 → 0,52), statt zu
   steigen. Auch ein Hitze-Tor auf dem Auftrag (nichts unter 0,05 legt ab) ließ
   die Striche unverändert.

Was bleibt: Die Striche entstehen **während** der Bewegung und erst, wenn
mehrere Wirbel stehen. Fäden mit 260 px Abstand zum nächsten Kern haben Hitze
0,000 und 40 px/s — die können es nicht sein. Die Vermutung ist jetzt: Fäden,
die der Wirbel *während* des Kreisens auswirft, behalten für die knappe Sekunde
ihrer Abkühlung genug Hitze, um im Geradeausflug eine halbe Fläche zu
beschreiben — und weil das Medium am Rand umläuft statt zu enden, kreuzen sie
mehrfach.

Das ist eine Vermutung, keine Messung, und der nächste Versuch hat sie zu
prüfen — nicht M, denn M soll genau eine Änderung tragen.

### 28. Was hinausfliegt, ist fort

Der Befund am Gerät kam als Wunsch, nicht als Fehlermeldung: „Wir sollten mal
versuchen, dass alles, was über die Bildschirmränder herausfliegt, nicht
unbedingt wieder auf einer anderen Seite hereinkommen muss." Dazu, im selben
Atemzug, eine Schutzbedingung: „Was mir unheimlich gut gefällt: wenn das Bild
in Bewegung bleibt, auch wenn nichts passiert."

Beides zusammen ist die eigentliche Aufgabe. Das Medium hat feste 14 000 Fäden.
Wer sie am Rand sterben lässt, dünnt das Feld aus — und mit dem Feld verschwindet
genau die Ruhebewegung, die bleiben soll.

Die Lösung ist ein Rand von 18 % der Kante: Der Faden fliegt sichtbar hinaus,
statt an einer Wand zu verschwinden, und kommt danach **still und kalt** an
einer zufälligen Stelle wieder herein. Still, weil er ohne Geschwindigkeit
startet; kalt, weil seine Hitze auf null geht — ein Faden ohne Hitze und ohne
Tempo ist unsichtbar und legt nichts ab. Das Feld bleibt voll, ohne dass etwas
aufblitzt.

**Versuch N** ist M ohne Umlauf, **Versuch O** ist K ohne Umlauf. Zwei
Grundlagen, weil beide gelobt wurden und die Änderung auf jeder für sich zu
beurteilen ist.

```
nach sechs Zügen, alles in Ruhe        M       N   |     K       O
Fäden im Bild (von 14 000)         13 998  13 032  | 13 993  12 071
mittleres Tempo im Feld (px/s)       23,2    22,9  |   65,2    66,3
Helligkeit der Fläche                 3,1    3,18  |  18,07   18,99
```

Das Feld dünnt nicht aus: 12 000 bis 13 000 der 14 000 Fäden sind jederzeit im
Bild, der Rest gerade draußen und binnen Sekunden zurück. Die Ruhebewegung
bleibt unverändert (22,9 gegen 23,2 px/s; 66,3 gegen 65,2). Die Helligkeit auch.
Die Änderung nimmt also nichts weg — sie nimmt nur den Umlauf.

**Was die Messung nicht zeigt:** ob damit die Schrägstriche aus Abschnitt 27
verschwinden. Mein Maß dafür — Helligkeit im Randband — trennt die Striche
nicht von einem Wirbel, der nah am Rand liegt, und die Streuung zwischen zwei
Läufen ist größer als der Unterschied. Der Umlauf war meine dritte und letzte
Vermutung zur Ursache; sie ist damit weder bestätigt noch widerlegt. Das
entscheidet die Hand.

### 29. „J hängt am Finger" — und ich hatte das Falsche gemessen

Der Befund am Gerät: „J hängt am Finger, die nachfolgenden Versionen nicht so."

Dem widersprach meine eigene Messung aus Abschnitt 25 direkt. Dort war der
Abstand zwischen Fingerspitze und Wirbelkern gemessen worden — J/K: 58 px,
L: 21 px. Nach dieser Zahl hängt L *besser* am Finger. Also war entweder die
Beobachtung falsch oder die Zahl misst die falsche Sache.

Sie misst die falsche Sache. „Hängen" ist keine Aussage über den **Ort** des
Kerns, sondern über die **Masse, die mitkommt**. Gemessen wurde deshalb neu:
ein Kringel, dessen Mittelpunkt langsam nach rechts wandert; dabei für alle
Fäden binnen 200 px um die Fingerspitze der Anteil ihrer Geschwindigkeit in
Handrichtung, geteilt durch das Handtempo.

```
                       J       K       L       M       N
Handtempo (px/s)     186     186     186     186     186
Fäden in Reichweite  1402    1450    1862    1864    1820
davon mit der Hand   94,5    93,1    38,9    39,2    38,3   px/s
Anteil               0,53    0,52    0,22    0,22    0,21
Hitze am Finger     0,053   0,061   0,014   0,014   0,015
```

**J und K nehmen 53 % des Handtempos mit, L bis N nur 22 %** — der Faktor 2,4,
den die Hand als „hängt nicht mehr" spürt. Die Hitze am Finger fällt um das
Vierfache mit. Die Beobachtung war präzise; nur meine Zahl war die falsche.

**Die Ursache ist genau der Umbau, der L besser gemacht hat.** Die
Tangentialgeschwindigkeit des Wirbelfelds geht mit dem Quadrat des
Kernradius: `om = K.om · K.r² / (d² + K.r²)`. L hat den Radius halbiert
(0,125 statt 0,26 der kurzen Kante, Faktor 0,62 statt 1,15) — also viertelt
sich, was in der Ferne noch mitgenommen wird.

Damit steht eine echte Zielkollision im Raum, und keine Seite ist nur ein
Fehler:

```
weiter Wirbel (J/K)         enger Wirbel (L/M/N)
hängt am Finger, es fließt  lesbare, scharfe Figur
Hof 259 px: „Geschmiere"    nur 22 % kommen mit
```

Der Ausweg wäre, beides zu entkoppeln: den Radius klein lassen (scharfe Figur)
und stattdessen die **Reichweite** des Feldes strecken, also den Abfall nach
außen flacher machen statt den Kern zu vergrößern. Das ist ein Vorschlag, keine
Messung, und gehört in einen eigenen Versuch.

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

L ist K mit engerem Wirbel und einem Auftrag, der sich sammelt.
K ist J mit einem anderen Auslöser: Lichtpunkte zerspringen bei Berührung
statt am Lebensende.
J ist I mit weniger Korn — und die großen Punkte zerspringen, statt zu verlöschen.
I ist H plus die Tempofarbe (langsam tief, schnell hell).
H ist G plus das Korn (träge Fäden bleiben als Lichtpunkte stehen).
G ist F plus der begonnene Kreis (ein offener Bogen fliegt weiter).
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
