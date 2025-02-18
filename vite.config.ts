import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/nombre-de-tu-repositorio/', // Reemplaza con el nombre de tu repositorio
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});