<template>
  <div class="flex md:flex-row flex-col lg:flex-col items-start md:items-start lg:items-center p-6">
    <img
      class="md:mr-4 lg:mr-0 mb-4 md:mb-0 lg:mb-4 p-1 rounded-full ring-[var(--vp-c-divider)] ring-2 w-[120px]"
      src="https://github.com/hsinghhira.png?size=200"
      alt="Harman Singh Hira"
    />

    <div class="md:flex md:flex-col md:flex-grow md:items-start lg:items-center">
      <h1 class="mb-2 py-4 font-semibold! text-[var(--vp-c-text-1)] text-2xl! md:text-left lg:text-center">
        Harman Singh Hira
      </h1>

      <p class="mt-2 mb-4 text-[var(--vp-c-text-2)] text-left md:text-left lg:text-center">
        Self-Taught Coder, Tech Blogger & Husband. I like tech, design, food &
        sci-fi drama.
      </p>

      <SocialLinks @toggle-nav="$emit('toggle-nav', $event)" />
    </div>
  </div>
</template>

<script setup>
import SocialLinks from './SocialLinks.vue'; // Import SocialLinks

// Emits the toggle-nav event received from SocialLinks to its parent (sidebar.vue)
defineEmits(['toggle-nav']);
</script>

<style scoped>
/* Any specific styles for UserHeader if not handled by Tailwind */
</style>