<template>
  <section class="relative flex flex-col items-center justify-center">
    <div
      class="lg:absolute lg:inset-x-0 md:top-[12rem] lg:top-[20%] px-2 py-4 text-center max-w-screen-lg mx-auto z-10"
    >
      <h1
        class="text-3xl font-normal lg:font-bold text-black dark:text-white lg:dark:text-black"
      >
        Your complete platform for the web.
      </h1>
      <p
        class="mt-2 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 lg:dark:text-black max-w-2xl mx-auto"
      >
        Vercel provides the developer tools and cloud infrastructure to build,
        scale, and secure a faster, more personalized web.
      </p>

      <div class="mt-6 flex justify-center gap-1 lg:gap-4">
        <UButton primary padding="py-2 px-5"> ▲ Deploy </UButton>
        <UButton> Get a Demo </UButton>
      </div>
    </div>

    <HeroBg class="w-full" />

    <div class="absolute inset-x-0 top-[4rem] lg:top-[12rem] h-1/2">
      <Triangle class="w-full" />
    </div>

    <HeroDeploy width="100%" height="" />
  </section>
</template>

<script setup>
import HeroBg from "@/assets/landing/hero/hero-bg.vue";
import HeroDeploy from "@/assets/landing/hero/hero-deploy.vue";
import Triangle from "@/assets/landing/hero/triangle.vue";
import UButton from "@/components/common/button.vue";
</script>
