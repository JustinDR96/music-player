import React from "react";
import PlayerImage from "./PlayerImage.jsx";
import PlayerContentBox from "./PlayerContentBox.jsx";
import audioData from "../data/audioData.json";
import "/src/assets/style/styles.scss";

const MusicPlayer = () => {
  return (
    <main className="container">
      <PlayerContentBox audioData={audioData} />
    </main>
  );
};

export default MusicPlayer;
