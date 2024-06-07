---
layout: "../../../layouts/BlogPostLayout.astro"

title: Künstlerische Einflüsse auf die Frontend-Entwicklung 🎨
date: 2023-11-11
author: mdohr07
image: {}
description: Künstlerische Einflüsse auf die Frontend-Entwicklung
category: Frontend Design
---

Ich war schon immer ein sehr visueller Mensch. Es hilft mir ungemein, wenn ich durch das Visuelle einen Bezug herstellen kann, und ich denke, das hat unter anderem mit meinem engen Bezug zur Kunst zu tun. Ich denke oft in Bildern, und durch Bilder jeglicher Art entwickle ich ein Gefühl, eine Idee oder eine Assoziation, die mich verstehen lässt, was ich zu tun habe. Erst dann kann ich auch die Worte finden, meine Idee zu beschreiben.

In der Kunst ist es meist ein Ziel, dass das Kunstwerk im Betrachter ein Gefühl auslöst, und das ist bei Websites nicht viel anders. In der Welt des Webdesigns möchte man jedoch die Benutzer anziehen und nicht unangenehme Gefühle vermitteln. Mein Ansatz besteht darin, zuerst ein Gefühl zu finden, einen Vibe, und mir davon ein Bild zu machen - sei es in meinem Kopf oder durch digitale Entwürfe und Skizzen.

## Kreative Denkweisen in den Code integrieren

Bei der Gestaltung von Websites frage ich mich zuerst, welches Gefühl ich vermitteln möchte. Dabei benutze ich gerne Farben, Fonts, Formen und Bilder. Der Spielraum für Kreativität ist enorm, und ich liebe es, damit zu experimentieren. Dabei denke ich auch an die Anfänge des Internets, wo auffällige Elemente wie blinkende Texte, Midis und scheinbar außer Kontrolle geratene animierte GIFs akzeptiert waren. Diese Details verliehen jeder Website einen individuellen Charakter, der etwas aus der inneren Welt des jeweiligen Individuums preisgaben. Obwohl solche Praktiken heute nicht mehr so populär sind, finde ich es spannend, darüber nachzudenken, welche solcher oder ähnlichen kreativen Elemente dennoch in moderne Websites integriert werden könnten.

Im Code selbst sind künstlerische Ansätze begrenzt, aber die Strukturierung und Gliederung des Codes können dennoch eine gewisse Ästhetik vermitteln. Eine sinnvolle Gestaltung ist zum Beispiel durch das Vergeben von einleuchtenden und leicht nachvollziehbaren Variablen- und Funktionsnamen möglich. 
Wie man auch in meinen Repositories auf GitHub schnell erkennt, arbeite ich besonders viel mit CSS. Dabei bin ich mir noch nicht so ganz darüber klar, was die bestmögliche Reihenfolge der jeweiligen Deklarationen ist. Es ergibt zwar für mich Sinn, mit dem Layout und/oder Flex- und Grid zu beginnen. Aber andererseits gefällt es mir persönlich, die Hintergrundfarbe an oberste Stelle zu setzen. Einfach weil ich mich tendenziell an Farben orientiere. So bin ich also derzeit noch dabei, die ideale Ordnung zu finden.

Auch die Wahl eines ansprechenden Code-Editors trägt dazu bei, dass die Arbeit mehr Spaß macht. Wenn die Entwicklungsumgebung nach meinem Geschmack ist, macht die Arbeit darin noch viel mehr Spaß. Das mag oberflächlich klingen, aber: ich liebe Syntax Highlighting und wie es meinen Code in schönen Farben aussehen lässt!

```css
.about-grid {
    background-image: url('img/pexels-burak-the-weekender-1253050.jpg'); /* Aha! Hintergrund-Bild */
    background-size: cover;
    background-position: center;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    column-gap: 2rem;

    width: 95%;
    min-height: 100px;
    
    margin-top: 2%;
    margin-left: 0px;
    margin-bottom: 100px;
    padding-top: 1%;
    padding-right: 50px;
    padding: 2%;

    border: 1px solid #222;
    text-align: justify;
    text-justify:distribute;
    letter-spacing: 0px;
    word-spacing: 3px;
}
```

## Ästhetische Prinzipien aus der Kunst im Frontend-Design

Es macht mir furchtbar viel Spaß, mich mit Farben auszutoben, aber auch das exakte Gegenteil macht mir genauso viel Freude. Egal, ob es ums Malen, Zeichnen oder um Frontend Design geht, finde ich es toll, alle Farben nach Lust und Laune zur Verfügung zu haben und ein passendes Zusammenspiel zu finden, das bunt, vielleicht sogar schrill, aber nicht chaotisch ist.

