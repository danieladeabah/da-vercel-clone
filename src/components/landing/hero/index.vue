<template>
  <section class="relative flex flex-col items-center justify-center">
    <HeroBg class="w-full" height />
    <div class="absolute inset-x-0 top-[12rem] h-1/2 hidden lg:block">
      <Triangle class="w-full" />
    </div>
    <div
      class="absolute inset-x-0 top-4 md:top-[12rem] lg:top-[20%] px-4 text-center max-w-screen-lg mx-auto"
    >
      <h1 class="text-3xl md:text-3xl font-bold text-black">
        Your complete platform for the web.
      </h1>
      <p
        class="text-sm sm:text-base md:text-lg text-gray-700 mt-2 max-w-2xl mx-auto"
      >
        Vercel provides the developer tools and cloud infrastructure to build,
        scale, and secure a faster, more personalized web.
      </p>

      <div class="mt-6 flex flex-row justify-center gap-4">
        <button
          class="bg-black text-white dark:bg-white dark:text-black hover:bg-[#1F1F1F] px-5 sm:px-6 py-2 sm:py-3 rounded-full font-medium flex items-center truncate"
        >
          ▲ Start Deploying
        </button>
        <button
          class="bg-white dark:bg-black dark:text-white dark:hover:bg-[#1F1F1F] text-black border border-gray-300 px-5 sm:px-6 py-2 sm:py-3 rounded-full font-medium truncate"
        >
          Get a Demo
        </button>
      </div>
    </div>

    <HeroDeploy class="w-full max-w-screen-lg" />
  </section>
</template>

<script setup>
import HeroBg from "@/assets/landing/hero/hero-bg.vue";
import HeroDeploy from "@/assets/landing/hero/hero-deploy.vue";
import Triangle from "@/assets/landing/hero/triangle.vue";
</script>
