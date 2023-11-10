// PlayerButtons.jsx

import React from "react";

const PlayerButtons = () => {
  return (
    <div>
      <button className="play-pause">
        <img src="/src/assets/play.png" alt="Play" id="play" width={15} />
        <img src="/src/assets/pause.png" alt="Pause" id="pause" width={15} />
      </button>
      <button className="prev-next" id="prev">
        Précédent
      </button>
      <button className="prev-next" id="next">
        Suivant
      </button>
    </div>
  );
};

export default PlayerButtons;