Besonders inspiriert hat mich das Vierfarbensystem des GameBoy Color, weshalb ich mich für diesen Blog auf vier Farben beschränkt habe. Die Idee, dieses Prinzip durch Beschränkung auf nur zwei Farben noch weiter zu treiben, finde ich im Moment besonders reizvoll. Auch die Überlegungen zur Lenkung des Betrachterblicks und zur optimalen Anordnung von Elementen und Texten, beeinflusst durch meine Erfahrungen als Comiczeichnerin, spielen eine große Rolle in meinem Designprozess.

Ob die Verbindung von Kunst und Code zu innovativeren und benutzerfreundlicheren Lösungen führen kann, glaube ich nicht unbedingt. Ich glaube aber, dass es wichtig ist, dass jede:r für sich die jeweils beste Arbeits- und Lernmethode entdeckt. Mit "beste" meine ich die Methode, die beim Vorankommen, Verstehen, Lernen, Erinnern und Verinnerlichen hilft. Denn das bringt Erfolgserlebnisse, also auch Motivation und Freude. Vielleicht sollte man also sagen, dass Kreativität zu innovativeren und benutzerfreundlicheren Lösungen führen kann, nicht unbedingt Kunst. Wobei nun ein philosophischer Gedanke auftaucht: Wenn Coding Kunst ist und man die Kunst des Codens beherrscht - also ein Künstler ist -, dann muss das doch zu innovativen Lösungen führen.

### Praktisches Beispiel

Zum Beispiel habe ich in [Galaxy Groove](https://github.com/mdohr07/galaxygroove) viel Spaß dabei gehabt, mir das Konzept zu überlegen, wie eine Retro Spacegame Community aussehen könnte und mit den niedlichen Pixelgrafiken konnte ich auch meiner Kreativität freien Lauf lassen. Leider habe ich mir immer noch nicht die Zeit genommen, einen Prototypen des Spiels selbst zu erstellen, weil ich anderen Baustellen Vorrang gegeben habe.
Es gibt ja tatsächlich einen Trend zum Old Web, zumindest visuell. Vielleicht sollte ich dazu aber einen gesonderten Beitrag schreiben! :-)

![Galaxy Groove Screenshot](https://camo.githubusercontent.com/17bf8f12a284e0f08a8761e20b9dff980f1f8e7189aebc06c13b2fe200c9eacd/68747470733a2f2f6d646f687230372e6769746875622e696f2f67616c61787967726f6f76652f696d616765732f67616c61787967726f6f7665312e706e67)

## Entwicklungstools und Ressourcen

Als ich damals mit dem Coden angefangen habe, gab es noch nicht so viele Optionen, und ich habe hauptsächlich im Standard Text-Editor gearbeitet und auch in dem Editor, der beispielsweise bei Geocities schon integriert war. Später versuchte ich mich in Dreamweaver, was auch funktionierte. So richtig gefallen hat mir der Editor allerdings nicht. Dann habe ich Brackets entdeckt, und das war der Editor meiner Wahl. Es folgte eine lange Pause, in der ich keinen Code-Editor brauchte. Und jetzt, da ich nach langer Zeit zum Web Design oder auch Web Development zurückgekehrt bin, gibt es VS Code. Im Zusammenhang mit meiner Weiterbildung habe ich zuerst IntelliJ IDEA installiert und benutzt. Ich hatte es mit Java zu tun und da erschien mir IntelliJ als die beste Option. Als das Thema Java beendet war und ich mich wieder Websites mit HTML und CSS zuwandte, habe ich dann aber VS Code installiert. Im Moment habe ich beide, aber VS Code ist mein klarer Favorit.

### Feedback, Community und persönliche Weiterentwicklung

Mein Hauptaugenmerk liegt derzeit auf JavaScript, das ist essenziell und ich habe einiges nachzuholen. Wenn ich mich dann bereit fühle, werde ich mich auf jeden Fall mit einem der bekannten und beliebten Frontend Frameworks beschäftigen. Aber ich möchte auch mehr über Git lernen und zusehen, das Beste aus GitHub herauszuholen. Neben dem zuvor erwähnten zwei-Farben-Design möchte ich gerne aktuelle Trends des neuen Old-Web-Ansatzes erkunden, aber ich habe auch Lust, etwas ganz "frisches" zu probieren. Ich denke da in Richtung Space und SciFi.

Vielen Dank, dass du vorbeigeschaut hast, und bis bald! ✌️
