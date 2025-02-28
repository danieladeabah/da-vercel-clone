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
      <div class="flex border rounded-full">
        <button class="flex items-center px-2 py-2 text-gray-600">
          <SystemIcon class="w-3 h-3" />
        </button>
        <button class="flex items-center px-2 py-2 text-gray-600">
          <SunIcon class="w-3 h-3" />
        </button>
        <button class="flex items-center px-2 py-2 text-gray-600">
          <MoonIcon class="w-3 h-3" />
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
import SystemIcon from "@/assets/icons/darkmode/system-icon.vue";
</script>

<style scoped>
footer {
  font-family: Arial, sans-serif;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
