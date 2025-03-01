<template>
  <div
    class="p-6 shadow-sm"
    :class="{ 'border-l dark:border-[#3b3b3b]': border }"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({ border: Boolean });
</script>
