---
layout: "../../../layouts/BlogPostLayout.astro"

title: Was ich über Kontrollstrukturen in JavaScript gelernt habe 🧠
date: 2023-11-27
author: mdohr07
image: {}
description: Was ich über Kontrollstrukturen in JavaScript gelernt habe
category: JavaScript
---

Ich denke, es ist sehr wichtig, als Webentwickler:in ein Verständnis für JavaScript zu haben. Es ist einfach Teil der Sache. Damals, als ich angefangen habe, Websites zu bauen, war JavaScript noch ganz neu, und es gab noch keinen wirklichen Bedarf für mich, es zu lernen. Ich habe ja nur für mich selbst ein paar statische Seiten erstellt. Später in meinen Jobs (Shop-Administration und Webdesign) war es nicht von mir gefordert, und so bin ich sozusagen "drumherumgekommen". Jetzt ist das anders, denn ich will Webentwicklung zu meinem Hauptberuf machen und nicht so wie früher nur nebenbei. Also, es wird ernst!

Ein paar Fakten am Rande: JavaScript ist eine **Interpreter-Sprache**, die 1995 vom Browser-Hersteller unter dem Namen "Livescript" erfunden wurde, um Webseiten interaktiver zu machen. Zu Beginn wurde JavaScript hauptsächlich dazu verwendet, um Grafiken zu animieren und Formulare zu validieren. Im Laufe der Zeit wuchsen die Fähigkeiten.

JavaScript ist eine Interpreter-Sprache. Solche Programmiersprachen werden zur Laufzeit übersetzt. Diese Programme laufen etwas langsamer, aber das Ergebnis ist im Gegensatz zu Compiler-Sprachen sofort sichtbar.

Da jeder Webbrowser JavaScript versteht, ist es eine nahezu universelle Programmiersprache, die überall ablauffähig ist. Das macht es für mich spannend und ist ein großer Ansporn. Ich denke nicht nur an Websites, sondern auch an kleine Spiele, wie man sie z.B. auf itch.io findet. Ich denke an retro Plattformer oder Spaceshooter. So etwas hinzubekommen, wäre noch ein Traum für mich 🤓

**Herausforderungen beim Lernen von JavaScript**

