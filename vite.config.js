import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Same output folder as the old Create React App setup, so the Vercel project settings keep working
    outDir: 'build',
  },
});
