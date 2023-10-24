import audioTracks from "./audioData.js";

document.addEventListener("DOMContentLoaded", function () {
  // Récupérez les éléments HTML dont vous avez besoin
  const artistElement = document.getElementById("artist");
  const titleElement = document.getElementById("title");
  const playButton = document.getElementById("play");
  const pauseButton = document.getElementById("pause");
  const progressBar = document.querySelector('input[type="range"]');
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  let currentTrackIndex = 0;
  let audio = new Audio(audioTracks[currentTrackIndex].source);
  let isPlaying = false;

  // Fonction pour mettre à jour les informations d'une piste audio
  function updateTrackInfo() {
    artistElement.textContent = audioTracks[currentTrackIndex].artist;
    titleElement.textContent = audioTracks[currentTrackIndex].title;
    audio.src = audioTracks[currentTrackIndex].source;
  }

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

  // Événement pour le bouton "Précédent"
  prevButton.addEventListener("click", () => {
    currentTrackIndex =
      (currentTrackIndex - 1 + audioTracks.length) % audioTracks.length;
    updateTrackInfo();
    updateImage(); // Mettre à jour l'image
    audio.load();
    if (isPlaying) {
      audio.play();
    }
  });

  // Événement pour le bouton "Suivant"
  nextButton.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % audioTracks.length;
    updateTrackInfo();
    updateImage(); // Mettre à jour l'image
    audio.load();
    if (isPlaying) {
      audio.play();
    }
  });

  // Événement pour la recherche
  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();

    for (let i = 0; i < audioTracks.length; i++) {
      if (
        audioTracks[i].artist.toLowerCase().includes(searchTerm) ||
        audioTracks[i].title.toLowerCase().includes(searchTerm)
      ) {
        currentTrackIndex = i;
        updateTrackInfo();
        audio.load();
        if (isPlaying) {
          audio.play();
        }
        break;
      }
    }
  });

  // Événement lorsque la lecture est terminée
  audio.addEventListener("ended", () => {
    isPlaying = false;
    playButton.style.display = "inline-block";
    pauseButton.style.display = "none";
    // Passer à la piste audio suivante (vous pouvez personnaliser cette partie)
    currentTrackIndex = (currentTrackIndex + 1) % audioTracks.length;
    updateTrackInfo();
    audio.load();
  });
  // Fonction pour mettre à jour l'image en fonction de la piste audio
  function updateImage() {
    const imageElement = document.getElementById("image");
    imageElement.style.backgroundImage = `url(${audioTracks[currentTrackIndex].image})`;
  }
});
