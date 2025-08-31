// filepath: e:\downlods\project-bolt-sb1-njqvelry\project\vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public', // Ensure Vercel uses the correct directory
  },
});