
// Typewriter text
const text = "Wishing you endless smiles, love, and happiness. May your day be as beautiful as your soul. 💖";
let index = 0;
const typedText = document.getElementById("typed-text");

function typeWriter() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();

// Confetti burst on load
confetti({
  particleCount: 150,
  spread: 70,
  origin: { y: 0.6 }
});

// Audio mute/unmute button
const audio = document.getElementById("bg-music");
const audioToggle = document.getElementById("audio-toggle");

audioToggle.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    audioToggle.textContent = "🔊";
  } else {
    audio.pause();
    audioToggle.textContent = "🔇";
  }
});
