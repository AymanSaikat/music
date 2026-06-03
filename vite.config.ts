import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    // Use relative base so the built site works on GitHub Pages regardless of
    // the repository name (e.g. /WaveTune/, /WaveTune-main/, /some-fork/, or a
    // custom domain at root). Absolute bases like '/WaveTune/' cause a blank
    // white page whenever the repo name doesn't match exactly.
    base: './',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
