import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  base: '/', // Changed from full URL to relative path
  themeConfig: {
    nav: [],
    sidebar: [],
  },
});