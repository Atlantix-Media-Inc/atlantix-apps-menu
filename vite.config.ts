import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
      name: 'AtxAppsMenu'
    },
    rollupOptions: {
      // Don't bundle Lit; let the consumer's package manager manage it
      external: [/^lit/], 
    }
  }
});
