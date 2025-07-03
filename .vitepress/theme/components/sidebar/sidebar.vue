<template>
  <aside
    class="z-10 lg:fixed lg:inset-y-0 bg-[var(--vp-c-bg)] border-[var(--vp-c-divider)] lg:border-r border-b lg:border-b-0 w-full lg:w-80"
  >
    <UserHeader @toggle-nav="handleToggleNav" ref="userHeaderRef" />

    <NavLinks :isDesktop="isDesktop" ref="navLinksRef" />

    <UserInfo />

    <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />

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
  // On desktop, we don't need a popup menu, NavLinks is always visible
  if (isDesktop.value) {
    toggleNav.value = !toggleNav.value;
  } else {
    // On mobile, trigger the NavLinks component's toggle method
    if (navLinksRef.value) {
      navLinksRef.value.toggle(event);
    }
  }
};

const checkSize = () => {
  isDesktop.value = window.innerWidth >= 1024;
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