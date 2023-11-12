// MusicPlayer.jsx

import React from "react";
import PlayerImage from "./PlayerImage.jsx";
import PlayerContentBox from "./PlayerContentBox.jsx";
import "/src/assets/style/styles.scss"; // Ajoutez un fichier CSS pour le style si nécessaire
import "/src/assets/style/MusicPlayer.scss";
import "/src/assets/style/PlayerButtons.scss";
import "/src/assets/style/PlayerContentBox.scss";
import "/src/assets/style/PlayerImage.scss";
import "/src/assets/style/PlayerProgressBar.scss";

const MusicPlayer = () => {
  return (
    <main className="container">
      <PlayerContentBox />
    </main>
  );
};

export default MusicPlayer;
