// tailwind.config.js (not tailwind.config.ts or using export default!)
const plugin = require('preline/plugin')

module.exports = {
  content: [
    './docs/**/*.{vue,js,ts,jsx,tsx,md}',
    './.vitepress/**/*.{vue,js,ts,jsx,tsx,md}'
  ],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [plugin]
}
