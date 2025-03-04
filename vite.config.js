import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
