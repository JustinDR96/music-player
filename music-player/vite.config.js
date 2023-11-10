import ReactRefresh from "@vitejs/plugin-react-refresh";

export default {
  plugins: [ReactRefresh()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";',
      },
    },
  },
};
