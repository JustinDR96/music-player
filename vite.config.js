import { defineConfig } from "vite";

export default defineConfig({
  base: "/music-player/",
  assetsInclude: ["audio"], // Ajoutez 'audio' pour inclure le répertoire audio
});
