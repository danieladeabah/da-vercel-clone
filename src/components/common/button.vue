<template>
  <button
    :class="[
      'px-5 sm:px-6 font-medium truncate flex items-center border',
      primary
        ? 'bg-black text-white dark:bg-white dark:text-black hover:bg-[#1F1F1F]'
        : 'bg-white text-black dark:bg-black dark:text-white dark:hover:bg-[#1F1F1F] border-gray-300 dark:border-[#3b3b3b]',
      rounded ? `${rounded}` : '',
      padding ? `${padding}` : '',
    ]"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  primary: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: [Boolean, String],
    default: "rounded-full",
  },
  padding: {
    type: [Boolean, String],
    default: "py-2",
  },
});
</script>
