import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Sidebar from './components/sidebar/sidebar.vue'
import './style.css'
import './tailwind.css'

// PrimeVue Imports
import PrimeVue from 'primevue/config';
import Menu from 'primevue/menu'; 

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  RiUserLine,
  FaBriefcase,
  FaGraduationCap,
  FaFolderOpen,
  FaEdit,
  FaEnvelope
} from 'oh-vue-icons/icons'

addIcons(
  RiUserLine,
  FaBriefcase,
  FaGraduationCap,
  FaFolderOpen,
  FaEdit,
  FaEnvelope
)

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h('div', { class: 'flex flex-col lg:flex-row' }, [
      h(Sidebar), // Sidebar (moves to top on small screens)
      h('div', { class: 'flex-1 lg:ml-80' }, [ // Main content with margin for sidebar on large screens
        h(DefaultTheme.Layout, null, {
          'nav-bar': () => null // Remove the navbar
        })
      ])
    ])
  },
  enhanceApp({ app, router, siteData }) {
    app.use(PrimeVue); // Register PrimeVue
    app.component('Menu', Menu);
    app.component("VIcon", OhVueIcon)
  }
} satisfies Theme