import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts() 
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
      name: 'AtxAppsMenu'
    },
    rollupOptions: {
      // Don't bundle Lit; let the consumer's package manager manage it
      external: ['lit', /^lit\/.*/]  
    }
  },
  resolve: {
    preserveSymlinks: true
  }
});
