import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // 🔥 IMPORTANTE: Mantiene rutas relativas para GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: './index.html', // ✅ Usa el index.html correcto
    }
  },
});
