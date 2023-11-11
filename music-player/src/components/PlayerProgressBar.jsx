// PlayerProgressBar.jsx

import React from "react";

const PlayerProgressBar = () => {
  const handleProgressBarChange = (event) => {
    // Ajoutez ici la logique pour gérer le changement de la barre de progression
    console.log(event.target.value);
  };

  return (
    <div className="progress-bar">
      <input
        type="range"
        max="100"
        value="0"
        onChange={handleProgressBarChange}
      />
    </div>
  );
};

export default PlayerProgressBar;
