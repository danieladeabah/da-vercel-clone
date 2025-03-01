<template>
  <section class="relative flex flex-col items-center justify-center">
    <HeroBg class="w-full" />

    <div class="absolute inset-x-0 top-[12rem] h-1/2 hidden lg:block">
      <Triangle class="w-full" />
    </div>

    <div
      class="absolute inset-x-0 top-4 md:top-[12rem] lg:top-[20%] px-4 text-center max-w-screen-lg mx-auto"
    >
      <h1 class="text-3xl md:text-3xl font-bold text-black dark:text-white">
        Your complete platform for the web.
      </h1>
      <p
        class="mt-2 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
      >
        Vercel provides the developer tools and cloud infrastructure to build,
        scale, and secure a faster, more personalized web.
      </p>

      <div class="mt-6 flex justify-center gap-4">
        <UButton primary> ▲ Start Deploying </UButton>
        <UButton> Get a Demo </UButton>
      </div>
    </div>

    <HeroDeploy class="w-full max-w-screen-lg" />
  </section>
</template>

<script setup>
import HeroBg from "@/assets/landing/hero/hero-bg.vue";
import HeroDeploy from "@/assets/landing/hero/hero-deploy.vue";
import Triangle from "@/assets/landing/hero/triangle.vue";
import UButton from "@/components/common/button.vue";
</script>
