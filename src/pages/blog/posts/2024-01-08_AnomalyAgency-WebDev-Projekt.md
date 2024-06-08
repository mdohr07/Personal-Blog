---
layout: "../../../layouts/BlogPostLayout.astro"

title: Die Anomaly Agency - Ein persönliches Web Dev Projekt 🛸
date: 2024-01-08
author: mdohr07
image: {}
draft: false
description: Die Anomaly Agency - Ein persönliches Web Dev Projekt 
category: Frontend Design
---
![Anomaly Agency](/img/anomalyagency.png)

Hallo 👋,

vor kurzem habe ich ein neues Projekt für mein Portfolio abgeschlossen, das ich gerne mit euch teilen möchte. Es handelt sich um eine Website für die fiktive "Anomaly Agency", gegründet von den (besonders bei mir) beliebten Charakteren Mulder und Scully aus Akte X. Ich fand, dass mein Portfolio eine Business-Website gebrauchen könnte, aber ich wollte gleichzeitig sicherstellen, dass das Projekt mir persönlich Spaß macht. Die "Anomaly Agency" haben die beiden Agenten nach ihrem Austritt aus dem FBI gegründet (das habe ich mir jedenfalls so ausgedacht). Ein paar Angestellte sollte es auch geben. So musste meiner Meinung nach Walter Skinner unbedingt dabei sein und außerdem brauchten sie eine:n Hacker:in. Da dachte ich natürlich als erstes an "Die Einsamen Schützen", aber hatte vergessen - achtung Spoiler? - das diese in der Serie gestorben waren. Also musste Vertretung her: Lisbeth Salander aus der Millenium Trilogie von Stieg Larson natürlich. Und in Form der einzig wahren Besetzung Noomi Rapace.

Direkter Link zu Anomaly: https://mdohr07.github.io/anomalyagency/

## Warum Anomaly Agency?

Die Idee, eine Seite um Mulder, Scully und ihre Agentur zu bauen, kam mir schnell. Die Herausforderung bestand darin, dem Ganzen einen realistischen Look zu verleihen, um die Seite seriös wirken zu lassen. Die größte Herausforderung war es, die Website echt und authentisch aussehen zu lassen, trotz des ungewöhnlichen Themas.

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3FjdG5lcXlmZ2hpZXYwdzk3bW1neTlyenduYXc0YjB2amZqNWx4bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JHZkNAJMTYCQRhe/giphy.gif">

## Technologien und Herausforderungen

Die Website besteht hauptsächlich aus HTML und CSS, mit einem kleinen JavaScript-Schnipsel für das gewisse Etwas. Die größte Herausforderung war ursprünglich die Responsiveness aufgrund der vertikalen Navigation. Nach einem Neustart und einer saubereren Umsetzung konnte ich die Seite jedoch erfolgreich realisieren.

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Every element in the array is accessed as "entry" //
        if (entry.isIntersecting) { 
            // if is intersecting, add class "show" //
            entry.target.classList.add('show');
        } else {
            // to do this multiple times, remove the class when not intersecting //
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
// observe and loop over hidden elements //
hiddenElements.forEach((el) => observer.observe(el));
```

## Designentscheidungen

Die Farbgebung orientiert sich an dem Original-Design von Akte X, jedoch mit einem ruhigeren Grünton. Die horizontale Navigation, trotz anfänglicher Schwierigkeiten, habe ich beibehalten, da sie elegant aussieht und nicht so oft verwendet wird.

Aus diesem Projekt habe ich gelernt, sparsam mit der Gestaltung umzugehen, aber auch mutig zu sein und Statements zu setzen. Das wird definitiv in mein nächstes Projekt einfließen.

## Blick in die Zukunft: 3D und Frontend Design

Nun, da dieses Projekt abgschlossen ist, spiele ich mit dem Gedanken, 3D und Frontend Design zu verbinden. Ich weiß, dass dies seit letztem Jahr oder so ein großer Trend war. Allerdings habe ich mich noch nicht damit beschäftigt und weiß nicht, was mich erwarten würde.

Wieso gerade das? Nich nur, weil es gerade "in" ist. Sondern eher, weil ich ja immer noch meine Kunst als Hobby betreibe. Und ja - ich kann auch 3D. Da habe ich mich neulich daran gemacht, eine kleine Szene in Blender zusammenzustellen. So kam mir dann der Gedanke, ob und wie sich das wohl in einer Website weiterverwenden ließe. Das fände ich wirklich spannend, mal auszuprobieren! Da ich das 3D Modell ja "nur so nebenbei" mache, dauert es leider etwas, bis ich fertig werde. Aber wenn es soweit ist, möchte ich mich mit der Möglichkeit eines Frontends basierend darauf mal näher auseinandersetzen! 🤓

Abschließend freue ich mich darauf, meine Kenntnisse im Frontend Design weiter auszubauen und die Möglichkeiten von 3D in zukünftigen Projekten zu erkunden. Stay tuned für weitere Abenteuer in der Welt des Web Developments!

Vielen Dank fürs Lesen, und bis bald! 👽✨