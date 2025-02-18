import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Para repositorio username.github.io
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
