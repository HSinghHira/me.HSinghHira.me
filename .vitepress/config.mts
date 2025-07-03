import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  base: 'https://git.hsinghhira.me/me.HSinghHira.me/',
  themeConfig: {
    nav: [],
    sidebar: [],
  },
});
