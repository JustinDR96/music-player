// App.js

import React from "react";
import MusicPlayer from "./components/MusicPlayer.jsx"; // Assurez-vous de mettre à jour le chemin en fonction de votre structure de fichiers
import "/src/assets/style/style.css"; // Ajoutez un fichier CSS pour le style si nécessaire

const App = () => {
  return (
    <div>
      <MusicPlayer />
    </div>
  );
};

export default App;
