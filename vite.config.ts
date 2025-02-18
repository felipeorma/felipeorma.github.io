import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ajustado para GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
