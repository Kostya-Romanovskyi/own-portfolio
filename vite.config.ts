import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/own-portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        works: resolve(__dirname, 'works.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },
});
