<template>
  <div class="w-full bg-[#FAFAFA] dark:bg-[#000] dark:text-white">
    <div
      class="sticky top-0 z-50 bg-[#FAFAFA] dark:bg-[#000] border-b dark:border-[#3b3b3b]"
    >
      <slot name="navbar"></slot>
    </div>
    <div
      class="max-w-[1079px] lg:mx-auto border dark:border-[#3b3b3b] mt-12 mx-6 lg:px-0"
    >
      <slot name="main"></slot>
    </div>
    <div class="max-w-6xl mx-auto mt-12">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
