import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/own-portfolio/',
  server: {
    port: 5174,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        works: resolve(__dirname, 'works.html'),
        about: resolve(__dirname, 'about.html'),
        projectDetail: resolve(__dirname, 'my-projects/project-detail.html'),
        certificates: resolve(__dirname, 'certificates.html'),
      },
    },
  },
});
