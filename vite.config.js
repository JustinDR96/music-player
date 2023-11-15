import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// [FIXME] fix import path in destination assets
// https://vitejs.dev/config/
export default defineConfig({
  base: "/music-player/",
  plugins: [react()],
  build: {
    outDir: 'distS',
},
  resolve: {
    extensions: [".jsx", ".json", ".scss", ".vue"],
  },
  server: {
    port: 3000,
  },
});
