import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        dir: 'dist', // Dossier de sortie
        preserveModules: true, // 🔥 Garde la structure des fichiers
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js' // Chaque fichier garde son nom
      }
    }
  }
})
