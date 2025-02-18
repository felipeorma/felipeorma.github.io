export default defineConfig({
  plugins: [react()],
  base: '/', // Base vacía porque estás usando dominio personalizado
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
