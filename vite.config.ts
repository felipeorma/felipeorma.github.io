import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '', // 👈 Asegura rutas relativas
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: 'index.html', // 👈 IMPORTANTE: Asegura que el index.html se use correctamente
    }
  }
});
