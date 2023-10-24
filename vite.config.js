import { defineConfig } from "vite";
import copy from "rollup-plugin-copy";

export default defineConfig({
  base: "/music-player/", // Remplacez '/chemin-de-votre-application/' par la base souhaitée

  build: {
    rollupOptions: {
      output: {
        dir: "dist",
      },
    },
  },

  plugins: [
    // Plugin pour copier les répertoires "audio" et "images" dans le répertoire de sortie
    copy({
      targets: [
        { src: "audio", dest: "dist/audio" }, // Copier le répertoire "audio" dans "dist/audio"
        { src: "images", dest: "dist" }, // Copier le répertoire "images" dans "dist/images"
      ],
      hook: "writeBundle",
    }),
  ],
});
