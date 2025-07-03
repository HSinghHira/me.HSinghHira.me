<template>
  <!-- Desktop: Always visible navigation -->
  <nav v-if="isDesktop" class="flex flex-col px-6 pb-4 w-full">
    <ul class="space-y-1.5">
      <li v-for="item in processedMenuItems" :key="item.label">
        <a
          :href="item.url"
          @click.prevent="item.command ? item.command($event) : null"
          class="group relative flex items-center gap-3 mx-1 my-0.5 p-3 border border-transparent rounded-xl min-h-[48px] overflow-hidden font-medium text-[var(--vp-c-text)] transition-all duration-300 ease-out"
          :class="[
            router.route.path === item.url 
              ? 'bg-gradient-to-r from-[var(--vp-c-brand-light)] to-[var(--vp-c-brand-lighter)] border-[var(--vp-c-brand-light)] text-[var(--vp-c-brand-dark)] font-semibold shadow-lg shadow-[var(--vp-c-brand-light)]/20' 
              : 'hover:bg-[var(--vp-c-bg-alt)] hover:border-[var(--vp-c-divider)] hover:shadow-md hover:-translate-y-0.5'
          ]"
        >
          <!-- Icon Container -->
          <div 
            class="flex flex-shrink-0 justify-center items-center rounded-lg w-8 h-8 transition-all duration-300 ease-out"
            :class="[
              router.route.path === item.url 
                ? 'bg-[var(--vp-c-brand)] text-white shadow-md' 
                : 'bg-[var(--vp-c-bg-soft)] text-[var(--vp-c-text-2)] group-hover:bg-[var(--vp-c-brand-light)] group-hover:text-[var(--vp-c-brand)] group-hover:scale-110'
            ]"
          >
            <VIcon :name="item.icon" class="w-4.5 h-4.5 group-hover:scale-110 transition-transform duration-300" />

          </div>
          
          <!-- Label -->
          <span class="flex-1 text-sm leading-5 transition-colors duration-300">
            {{ item.label }}
          </span>
          
          <!-- Active Indicator -->
          <div 
            v-if="router.route.path === item.url"
            class="bg-[var(--vp-c-brand)] rounded-full w-1.5 h-1.5 animate-pulse"
          ></div>
          
          <!-- Hover Glow Effect -->
          <div 
            class="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none"
            :class="[
              router.route.path !== item.url ? 'bg-gradient-to-r from-transparent via-[var(--vp-c-brand-light)]/5 to-transparent' : ''
            ]"
          ></div>
        </a>
      </li>
    </ul>
  </nav>

  <!-- Mobile: Full Screen Overlay -->
  <Teleport to="body" v-else>
    <div 
      v-if="isMenuVisible"
      class="z-[9999] fixed inset-0 mobile-nav-backdrop"
      @click="hideMenu"
    >
      <!-- Blurred Background -->
      <div class="absolute inset-0 bg-black/20 backdrop-blur-md"></div>
      
      <!-- Menu Container -->
      <div class="z-10 relative flex justify-center items-center p-6 min-h-screen">
        <div 
          class="bg-[var(--vp-c-bg)] shadow-2xl backdrop-blur-xl p-4 border border-[var(--vp-c-divider)] rounded-2xl w-full min-w-[320px] max-w-[380px] max-h-[calc(100vh-120px)] overflow-y-auto transition-all duration-300 ease-out mobile-nav-container transform"
          :class="isMenuVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
          @click.stop
        >
          <ul class="space-y-1.5">
            <li v-for="item in processedMenuItems" :key="item.label">
              <a
                :href="item.url"
                @click.prevent="item.command ? item.command($event) : null"
                class="group relative flex items-center gap-3 mx-1 my-0.5 p-3 border border-transparent rounded-xl min-h-[48px] overflow-hidden font-medium text-[var(--vp-c-text)] transition-all duration-300 ease-out"
                :class="[
                  router.route.path === item.url 
                    ? 'bg-gradient-to-r from-[var(--vp-c-brand-light)] to-[var(--vp-c-brand-lighter)] border-[var(--vp-c-brand-light)] text-[var(--vp-c-brand-dark)] font-semibold shadow-lg shadow-[var(--vp-c-brand-light)]/20' 
                    : 'hover:bg-[var(--vp-c-bg-alt)] hover:border-[var(--vp-c-divider)] hover:shadow-md hover:-translate-y-0.5'
                ]"
              >
                <!-- Icon Container -->
                <div 
                  class="flex flex-shrink-0 justify-center items-center rounded-lg w-8 h-8 transition-all duration-300 ease-out"
                  :class="[
                    router.route.path === item.url 
                      ? 'bg-[var(--vp-c-brand)] text-white shadow-md' 
                      : 'bg-[var(--vp-c-bg-soft)] text-[var(--vp-c-text-2)] group-hover:bg-[var(--vp-c-brand-light)] group-hover:text-[var(--vp-c-brand)] group-hover:scale-110'
                  ]"
                >
                  <VIcon :name="item.icon" class="w-4.5 h-4.5 group-hover:scale-110 transition-transform duration-300" />

                </div>
                
                <!-- Label -->
                <span class="flex-1 text-sm leading-5 transition-colors duration-300">
                  {{ item.label }}
                </span>
                
                <!-- Active Indicator -->
                <div 
                  v-if="router.route.path === item.url"
                  class="bg-[var(--vp-c-brand)] rounded-full w-1.5 h-1.5 animate-pulse"
                ></div>
                
                <!-- Hover Glow Effect -->
                <div 
                  class="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none"
                  :class="[
                    router.route.path !== item.url ? 'bg-gradient-to-r from-transparent via-[var(--vp-c-brand-light)]/5 to-transparent' : ''
                  ]"
                ></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vitepress';
import { menuItems } from '../../../data/NavLinks';

const props = defineProps({
  isDesktop: Boolean
});

const router = useRouter(); 
const isMenuVisible = ref(false);

const toggle = (event) => {
  if (!props.isDesktop) {
    isMenuVisible.value = !isMenuVisible.value;
    
    // Prevent body scroll when menu is open
    if (isMenuVisible.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
};

const hideMenu = () => {
  isMenuVisible.value = false;
  document.body.style.overflow = '';
};

// Watch for route changes to hide the menu if it's open on mobile
watch(router.route, () => {
  if (!props.isDesktop) {
    hideMenu();
  }
});

// Clean up body overflow when switching to desktop
watch(() => props.isDesktop, (newVal) => {
  if (newVal) {
    hideMenu();
  }
});

defineExpose({
  toggle,
  hideMenu
});

// Create menu items with navigation logic
const processedMenuItems = menuItems.map(item => ({
  ...item,
  command: (event) => {
    router.go(item.url);
    hideMenu();
  },
  icon: item.icon
}));
</script>

<style scoped>
.mobile-nav-backdrop {
  animation: fadeIn 0.3s ease-out;
}

.mobile-nav-container {
  animation: slideIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Custom scrollbar for the mobile menu */
.mobile-nav-container::-webkit-scrollbar {
  width: 4px;
}

.mobile-nav-container::-webkit-scrollbar-track {
  background: var(--vp-c-bg-soft);
  border-radius: 2px;
}

.mobile-nav-container::-webkit-scrollbar-thumb {
  background: var(--vp-c-brand-light);
  border-radius: 2px;
}

.mobile-nav-container::-webkit-scrollbar-thumb:hover {
  background: var(--vp-c-brand);
}
</style>