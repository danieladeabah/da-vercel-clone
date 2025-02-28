<template>
  <nav
    class="sticky top-0 z-50 bg-[#FAFAFA] flex justify-between items-center px-8 max-w-[100rem] mx-auto py-4"
  >
    <div class="flex items-center space-x-6">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <Logo />
      </div>

      <!-- Mobile Menu Icon -->
      <button @click="toggleMenu" class="absolute right-8 lg:hidden">
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

      <!-- Nav Links (Desktop) -->
      <div class="hidden lg:flex space-x-6 text-gray-700">
        <div
          class="relative group"
          v-for="(item, index) in navItems"
          :key="index"
        >
          <button class="hover:text-black flex items-center">
            {{ item.title }}
            <span class="ml-1"
              ><ChevronDownIcon
                :class="{
                  'rotate-180': item.dropdown,
                  'rotate-0': !item.dropdown,
                }"
            /></span>
          </button>
          <div
            v-if="item.dropdown"
            class="absolute hidden group-hover:block bg-white shadow-md p-3 rounded-md w-48"
          >
            <a
              v-for="(subItem, subIndex) in item.dropdown"
              :key="subIndex"
              href="#"
              class="block px-4 py-2 hover:bg-gray-100"
            >
              {{ subItem }}
            </a>
          </div>
        </div>
        <a href="#" class="hover:text-black">Enterprise</a>
        <a href="#" class="hover:text-black">Docs</a>
        <a href="#" class="hover:text-black">Pricing</a>
      </div>
    </div>

    <!-- Auth Buttons (Desktop) -->
    <div class="hidden lg:flex space-x-4">
      <button class="border border-gray-300 px-4 py-1 rounded-lg shadow-sm">
        Log In
      </button>
      <button class="border border-gray-300 px-4 py-1 rounded-lg shadow-sm">
        Contact
      </button>
      <button class="bg-black text-white px-4 py-1 rounded-lg shadow-sm">
        Sign Up
      </button>
    </div>
  </nav>
</template>

<script setup>
import Logo from "@/assets/icons/logo.vue";
import ChevronDownIcon from "@/assets/icons/dropdown-icon.vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const navItems = [
  { title: "Products", dropdown: ["Hosting", "Edge Functions"] },
  { title: "Solutions", dropdown: ["Hosting", "Edge Functions"] },
  { title: "Resources", dropdown: ["Docs", "Community"] },
];
</script>
