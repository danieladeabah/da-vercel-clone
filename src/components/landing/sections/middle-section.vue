<template>
  <div
    class="mt-10 p-6 border-t border-b dark:border-[#3b3b3b] shadow-sm bg-white"
  >
    <h3 class="flex items-center gap-2 text-gray-500 text-sm">
      <PrivacyIcon /> Frontend Observability
    </h3>
    <h2 class="text-xl font-semibold mt-2">
      Privacy-friendly, lightweight Analytics.
    </h2>
    <p class="text-gray-600 mt-2">
      Upgrade your post-launch workflow with actionable, real-time insights.
    </p>
    <div class="mt-4">
      <Charts width="100%" />
    </div>
  </div>
</template>

<script setup>
import Charts from "@/assets/landing/sections/charts.vue";
import PrivacyIcon from "@/assets/icons/privacy-icon.vue";
</script>