Die Haupt­herausforderung im Moment ist, Konzepte und Zusammenhänge zu verstehen. Die Lernapp [mimo](https://mimo.org/) hilft mir schon gut dabei, aber mit dem bisher dort Gelernten allein kann ich noch nicht viel anfangen. Es reicht zum Beispiel (noch?) nicht, um eine Funktion in eine Website zu integrieren. Für so etwas folge ich Tutorials und mache das Gezeigte nach. Dabei versuche ich so gut es geht, das Ganze auch zu verstehen und nachzuvollziehen. Ich habe das Gefühl, bei einigen Dingen hat es da noch nicht so richtig "klick" gemacht. Da hilft es nur, immer dabei zu bleiben und nicht aufzugeben.

Ich glaube, Arrays und Schleifen sind für mich schon mal ein guter Ansatz gewesen, JavaScript besser zu verstehen. Besonders, weil ich mir dabei Szenarien vorstellen kann, in denen ich diese selbst anwenden könnte. Das macht es für mich gleich weniger abstrakt und leichter im Gedächtnis zu behalten. Code-Beispiele dazu bekomme ich auch von Mimo.

**Beispiele aus meiner eigenen Praxis**

Ich habe, bevor ich irgendeine Ahnung von JavaScript hatte, angefangen, ein textbasiertes Abenteuer zu implementieren, auch nach Tutorial. Ich bin nicht fertig geworden, weil es doch schnell etwas umfangreich wird - allein die ganzen unterschiedlichen Antwortmöglichkeiten passend unterzubringen und zu überlegen, was die Konsequenzen sind. Dann fing die Weiterbildung an, und dann hatte ich auch einfach nicht mehr so die Zeit, mich damit zu beschäftigen. Wenn ich mir den Code heute anschaue, sehe ich Dinge, über die ich während der Weiterbildung gelernt habe. Zum Beispiel, wofür die unterschiedlichen Klammern eigentlich verwendet werden, boolesche Werte und `let` und `const`. Sogar `if`- und `while`-Statements kommen vor. Wieder andere Dinge erkenne ich aus den Websiteprojekten wieder, in denen ich zu Übungszwecken JavaScript untergebracht habe. Zum Beispiel `document.getElementById` und Event Listeners. Obwohl es immer noch Unklarheiten gibt, verstehe ich jetzt schon viel besser, was ich da gecodet habe, als vor einem halben Jahr.

<!-- Platz für Code-Beispiel -->
<hr>

## Die Macht der Kontrollstrukturen: if, if/else, else if, while, for

Das Lernen von Schleifen (if, if/else, else if, while, for) hat mir bisher vor allem gezeigt, wie JavaScript mit Logik umgeht und den Code abarbeitet. Es folgen ein paar Beispiele von Dingen, die ich gelernt habe.

![What if I'm a cat](https://media.giphy.com/media/cHjjNiit17C6Y/giphy.gif)

#### ➡️ if-Statements
Bedingungen entscheiden, ob der Code läuft oder ob er übersprungen wird. Sie stehen in Klammern.
Anstatt den Boolean `true` zu verwenden, kann dieser in einer Variable gespeichert und als Bedingung für das if-Statement benutzt werden.

```javascript
if (Bedingung) {
    // Codeblock
}
```

```javascript
let KatzeIstHungrig = true;
if (KatzeIstHungrig) {
    console.log("Füttere sofort die Katze! 🚨");
}
```

```javascript
const regenwetter = true;
if (regenwetter) {
    console.log("Willkommen in Bremen! ☔");
}
```

Braucht man beispielsweise in einem Spiel 2000 Punkte, um einen Bonus zu erhalten, muss das Programm eine bestimmte Aktion **nur dann** ausführen, wenn die gegebene Bedingung `true` ist.

```javascript
let spielerPunkte = 1500; // Annahme: Der Spieler hat 1500 Punkte
const bonusSchwelle = 2000;

// Sind Punkte genug für den Bonus?
if (spielerPunkte >= bonusSchwelle) {
    // Wenn ja, tu dies:
    console.log("Herzlichen Glückwunsch! Du hast den Bonus freigeschaltet!");
}
// Wenn die Bedingung nicht erfüllt ist, wird der Code hier einfach übersprungen

```
<details>
<summary>
Hier ist ein Beispiel für eine einfache Glückwunsch-Nachricht mithilfe eines `if`-Statements... </summary>

```javascript
let spieler = 'Heini';
let punkte = 144;
let minPunkte

 = 100;

if (punkte >= minPunkte) {
    console.log(`Gut gemacht, ${spieler}! 🏆`);
}

// Output: //
// Gut gemacht, Heini! //
```
</details>

Was, wenn die Antwort bei einem Quiz nicht stimmt? In so einem Fall kann `!==` benutzt werden, um zu prüfen, ob die Antwort *nicht* mit "Ellen Ripley" übereinstimmt.

```javascript
let antwort = "Ellen DeGeneres";
if (antwort !== "Ellen Ripley") {
    console.log(`${antwort} ist falsch!`);
}

// Output: //
// Ellen DeGeneres ist falsch! //
```

![Ellen Ripley](https://media.giphy.com/media/hb8qXEWcWBz44/giphy.gif)

#### ➡️ if/else und else if Statements

Anstelle von zwei `if`-Statements wird ein `if`/`else`-Statement benutzt.

```javascript
let esGibtKuchen = false;
if (esGibtKuchen) {
    console.log("Juhu! 🍰");
} else {
    console.log("Es gibt keinen Kuchen 😢");
}

// Output: //
// Es gibt keinen Kuchen 😢 //
```

Das `else`-Statement hat keine eigene Bedingung in Klammern. Sein Codeblock läuft immer dann, wenn die Bedingung von `if` nicht erfüllt wird.

Für eine spezifischere Bedingung kann zusätzlich noch `else if` verwendet werden.
Wenn es keinen Kuchen gibt, muss jemand zum Bäcker gehen und schnell welchen kaufen. Hier wird eine Nachricht angezeigt, wenn `Tag` nicht `"Sonntag"` oder `"Sonnabend"` ist:

```javascript
let tag = "Montag";
if (tag === "Sonntag") {
    console.log("Die Bäckerei hat ab 12 Uhr mittags zu.");
} else if (tag === "Sonnabend") {
    console.log("Die Bäckerei hat bis 15.00 Uhr geöffnet.");
} else {
    console.log("Die Bäckerei hat bis 17.00 Uhr geöffnet.");
}

// Output: //
// Die Bäckerei hat bis 17.00 Uhr geöffnet. //
```

In diesem Fall kann das **else**-Statement verwendet werden, um dessen Codeblock laufen zu lassen, wenn weder die Bedingung von `if` noch die von `else if` erfüllt ist.
<hr>

#### ➡️ While-Loops

![Fruitloops](https://media.giphy.com/media/ZZYZyLNnT9xT3OKaKQ/giphy.gif)

Die while-Schleife **besteht nur aus einer Bedingung**. Solange diese Bedingung wahr ist, wird der Code innerhalb der Schleife ausgeführt. Die Schleife läuft weiter, bis die Bedingung nicht mehr erfüllt ist. Also muss man aufpassen, dass es keine Endlosschleife gibt.

Innerhalb des Codeblocks kann die Schleife gestoppt werden, indem man `machWeiter` auf `false` setzt, sodass die Bedingung `false` zurückgibt.

```javascript
let machWeiter = true;
while (machWeiter === true) {
    console.log("weiter machen");
    machWeiter = false;
}

// Output: //
// weiter machen //
```

Die erste Schleife durchläuft den gesamten Codeblock, weil `machWeiter` zuerst `true` ist, läuft dann aber nicht noch einmal, wenn `machWeiter` auf `false` gesetzt wird.

```javascript
let machWeiter = true;
while (machWeiter === true) {
    console.log("machWeiter: " + machWeiter);
    machWeiter = false;
    console.log("machWeiter: " + machWeiter);
}

// Output: //
// machWeiter: true //
// machWeiter: false //
```

##### To infinity and beyond! ✊

Dieser Loop allerdings läuft unendlich weiter, weil die Bedingung `true` bleibt:

```javascript
let isLoading = false;
while (true) {
    console.log("Loading Game...");
}

// Output: //
// Loading Game... //
// Loading Game... //
// Loading Game... //
// Loading Game... //
// ... ... ... ... //
```

Zwar ist der Anfangswert von `isLoading` `false`, aber die **Schleifenbedingung** lautet `while (true)`. Die Bedingung wird bei jeder Iteration überprüft, und da `true` konstant wahr ist, wird die Schleife unabhängig von der anfänglichen Variable isLoading unendlich weitergeführt.
Die Initialisierung `let isLoading = false;` hat somit keinen Einfluss auf die Schleifenbedingung selbst. Wenn die Schleifenbedingung immer `true` ist, wird die Schleife unendlich ausgeführt, ganz egal, was außerhalb der Schleife passiert.

**Aber:** Die folgende While-Schleife überspringt ihren Codeblock, da die Bedingung auf `true` prüft, der Wert von `isLoading` aber `false` ist.

```javascript
let isLoading = false;
while (isLoading === true) {
    console.log("Loading Game");
}
```

Dasselbe hiermit:

```javascript
let neueKommentare = true;
while (neueKommentare === true) {
    neueKommentare = false;
    console.log("Neuer Kommentar:");
    console.log("Mblip: Uh, ich liebe dein Raumschiff-Designs!");
}

// Output: //
// Neuer Kommentar: //
// Mblip: Uh, ich liebe dein Raumschiff-Designs! //
```


<details>
  <summary>
Hier nun noch eine Erklärung zu den einzelnen Schritten...
  </summary>

```javascript
/* Die Variable neueKommentare wird mit dem Wert true initialisiert */
let neueKommentare = true;

while (neueKommentare === true) {
/* Hier beginnt die While-Schleife. Sie prüft, ob neueKommentare gleich true ist */
/* Da neueKommentare zu Beginn tatsächlich true ist, wird der Schleifenblock betreten und ausgeführt */
    neueKommentare = false;
/* Durch das Setzen von neueKommentare auf false wird die Bedingung (neueKommentare === true) nicht mehr erfüllt */
/* Das Programm merkt, dass neueKommentare jetzt false ist und wiederholt daher den Durchlauf nicht */ 
    console.log("Neuer Kommentar:"); 
    console.log("Mblip: Uh, ich liebe deine Raumschiff-Designs!");
}
```
</details>

Das Ergebnis ist, dass der Schleifenblock nur einmal durchlaufen wird, da neueKommentare nach dem ersten Durchlauf auf false gesetzt wird. Danach wird die Bedingung der while-Schleife nicht mehr erfüllt, und die Schleife wird nicht erneut durchlaufen.

<details>
<summary>Drei Varianten die alle zum selben Ergebnis führen...</summary>

```javascript
let repeat = true;
while (repeat) {
    repeat = false;
}

let repeat = true;
while (repeat === true) {
    repeat = false;
}

let repeat = true;
while (true) {
    repeat = false;
}
```

</details>


```javascript
while (true) {
    console.log("To infinity and beyond! ✊")
}

// Output: //
// To infinity and beyond! ✊ //
// To infinity and beyond! ✊ //
// To infinity and beyond! ✊ //
// To infinity and beyond! ✊ //
...
```

![Fruitloops](https://media.giphy.com/media/XkDyB1jCZMxUs/giphy.gif)

##### Kontrolle mit Zählvariablen

Um zu kontrollieren, wie oft eine `while` Schleife durchlaufen wird, fängt man mit einer Variable an, die auf einen numerischen Werte gesetzt ist. Das nennt sich **Counter Variable** (Zählvariable).

```javascript
let counter = 1;
```

Dann benutzt man einen Vergleich in der Bedingung, um den Wert der Zälvariable mit einer Nummer zu vergleichen:

```javascript
let counter = 1;
while (counter < 4) {}
```
Innerhalb des Code-Blocks lassen wir die Bedingung `counter < 4` zurückgeben und geben den Wert der Zählvariablen aus. Diese wird dann durch das Inkrementieren mit `++` um 1 erhöht, bis die Bedingung counter < 4 nicht mehr erfüllt ist

```javascript
let counter = 1;
while (counter < 4) {
    console.log(counter);
    counter ++;
}

// Output: //
// 1 //
// 2 //
// 3 //
```

Durch das Ändern der Bedingung wird der Schleife mitgeteilt, wann Schluss ist. Zum Beispiel durch Ändern der Bedingung zu `counter < 10`:

```javascript
let counter= 1;
while (counter < 10) {
    console.log(counter);
    counter++;
}

// Output: //
// 1 //
// 2 //
// 3 //
// ... //
// 9 //
// 10 //
```

![I control you](https://media.giphy.com/media/5xtDarLsRWXP3jkKi08/giphy.gif)

##### Eine Frage der Reihenfolge

Da der ganze Code-Block abläuft, hat die Reihenfolge des geschriebenen Codes einen Einfluss auf das, was die Konsole ausgibt.

```javascript
let counter= 5;
while (counter < 10) {
    counter++;
    cosole.log(counter);
}

// Output: //
// 6 //
// 7 //
// 8 //
// 9 //
// 10 //
```

Im obigen Beispiel wird vor der Ausgabe in der Konsole angefangen zu inkrementieren, weswegen anstatt bei 5 bei 6 angefangen wird.

Im nächsten Beispiel kommt wiederum erst das `console.log();` - die 10 bleibt unveränderter Anfangspunkt - und erst dann werden jeweils 10 dazugerechnet, solange es unter 50 ist.

```javascript
let counter = 10;
while (counter < 50 && counter >= 10) {
    console.log(counter);
    counter += 10;
}

// Output: //
// 10 //
// 20 //
// 30 //
// 40 //
```

So kann man es auch schaffen, dass nicht bei 0 sondern bei 1 angefangen wird zu zählen.

In diesem Beispiel wird aufwärts gezählt, das Limit ist 3:

```javascript
let steigung = 0;
while (steigung < 3) {
    steigung++;
    console.log(steigung)
}

// Output: //
// 1 //
// 2 //
// 3 //
```
<hr>

#### ➡️ for-Loops

Mit for-Schleifen kann dasselbe Programm wie zuvor mithilfe von `while` verständlicher geschrieben werden.

Ein for-Loop lässt uns eine Zählvariable innerhalb der Klammern benutzen: `for (let counter = 1;) {}`
Ein gängiger Name für eine Zählvariable ist der Buchstabe `i`, welcher für "index" steht.

Nach dem Semikolon folgt eine Bedingung wie `i < 5` und `;`, zum Beispiel so: `for (let i = 1; i < 5;) {}`
Zum Schluss benutzen wir wieder `++` um die Zählvariable zu inkrementieren: `for (let i = 1; i < 5; i ++) {}`

```javascript
for (let i = 1; i < 5; i++) {
    console.log("Runde " + i);
}

// Output: //
// Runde 1 //
// Runde 2 //
// Runde 3 //
// Runde 4 //
```
<details>

<summary>Beispiel, bei dem heruntergezählt wird...</summary>
Dieses Mal wird heruntergezählt und die Schleife hört bei 1 auf.

```javascript
for (let i = 5; i > 0; i--) { /* Solange i > 5 wird, ziehe 1 ab */
	console.log(i);
}

// Output: //
// 5 //
// 4 //
// 3 //
// 2 //
// 1 //
```
</details>

<details>
<summary>Um die 0 mit einzubeziehen, benutzt man `>=` anstelle von `>`, und zwar so...</summary>

```javascript
for (let i = 5; i >= 0; i--) { /* Solange i > 5 wird, ziehe 1 ab */
	console.log(i);
}

// Output: //
// 5 //
// 4 //
// 3 //
// 2 //
// 1 //
// 0 //
```
</details>

Es können auch Strings benutzt werden:

```javascript
let lyric = "I want to hold your h";
for (let i = 0; i < 6; i++) {
    lyric += "a";
}
lyric += "nd";
console.log(lyric)

// Output: //
// I want to hold your haaaaaand //

```

```javascript
const benachrichtigungen = 4;
for (let i = 0; i < benachrichtigungen; i++) {
    console.log("Du hast neue emails 📧");
}
```

<hr>

## Projekte für die Zukunft

In Zukunft fände ich den Retro-Plattformer oder den Spaceshooter toll. Es muss auch nichts Überambitioniertes sein. Auch einen Neustart des textbasierten Rollenspiels fände ich spannend. Vorerst konzentriere ich mich aber darauf, was ich für Websites benutzen kann. Also eher Praktisches als Spielerisches. Ich habe gerade angefangen, mich mit Funktionen zu beschäftigen. Das Thema finde ich auch besonders spannend, weil es mich sicherlich diesem Ziel näher bringt.

##### Ressourcen

[Web Dev Simplified](https://www.youtube.com/c/WebDevSimplified)! Die Tutorials sind total gut und verständlich erklärt, es gibt viele interessante Themen (auch für die Zukunft), und Kyle ist dazu auch noch sympathisch. Was ich aber besonders positiv hervorheben möchte: Web Dev Simplified hat einen YouTube-Kanal, GitHub, wo man sich oft den Code zum Video direkt ansehen kann, und auch einen Blog. Beim Lernen ist es wirklich hilfreich, alles aus einer Hand bekommen zu können.

Vielen Dank fürs Lesen, und bis bald! 👩‍💻✨