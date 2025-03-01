<template>
  <div
    class="flex flex-col lg:flex-row gap-4 justify-between items-center mt-6 pt-4 text-sm"
  >
    <span class="flex items-center gap-2 text-blue-500 font-semibold">
      <span class="text-xl">&#x25CF;</span> All systems normal
    </span>
    <div class="flex border dark:border-[#3b3b3b] rounded-full">
      <button
        @click="setMode('light')"
        class="flex items-center px-3 py-1 text-gray-600"
        :class="{
          'border dark:border-[#3b3b3b] bg-white dark:bg-gray-700 rounded-full':
            isLight,
        }"
      >
        <SunIcon class="w-5 h-5" />
      </button>
      <button
        @click="setMode('dark')"
        class="flex items-center px-3 py-1 text-gray-600"
        :class="{ 'bg-gray-300 dark:bg-gray-700 rounded-full': isDark }"
      >
        <MoonIcon class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
import SunIcon from "@/assets/icons/darkmode/sun-icon.vue";
import MoonIcon from "@/assets/icons/darkmode/moon-icon.vue";
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");
const isLight = computed(() => colorMode.value === "light");
const setMode = async (mode) => {
  colorMode.preference = mode;
  await nextTick();
};
</script>
