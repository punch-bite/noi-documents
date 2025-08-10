// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir:path.resolve(__dirname, './public'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@layouts': path.resolve(__dirname, './src/components/layouts'),
      '@sections': path.resolve(__dirname, './src/components/sections'),
      '@components': path.resolve(__dirname, './src/components')
    }
  },
  build: {
    rollupOptions: {
      output: {
        // Optimisation du découpage des chunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('src/pages')) {
            return 'pages-' + id.split('pages/')[1].split('/')[0].toLowerCase();
          }
        }
      }
    }
  },
  server: {
    // Redirection pour le SPA (nécessaire en production)
    historyApiFallback: true
  }
});