// PlayerContentBox.jsx
import React, { useState, useRef, useEffect } from "react";
import PlayerProgressBar from "./PlayerProgressBar";
import PlayerButtons from "./PlayerButtons";
import PlayerImage from "./PlayerImage";
import audioData from "../data/audioData";

const PlayerContentBox = () => {
  const audioRef = useRef(new Audio());
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // Charger la première piste lors du chargement initial
    loadTrack(currentTrackIndex);

    // Nettoyer les écouteurs d'événements lors du démontage du composant
    return () => {
      audioRef.current.removeEventListener("timeupdate", updateTime);
      audioRef.current.removeEventListener("loadedmetadata", updateTime);
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    // Mettre à jour les informations de piste lorsqu'une nouvelle piste est chargée
    updateTrackInfo();
  }, [currentTrackIndex]);

  const loadTrack = (index) => {
    audioRef.current.src = audioData[index].source;
    audioRef.current.load();

    // L'événement "loadedmetadata" est utilisé pour garantir que la durée est disponible
    audioRef.current.addEventListener("loadedmetadata", () => {
      setDuration(audioRef.current.duration);
    });
  };

  const updateTrackInfo = () => {
    const track = audioData[currentTrackIndex];
    setTrackInfo({
      title: track.title,
      artist: track.artist,
    });
  };

  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleNextClick = () => {
    const nextIndex = (currentTrackIndex + 1) % audioData.length;
    setCurrentTrackIndex(nextIndex);
  };

  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      audioRef.current.play();
    } else {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  };

  const [trackInfo, setTrackInfo] = useState({
    title: audioData[currentTrackIndex].title,
    artist: audioData[currentTrackIndex].artist,
  });
  const handleUpdateProgressBar = () => {
    // Vérifiez que audioRef.current est défini
    if (audioRef.current) {
      // Obtenez la position actuelle depuis le lecteur audio
      const currentTime = audioRef.current.currentTime;

      // Mettez à jour l'état de la barre de progression
      setCurrentTime(currentTime);
      console.log("Updated progress bar. Current time:", currentTime);
    }
  };

  return (
    <div className="content-box">
      <PlayerImage track={audioData[currentTrackIndex]} />
      <div className="details">
        <h1 className="title" id="title">
          {trackInfo.title}
        </h1>
        <h5 className="artist" id="artist">
          {trackInfo.artist}
        </h5>
      </div>
      <PlayerProgressBar
        currentTime={currentTime}
        duration={duration}
        audioRef={audioRef}
      />
      <PlayerButtons
        onNextClick={handleNextClick}
        onPlay={handlePlay}
        onUpdateCurrentTrackIndex={setCurrentTrackIndex}
        onUpdateProgressBar={handleUpdateProgressBar}
        currentTrackIndex={currentTrackIndex}
        audioRef={audioRef}
      />
    </div>
  );
};

export default PlayerContentBox;
