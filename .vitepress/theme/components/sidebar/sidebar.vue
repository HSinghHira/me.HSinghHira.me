<template>
  <aside
    class="z-10 lg:fixed lg:inset-y-0 bg-[var(--vp-c-bg)] border-[var(--vp-c-divider)] lg:border-r border-b lg:border-b-0 w-full lg:w-80"
  >
    <UserHeader @toggle-nav="handleToggleNav" ref="userHeaderRef" />

    <NavLinks :isDesktop="isDesktop" ref="navLinksRef" />

    <UserInfo />

    <!-- Changed @click="toggle" to @click="handleToggleNav" -->
    <Button type="button" icon="pi pi-ellipsis-v" @click="handleToggleNav" aria-haspopup="true" aria-controls="overlay_menu" />
  </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { OhVueIcon } from 'oh-vue-icons';
import UserHeader from './UserHeader.vue';
import NavLinks from './NavLinks.vue';
import UserInfo from './UserInfo.vue';
import Button from 'primevue/button';

const toggleNav = ref(false);
const isDesktop = ref(false);

const userHeaderRef = ref(null);
const navLinksRef = ref(null);

const handleToggleNav = (event) => {
  console.log('handleToggleNav called, isDesktop:', isDesktop.value);
  if (isDesktop.value) {
    toggleNav.value = !toggleNav.value;
  } else {
    if (navLinksRef.value) {
      console.log('Calling navLinksRef.toggle');
      navLinksRef.value.toggle(event);
    } else {
      console.error('navLinksRef is null');
    }
  }
};

const checkSize = () => {
  isDesktop.value = window.innerWidth >= 1024;
  console.log('isDesktop updated:', isDesktop.value);
};

onMounted(() => {
  checkSize();
  window.addEventListener("resize", checkSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkSize);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>