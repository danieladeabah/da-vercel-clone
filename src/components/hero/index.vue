<template>
  <section class="relative flex flex-col items-center justify-center">
    <HeroBg class="w-full h-full" />

    <div
      class="absolute inset-x-0 top-8 md:top-[12rem] lg:top-[20%] px-4 text-center max-w-screen-lg mx-auto"
    >
      <h1 class="text-xl sm:text-2xl md:text-3xl font-bold text-black">
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
          class="bg-black text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-medium flex items-center truncate"
        >
          ▲ Start Deploying
        </button>
        <button
          class="bg-white text-black border border-gray-300 px-5 sm:px-6 py-2 sm:py-3 rounded-full font-medium truncate"
        >
          Get a Demo
        </button>
      </div>
    </div>

    <HeroDeploy class="w-full max-w-screen-lg" />
  </section>
</template>

<script setup>
import HeroBg from "@/assets/hero/hero-bg.vue";
import HeroDeploy from "@/assets/hero/hero-deploy.vue";
</script>
