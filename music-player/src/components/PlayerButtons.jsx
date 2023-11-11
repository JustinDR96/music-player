// PlayerButtons.jsx
import audioData from "../data/audioData";
import React, { useState, useRef } from "react";
const PlayerButtons = ({ onNextClick, onPlay }) => {
  // Événement pour le bouton lecture

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  const [playVisible, setPlayVisible] = useState(true);
  const [pauseVisible, setPauseVisible] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      setPlayVisible(false);
      setPauseVisible(true);
      audioRef.current.src = audioData[currentTrackIndex].source;
      audioRef.current.load();
      audioRef.current.play();
      console.log("Playing:", audioData[currentTrackIndex].title);
    }
  };

  const handlePause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setPlayVisible(true);
      setPauseVisible(false);
      audioRef.current.pause();
    }
  };

  const handlePrevious = () => {
    // Logique pour passer à la piste precedente
    const previousIndex = (currentTrackIndex - 1) % audioData.length;
    setCurrentTrackIndex(previousIndex);

    console.log("Next Track:", audioData[previousIndex].title);
    console.log("Source:", audioData[previousIndex].source);

    // Charger et jouer la nouvelle piste
    audioRef.current.src = audioData[previousIndex].source;
    audioRef.current.load();
    audioRef.current.play();
    setIsPlaying(true);
  };
  const handleNext = () => {
    // Logique pour passer à la piste suivante
    const nextIndex = (currentTrackIndex + 1) % audioData.length;
    setCurrentTrackIndex(nextIndex);

    console.log("Next Track:", audioData[nextIndex].title);
    console.log("Source:", audioData[nextIndex].source);

    // Charger et jouer la nouvelle piste
    audioRef.current.src = audioData[nextIndex].source;
    audioRef.current.load();
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="button">
      <button className="prev-next" id="prev" onClick={handlePrevious}>
        <img src="/src/assets/previous.png" alt="Previous" id="previous" />
      </button>
      <button className="play-pause">
        <img
          src="/src/assets/play.png"
          alt="Play"
          id="play"
          onClick={handlePlay}
          style={{ display: playVisible ? "inline-block" : "none" }}
        />
        <img
          src="/src/assets/pause.png"
          alt="Pause"
          id="pause"
          onClick={handlePause}
          style={{ display: pauseVisible ? "inline-block" : "none" }}
        />
      </button>
      <button className="prev-next" id="next" onClick={handleNext}>
        <img src="/src/assets/next.png" alt="Next" id="next-btn" />
      </button>
    </div>
  );
};

export default PlayerButtons;
