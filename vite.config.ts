import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // 🔥 Asegura que las rutas sean relativas
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html' // 🔥 Asegurar que usa el index.html correcto
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
