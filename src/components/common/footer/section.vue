<template>
  <div>
    <h3 class="font-semibold text-lg mb-2">{{ title }}</h3>
    <ul class="space-y-1 font-medium text-gray-500">
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});
</script>
