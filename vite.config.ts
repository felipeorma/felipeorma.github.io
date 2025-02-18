import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/felipeorma.github.io/', // Ajustado para GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
