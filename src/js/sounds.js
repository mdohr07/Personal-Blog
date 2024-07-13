document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.hoverSound');
    const sound = new Audio('/sounds/game2.mp3'); // Stelle sicher, dass der Pfad korrekt ist
    let soundEnabled = true;
  
    const toggleSoundButton = document.getElementById('toggle-sound');
  
    function toggleSound() {
      soundEnabled = !soundEnabled;
      toggleSoundButton.textContent = soundEnabled ? 'Turn sound off' : 'Turn sound on';
    }
  
    toggleSoundButton.addEventListener('click', toggleSound);
  
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        if (soundEnabled) {
          sound.play().catch(error => {
            console.error('Playback prevented:', error);
          });
        }
      });
    });
  });
  