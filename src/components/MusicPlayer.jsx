import React from "react";
import PlayerImage from "./PlayerImage.jsx";
import PlayerContentBox from "./PlayerContentBox.jsx";
import audioData from "../data/audioData.json";
// [FIXME] only one import for scss
import "/src/assets/style/styles.scss";
import "/src/assets/style/MusicPlayer.scss";
import "/src/assets/style/PlayerButtons.scss";
import "/src/assets/style/PlayerContentBox.scss";
import "/src/assets/style/PlayerImage.scss";
import "/src/assets/style/PlayerProgressBar.scss";

const MusicPlayer = () => {
  return (
    <main className="container">
      <PlayerContentBox audioData={audioData} />
    </main>
  );
};

export default MusicPlayer;
