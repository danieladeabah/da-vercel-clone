<template>
  <div
    class="mt-10 p-6 border-t border-b dark:border-[#3b3b3b] shadow-sm bg-white dark:bg-[#000]"
  >
    <h3
      class="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm"
    >
      <PrivacyIcon /> Frontend Observability
    </h3>
    <h2 class="text-xl font-semibold mt-2 text-black dark:text-white">
      Privacy-friendly, lightweight Analytics.
    </h2>
    <p class="text-gray-600 dark:text-gray-300 mt-2">
      Upgrade your post-launch workflow with actionable, real-time insights.
    </p>
    <div class="mt-4">
      <client-only>
        <VueApexCharts
          type="line"
          :options="chartOptions"
          :series="chartSeries"
          height="350"
        />
      </client-only>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import PrivacyIcon from "@/assets/icons/privacy-icon.vue";
import { chartOptions, chartSeries } from "@/constants/charts";

const VueApexCharts = defineAsyncComponent(() => import("vue3-apexcharts"));
</script>
