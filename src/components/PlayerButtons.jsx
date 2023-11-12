import React, { useState, useRef } from "react";
import audioData from "../data/audioData";

const PlayerButtons = ({
  onUpdateCurrentTrackIndex,
  currentTrackIndex,
  onUpdateProgressBar,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  const [playVisible, setPlayVisible] = useState(true);
  const [pauseVisible, setPauseVisible] = useState(false);

  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      setPlayVisible(false);
      setPauseVisible(true);
      audioRef.current.src = audioData[currentTrackIndex].source;
      audioRef.current.load();
      audioRef.current.play();
      console.log("Playing:", audioData[currentTrackIndex].title);
      onUpdateProgressBar();
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

  const changeTrack = (index) => {
    onUpdateCurrentTrackIndex(index); // Appel de la fonction de rappel pour mettre à jour PlayerContentBox
    console.log("Current Track:", audioData[index].title);
    console.log("Source:", audioData[index].source);

    // Charger et jouer la nouvelle piste
    audioRef.current.src = audioData[index].source;
    audioRef.current.load();
    audioRef.current.play();
    setIsPlaying(true);

    onUpdateProgressBar();
  };

  const handlePrevious = () => {
    const previousIndex =
      (currentTrackIndex - 1 + audioData.length) % audioData.length;
    changeTrack(previousIndex);
    if (!isPlaying) {
      setPlayVisible(false);
      setPauseVisible(true);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentTrackIndex + 1) % audioData.length;
    changeTrack(nextIndex);
    if (!isPlaying) {
      setPlayVisible(false);
      setPauseVisible(true);
    }
  };

  return (
    <div className="button">
      <button className="prev-next" id="prev" onClick={handlePrevious}>
        <img
          src="./src/assets/images/previous.png"
          alt="Previous"
          id="previous"
        />
      </button>
      <button
        className="play-pause"
        onClick={isPlaying ? handlePause : handlePlay}
      >
        <img
          src="./src/assets/images/play.png"
          alt="Play"
          id="play"
          style={{ display: playVisible ? "inline-block" : "none" }}
        />
        <img
          src="./src/assets/images/pause.png"
          alt="Pause"
          id="pause"
          style={{ display: pauseVisible ? "inline-block" : "none" }}
        />
      </button>
      <button className="prev-next" id="next" onClick={handleNext}>
        <img src="./src/assets/images/next.png" alt="Next" id="next-btn" />
      </button>
    </div>
  );
};

export default PlayerButtons;
