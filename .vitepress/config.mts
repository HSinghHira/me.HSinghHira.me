import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
 vite: {
  plugins: [
    tailwindcss(),
    {
      name: 'preline',
      transform(code, id) {
        if (id.includes('node_modules/preline/dist')) {
          return {
            code: code.replace(/module.exports = require\(/g, 'module.exports = ('),
          };
        }
      },
    },
  ],
},
  themeConfig: {
    nav: [],
    sidebar: [],
  },
});