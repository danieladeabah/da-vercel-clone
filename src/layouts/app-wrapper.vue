<template>
  <div class="w-full bg-[#FAFAFA]">
    <div class="sticky top-0 z-50 bg-[#FAFAFA] py-2 border-b">
      <slot name="navbar"></slot>
    </div>
    <div class="max-w-[1079px] mx-auto lg:border mt-12 px-2 lg:px-0">
      <slot name="main"></slot>
    </div>
    <div class="max-w-6xl mx-auto mt-12">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
