<template>
  <section class="relative flex flex-col items-center justify-center">
    <HeroBg class="w-full" />

    <!-- Text and buttons positioned absolutely over HeroBg -->
    <div
      class="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
    >
      <h1 class="text-3xl font-bold text-black">
        Your complete platform for the web.
      </h1>
      <p class="text-lg text-gray-700 mt-2 max-w-2xl">
        Vercel provides the developer tools and cloud infrastructure to build,
        scale, and secure a faster, more personalized web.
      </p>

      <div class="mt-6 flex justify-center gap-4">
        <button
          class="bg-black text-white px-6 py-3 rounded-full font-medium flex items-center"
        >
          ▲ Start Deploying
        </button>
        <button
          class="bg-white text-black border border-gray-300 px-6 py-3 rounded-full font-medium"
        >
          Get a Demo
        </button>
      </div>
    </div>

    <HeroDeploy width="100%" class="mt-10" />
  </section>
</template>

<script setup>
import HeroBg from "@/assets/hero/hero-bg.vue";
import HeroDeploy from "@/assets/hero/hero-deploy.vue";
</script>

<style scoped>
button:hover {
  opacity: 0.9;
}
</style>
