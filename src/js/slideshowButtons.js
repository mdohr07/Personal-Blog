export function setupImageSlider(sliderId) {
    const startButton = document.getElementById(`startButton${sliderId}`);
    const pauseButton = document.getElementById(`pauseButton${sliderId}`);
    const slideshow = document.querySelector(`#slideshow-wrapper${sliderId}`);
  
    let isPlaying = true;
  
    startButton.addEventListener("click", () => {
      if (!isPlaying) {
        slideshow.style.animationPlayState = "running";
        isPlaying = true;
      }
    });
  
    pauseButton.addEventListener("click", () => {
      if (isPlaying) {
        slideshow.style.animationPlayState = "paused";
        isPlaying = false;
      }
    });
  }

  
  setupImageSlider(1); // Für den ersten Slider
setupImageSlider(2); // Für den zweiten Slider