// PlayerContentBox.jsx

import React from "react";
import PlayerProgressBar from "./PlayerProgressBar";
import PlayerButtons from "./PlayerButtons";

const PlayerContentBox = () => {
  return (
    <div className="content-box">
      <h3 className="artist" id="artist">
        Jewel Usain
      </h3>
      <h5 className="title" id="title">
        j'arrive
      </h5>
      <PlayerProgressBar />
      <PlayerButtons />
    </div>
  );
};

export default PlayerContentBox;
