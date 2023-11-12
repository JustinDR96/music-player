import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/music-player/",
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "src/assets/audio", dest: "assets/" },
        { src: "src/assets/images", dest: "assets/" },
      ],
      flatten: false,
    }),
  ],
  resolve: {
    extensions: [".jsx", ".json", ".scss", ".vue"], // Ajoutez ou ajustez selon vos besoins
  },
});
