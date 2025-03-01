<template>
  <div
    class="mt-10 flex flex-col md:flex-row items-center border-t border-b dark:border-[#3b3b3b] gap-10 p-6"
  >
    <!-- Left Section -->
    <div class="flex-1 text-center md:text-left px-4 lg:px-8">
      <h2 class="font-semibold text-lg">
        <span class="text-black dark:text-white">Ready to deploy?</span>
        <span class="text-gray-600">Start building with a free account.</span>
      </h2>
      <p class="text-gray-600 mt-2">
        Speak to an expert for your
        <span class="text-blue-500 font-semibold">Pro</span> or
        <span class="text-purple-500 font-semibold">Enterprise</span> needs.
      </p>
      <div
        class="mt-4 flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
      >
        <UButton primary>Start Deploying</UButton>
        <UButton>Talk to an Expert</UButton>
      </div>
    </div>

    <!-- Right Section -->
    <div
      class="flex-1 text-center md:text-left md:border-l dark:border-[#3b3b3b] md:pl-8"
    >
      <p class="text-gray-500 font-medium text-lg">Explore Vercel Enterprise</p>
      <p class="text-gray-600 text-sm my-3 lg:my-0 max-w-md mx-auto md:mx-0">
        Take an interactive product tour, start a trial, or request a
        personalized demo.
      </p>
      <UButton>Explore Enterprise</UButton>
    </div>
  </div>
</template>

<script setup>
import UButton from "@/components/common/button.vue";
</script>
