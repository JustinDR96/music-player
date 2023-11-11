import React, { useState, useRef, useEffect } from "react";
import PlayerProgressBar from "./PlayerProgressBar";
import PlayerButtons from "./PlayerButtons";
import PlayerImage from "./PlayerImage";
import audioData from "../data/audioData";

const PlayerContentBox = () => {
  const audioRef = useRef(new Audio());
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleNextClick = () => {
    const nextIndex = (currentTrackIndex + 1) % audioData.length;
    setCurrentTrackIndex(nextIndex);
  };

  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      audioRef.current.src = audioData[currentTrackIndex].source;
      audioRef.current.load();
      audioRef.current.play();
    } else {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  };

  const updateTrackInfo = () => {
    const track = audioData[currentTrackIndex];
    setTrackInfo({
      title: track.title,
      artist: track.artist,
    });
  };

  useEffect(() => {
    audioRef.current = new Audio();
  }, [currentTrackIndex]);

  useEffect(() => {
    updateTrackInfo();
  }, [currentTrackIndex]);

  const [trackInfo, setTrackInfo] = useState({
    title: audioData[currentTrackIndex].title,
    artist: audioData[currentTrackIndex].artist,
  });
  const currentTrack = audioData[currentTrackIndex];
  return (
    <div className="content-box">
      <PlayerImage
        track={currentTrack}
        onUpdateCurrentTrackIndex={setCurrentTrackIndex}
        currentTrackIndex={currentTrackIndex}
      />
      <div className="details">
        <h5 className="title" id="title">
          {trackInfo.title}
        </h5>
        <h3 className="artist" id="artist">
          {trackInfo.artist}
        </h3>
      </div>
      <PlayerProgressBar />
      <PlayerButtons
        onNextClick={handleNextClick}
        onPlay={handlePlay}
        onUpdateCurrentTrackIndex={setCurrentTrackIndex}
        currentTrackIndex={currentTrackIndex}
      />
    </div>
  );
};

export default PlayerContentBox;
