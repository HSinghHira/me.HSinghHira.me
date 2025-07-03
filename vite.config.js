import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      'oh-vue-icons/icons': path.resolve(__dirname, './node_modules/oh-vue-icons/icons'),
    },
  },
});