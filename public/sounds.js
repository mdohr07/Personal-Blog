// sounds.js

// Warten, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('background-audio'); // Das Audio-Element holen
    const audioToggle = document.getElementById('audio-toggle'); // Den Button holen

    let isPlaying = false; // Eine Variable, um zu verfolgen, ob die Musik gerade abgespielt wird

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
    audioToggle.addEventListener('click', toggleAudio);
});
