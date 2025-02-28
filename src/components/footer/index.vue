<template>
  <footer class="p-8">
    <div
      class="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6"
    >
      <!-- Products Section -->
      <div>
        <h3 class="font-semibold text-lg mb-2">Products</h3>
        <ul class="space-y-1 font-medium text-gray-500">
          <li>All</li>
          <li>Enterprise</li>
          <li>Fluid Compute</li>
          <li>Next.js</li>
          <li>Observability</li>
          <li>Previews</li>
          <li>Rendering</li>
          <li>Security</li>
          <li>Turbo</li>
          <li>v0</li>
        </ul>
      </div>

      <!-- Resources Section -->
      <div>
        <h3 class="font-semibold text-lg mb-2">Resources</h3>
        <ul class="space-y-1 font-medium text-gray-500">
          <li>Community</li>
          <li>Docs</li>
          <li>Guides</li>
          <li>Help</li>
          <li>Integrations</li>
          <li>Pricing</li>
          <li>Resources</li>
          <li>Solution Partners</li>
          <li>Templates</li>
        </ul>
      </div>

      <!-- Company Section -->
      <div>
        <h3 class="font-semibold text-lg mb-2">Company</h3>
        <ul class="space-y-1 font-medium text-gray-500">
          <li>About</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Changelog</li>
          <li>Contact Us</li>
          <li>Customers</li>
          <li>Partners</li>
          <li>Privacy Policy</li>
          <li>Legal</li>
        </ul>
      </div>

      <!-- Social Section -->
      <div>
        <h3 class="font-semibold text-lg mb-2">Social</h3>
        <ul class="space-y-2 text-gray-500">
          <li class="flex items-center gap-2">
            <GitHubIcon class="text-gray-600 w-5 h-5" />
            GitHub
          </li>
          <li class="flex items-center gap-2">
            <LinkedinIcon class="text-gray-600 w-5 h-5" />
            LinkedIn
          </li>
          <li class="flex items-center gap-2">
            <XIcon class="text-gray-600 w-5 h-5" />
            Twitter
          </li>
          <li class="flex items-center gap-2">
            <YouTubeIcon class="text-gray-600 w-5 h-5" />
            YouTube
          </li>
        </ul>
      </div>
    </div>

    <!-- Footer bottom section -->
    <div
      class="flex flex-col lg:flex-row gap-4 justify-between items-center mt-6 pt-4 text-sm"
    >
      <span class="flex items-center gap-2 text-blue-500 font-semibold">
        <span class="text-xl">&#x25CF;</span> All systems normal</span
      >
      <div class="flex border dark:border-[#3b3b3b] rounded-full">
        <!-- Light Mode -->
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

        <!-- Dark Mode -->
        <button
          @click="setMode('dark')"
          class="flex items-center px-3 py-1 text-gray-600"
          :class="{ 'bg-gray-300 dark:bg-gray-700 rounded-full': isDark }"
        >
          <MoonIcon class="w-5 h-5" />
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import GitHubIcon from "@/assets/icons/social/github-icon.vue";
import LinkedinIcon from "@/assets/icons/social/linkedin-icon.vue";
import XIcon from "@/assets/icons/social/x-icon.vue";
import YouTubeIcon from "@/assets/icons/social/youtube-icon.vue";
import SunIcon from "@/assets/icons/darkmode/sun-icon.vue";
import MoonIcon from "@/assets/icons/darkmode/moon-icon.vue";

const colorMode = useColorMode();

// Check active mode
const isDark = computed(() => colorMode.value === "dark");
const isLight = computed(() => colorMode.value === "light");

const setMode = async (mode) => {
  colorMode.preference = mode;
  await nextTick(); // Ensure DOM updates
};

const color = computed(() =>
  colorMode.value === "dark" ? "#FAFAFA" : "white",
);

useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
    },
  ],
});

useSeoMeta({
  titleTemplate: "Vercel clone - Daniel Adeabah",
});
</script>

<style scoped>
footer {
  font-family: Arial, sans-serif;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
