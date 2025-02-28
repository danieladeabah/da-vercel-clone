<template>
  <div class="w-full bg-[#FAFAFA]">
    <slot name="navbar"></slot>
    <div class="max-w-[1079px] mx-auto border mt-12 px-2 lg:px-0">
      <slot name="main"></slot>
    </div>
    <div class="max-w-6xl mx-auto mt-12">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
