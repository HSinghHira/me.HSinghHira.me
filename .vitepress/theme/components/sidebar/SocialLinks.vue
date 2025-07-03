<template>
  <div
    class="flex flex-wrap justify-start lg:justify-center gap-2 mt-4 lg:mt-4 mb-4 lg:mb-4 w-full"
  >
    <button
      class="bg-[var(--vp-c-bg-alt)]! p-2 rounded-full! hover:ring-[var(--vp-c-bg-alt)] hover:ring-2 w-10! h-10! transition duration-200"
      @click="toggleTheme"
      type="button"
      aria-label="Toggle dark mode"
    >
      <OhVueIcon :name="isDark ? 'fa-moon' : 'fa-sun'" class="w-6 h-6 text-[var(--vp-c-text-1)]" />
    </button>

    <a
      href="https://x.com/hsinghhira"
      target="_blank"
      class="bg-[var(--vp-c-bg-alt)]! p-2 rounded-full! hover:ring-[var(--vp-c-bg-alt)] hover:ring-2 transition duration-200"
      aria-label="Link to X (Twitter)"
    >
      <OhVueIcon
        name="fa-times-circle"
        class="w-6 h-6 text-[var(--vp-c-text-1)]"
      />
    </a>

    <a
      href="#"
      class="bg-[var(--vp-c-bg-alt)]! p-2 rounded-full! hover:ring-[var(--vp-c-bg-alt)] hover:ring-2 transition duration-200"
      aria-label="Placeholder link"
    >
      <OhVueIcon
        name="fa-globe"
        class="w-6 h-6 text-[var(--vp-c-text-1)]"
      />
    </a>

    <button
      class="lg:hidden bg-[var(--vp-c-bg-alt)]! p-2 rounded-full! hover:ring-[var(--vp-c-bg-alt)] hover:ring-2 w-10! h-10! transition duration-200"
      @click="$emit('toggle-nav', $event)" 
      aria-label="Toggle navigation menu"
    >
      <OhVueIcon name="fa-bars" class="w-6 h-6 text-[var(--vp-c-text-1)]" />
    </button>
  </div>
</template>

<script setup>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  FaMoon,
  FaSun,
  FaTimesCircle,
  FaGlobe,
  FaBars,
} from "oh-vue-icons/icons/fa";
import { useData } from 'vitepress';

addIcons(FaMoon, FaSun, FaTimesCircle, FaGlobe, FaBars);

const { isDark } = useData();

const toggleTheme = () => {
  isDark.value = !isDark.value;
};

defineEmits(['toggle-nav']);
</script>

<style scoped>
/* Any specific styles for SocialLinks if not handled by Tailwind */
</style>