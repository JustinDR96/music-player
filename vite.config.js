import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

// [FIXME] fix import path in destination assets 
// https://vitejs.dev/config/
export default defineConfig({
  base: "/music-player/",
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "/public/audio", dest: "assets/" },
        { src: "/public/images", dest: "assets/" },
      ],
      flatten: false,
    }),
  ],
  resolve: {
    extensions: [".jsx", ".json", ".scss", ".vue"],
  },
});
