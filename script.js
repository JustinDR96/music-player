// Récupérez les éléments HTML dont vous avez besoin
const artistElement = document.getElementById("artist");
const titleElement = document.getElementById("title");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const progressBar = document.querySelector('input[type="range"]');
const audio = new Audio("audio/Jarrive.mp3"); // Remplacez "votre_fichier_audio.mp3" par le chemin de votre fichier audio

let isPlaying = false;

// Événement pour le bouton lecture
playButton.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    playButton.style.display = "none";
    pauseButton.style.display = "inline-block";
  }
});

// Événement pour le bouton pause
pauseButton.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playButton.style.display = "inline-block";
    pauseButton.style.display = "none";
  }
});

// Mise à jour de la barre de progression
audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progress = (currentTime / duration) * 100;
  progressBar.value = progress;
});

// Événement pour la barre de progression
progressBar.addEventListener("input", () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

// Événement lorsque la lecture est terminée
audio.addEventListener("ended", () => {
  isPlaying = false;
  playButton.style.display = "inline-block";
  pauseButton.style.display = "none";
});

// Chargez le fichier audio lorsque la page est prête
window.addEventListener("load", () => {
  audio.load();
});
