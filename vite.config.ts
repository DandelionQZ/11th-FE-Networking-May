import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://weather-api.kro.kr',
        changeOrigin: true,
        secure: true,
      },
      '/auth': {
        target: 'https://weather-api.kro.kr',
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
