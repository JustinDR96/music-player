import ReactRefresh from "@vitejs/plugin-react-refresh";

export default {
  plugins: [ReactRefresh()],
  base: "/music-player/",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";',
      },
    },
  },
};
