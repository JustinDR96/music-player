// MusicPlayer.jsx

import React from "react";
import PlayerImage from "./PlayerImage.jsx";
import PlayerContentBox from "./PlayerContentBox.jsx";
import "../style.css"; // Ajoutez un fichier CSS pour le style si nécessaire

const MusicPlayer = () => {
  return (
    <main className="container">
      <PlayerImage />
      <PlayerContentBox />
    </main>
  );
};

export default MusicPlayer;
