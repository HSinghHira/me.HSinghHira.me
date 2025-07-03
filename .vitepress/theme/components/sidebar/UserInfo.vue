<template>
  <div
    class="hidden lg:block bottom-4 left-0 absolute w-full text-[var(--vp-c-text-2)] text-center"
  >
    <OhVueIcon name="fa-envelope" class="inline-block mr-2 w-5 h-5" />
    <a href="mailto:me@hsinghhira.me">me@hsinghhira.me</a>
  </div>
</template>

<script setup>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaEnvelope } from "oh-vue-icons/icons/fa";

addIcons(FaEnvelope);
</script>

<style scoped>
/* Any specific styles for UserInfo if not handled by Tailwind */
</style>