import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: path.resolve(__dirname, './public'),
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
    outDir: 'dist', // Spécifique à Vercel
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('src/pages')) {
            return 'pages-' + id.split('pages/')[1].split('/')[0].toLowerCase();
          }
        },
        assetFileNames: 'assets/[hash][extname]',
        chunkFileNames: 'assets/[hash].js',
        entryFileNames: 'assets/[hash].js'
      }
    }
  },
  server: {
    historyApiFallback: true,
    port: 3000
  },
  // Configuration spécifique Vercel
  define: {
    'process.env': process.env // Pour la compatibilité des variables d'environnement
  },
  optimizeDeps: {
    include: ['react', 'react-dom'] // Optimisation pour Vercel
  }
});