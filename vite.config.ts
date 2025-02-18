import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // 🔥 Esto genera rutas relativas en lugar de absolutas
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Asegura que los assets se guarden en /assets/
    manifest: true, // Opcional, pero ayuda a depurar rutas
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
