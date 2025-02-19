import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Usa '/' si usas un dominio personalizado (felipeorma.com)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
