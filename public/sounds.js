// sounds.js

// Eine Funktion, um den Event-Listener zu registrieren
function registerAudioToggleListener() {
    const audio = document.getElementById('background-audio'); // Das Audio-Element holen
    const audioToggle = document.getElementById('audio-toggle'); // Den Button holen

    if (!audio || !audioToggle) return; // Überprüfen, ob die Elemente existieren

    let isPlaying = !audio.paused; // Aktualisiert den Status basierend auf dem aktuellen Zustand des Audio-Elements

    // Funktion zum Starten oder Pausieren der Musik
    function toggleAudio() {
        if (isPlaying) {
            audio.pause(); // Musik pausieren
            isPlaying = false; // Den Status aktualisieren
            audioToggle.textContent = 'Play sound'; // Den Text des Buttons aktualisieren
        } else {
            audio.play(); // Musik abspielen
            isPlaying = true; // Den Status aktualisieren
            audioToggle.textContent = 'Pause sound'; // Den Text des Buttons aktualisieren
        }
    }

    // Event Listener für den Button, um die Funktion zum Starten/Pausieren der Musik aufzurufen
    audioToggle.removeEventListener('click', toggleAudio); // Vorherige Event-Listener entfernen, um Duplikate zu vermeiden
    audioToggle.addEventListener('click', toggleAudio);

    // Initialer Button-Text setzen
    audioToggle.textContent = isPlaying ? 'Pause sound' : 'Play sound';
}

// Warten, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", registerAudioToggleListener);

// Falls ein JS-Router verwendet wird, sicherstellen, dass der Listener auch bei Navigation zwischen Seiten registriert wird
document.addEventListener('turbolinks:load', registerAudioToggleListener); // Beispiel für Turbolinks
document.addEventListener('pjax:end', registerAudioToggleListener); // Beispiel für PJAX
