<template>
  <nav
    class="flex px-4 py-3 justify-between items-center relative z-50 max-w-screen-2xl mx-auto"
  >
    <div class="flex items-center space-x-6">
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>

      <!-- Mobile Profile -->
      <div v-if="userData" class="absolute right-8 lg:hidden">
        <img
          class="h-8 w-8 rounded-full cursor-pointer"
          :src="userData.picture"
          alt="User Profile"
          @click="logoutUser"
          :title="userData.name"
        />
      </div>

      <!-- Mobile Menu Toggle -->
      <button v-else @click="toggleMenu" class="absolute right-8 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <!-- Navbar Links -->
      <div class="hidden lg:flex space-x-6 text-gray-700">
        <CommonNavbarItems
          v-for="(item, index) in navItems"
          :key="index"
          :item="item"
        />
        <a
          href="#"
          class="hover:text-black dark:hover:text-white dark:text-gray-400"
          >Enterprise</a
        >
        <a
          href="#"
          class="hover:text-black dark:hover:text-white dark:text-gray-400"
          >Docs</a
        >
        <a
          href="#"
          class="hover:text-black dark:hover:text-white dark:text-gray-400"
          >Pricing</a
        >
      </div>
    </div>

    <!-- Desktop Profile -->
    <div v-if="userData" class="hidden lg:flex items-center gap-2">
      <img
        class="h-8 w-8 rounded-full cursor-pointer"
        :src="userData.picture"
        alt="User Profile"
        @click="logoutUser"
        :title="userData.name"
      />
    </div>

    <!-- Desktop Login Buttons -->
    <div v-else class="hidden lg:flex space-x-4">
      <NuxtLink to="/auth">
        <UButton rounded="rounded-md" padding="py-1"> Login </UButton>
      </NuxtLink>
      <UButton rounded="rounded-md" padding="py-1"> Contact </UButton>
      <UButton primary rounded="rounded-md" padding="py-1"> Sign Up </UButton>
    </div>
  </nav>
</template>

<script setup>
import { getUserAuthState, logoutUser } from "@/utils/auth";
import Logo from "@/assets/icons/logo.vue";
import UButton from "@/components/common/button.vue";
import { navItems } from "@/constants/navbar";

const userCookie = getUserAuthState().userData;

// Compute user data reactively
const userData = computed(() => userCookie.value || null);

onMounted(() => {
  getUserAuthState();
});
</script>
