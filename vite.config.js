import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  base: '/music-player/', // Remplacez '/chemin-de-votre-application/' par la base souhaitée

  build: {
    rollupOptions: {
      output: {
        dir: 'dist',
      },
    },
  },

  plugins: [
    // Plugin pour copier le répertoire "audio" dans le répertoire de sortie
    copy({
      targets: [
        { src: 'audio', dest: 'dist' },
      ],
      hook: 'writeBundle',
    }),
  ],
});
