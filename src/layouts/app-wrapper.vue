<template>
  <div class="w-full min-h-screen bg-[#FAFAFA] dark:bg-[#000] dark:text-white">
    <div
      ref="navbar"
      class="sticky top-0 z-50 bg-[#FAFAFA] dark:bg-[#000] transition-all duration-300"
      :class="{ 'border-b dark:border-[#3b3b3b]': isScrolling }"
    >
      <slot name="navbar"></slot>
    </div>
    <div
      class="max-w-[1080px] lg:mx-auto border dark:border-[#3b3b3b] mt-6 lg:mt-24 mx-4 lg:px-0"
    >
      <slot name="main"></slot>
    </div>
    <div class="max-w-6xl mx-auto mt-12">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
const isScrolling = ref(false);

const handleScroll = () => {
  isScrolling.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
