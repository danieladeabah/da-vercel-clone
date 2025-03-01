<template>
  <div
    class="mt-10 flex flex-col md:flex-row border-t dark:border-[#3b3b3b] gap-10 p-6"
  >
    <!-- Left Section -->
    <div class="flex flex-col items-center lg:items-start px-4 lg:px-8">
      <h2 class="font-semibold text-lg lg:text-lg">
        <span class="text-black dark:text-white">Ready to deploy? </span>
        <span class="text-gray-500 dark:text-gray-300 font-normal"
          >Start building with a free account.</span
        >
        <p class="text-gray-500 dark:text-gray-300 font-normal">
          Speak to an expert for your
          <span class="text-blue-500 font-normal">Pro</span> or
          <span class="text-purple-500 font-normal">Enterprise</span> needs.
        </p>
      </h2>
      <div class="mt-4 flex items-center gap-3 justify-center">
        <UButton primary>Start Deploying</UButton>
        <UButton>Talk to Expert</UButton>
      </div>
    </div>

    <!-- Right Section -->
    <div
      class="flex flex-col items-center lg:items-start md:border-l dark:border-[#3b3b3b] md:pl-8"
    >
      <h2 class="font-normal text-lg lg:text-lg">
        <span class="text-black dark:text-white">
          Explore Vercel Enterprise
        </span>
        <p class="text-gray-500 dark:text-gray-300 font-normal">
          with an interactive product tour, <br />
          trial, or a personalized demo.
        </p>
      </h2>
      <UButton class="w-fit mt-4">Explore Enterprise</UButton>
    </div>
  </div>
</template>

<script setup>
import UButton from "@/components/common/button.vue";
</script>
