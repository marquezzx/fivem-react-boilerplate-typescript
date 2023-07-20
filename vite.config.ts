import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/script.js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  }
});
