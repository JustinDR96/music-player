import React, { useState, useEffect } from "react";

const PlayerProgressBar = ({ audioRef, isPlaying }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    };

    audioRef.current.addEventListener("timeupdate", updateTime);
    audioRef.current.addEventListener("loadedmetadata", updateTime);

    return () => {
      audioRef.current.removeEventListener("timeupdate", updateTime);
      audioRef.current.removeEventListener("loadedmetadata", updateTime);
    };
  }, [audioRef]);

  useEffect(() => {
    // Mettez à jour la barre de progression si la musique est en cours de lecture
    if (isPlaying) {
      const progressBar = document.getElementById("progress-bar");
      if (progressBar) {
        progressBar.value = (currentTime / duration) * 100;
        console.log("Updated progress bar. Current time:", currentTime);
      }
    }
  }, [isPlaying, currentTime, duration]);

  return (
    <div className="progress-bar">
      <input
        id="progress-bar"
        type="range"
        min="0"
        max="100"
        value={(currentTime / duration) * 100 || 0}
        readOnly // Utilisez readOnly pour éviter le warning lié à la propriété value
      />
    </div>
  );
};

export default PlayerProgressBar;
