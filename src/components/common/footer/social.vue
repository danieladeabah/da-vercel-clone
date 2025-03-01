<template>
  <div>
    <h3 class="font-semibold text-lg mb-2">Social</h3>
    <ul class="space-y-2 text-gray-500">
      <li
        v-for="(social, index) in socials"
        :key="index"
        class="flex items-center gap-2 cursor-pointer"
      >
        <component :is="social.icon" class="text-gray-600 w-5 h-5" />
        {{ social.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  socials: {
    type: Array,
    required: true,
  },
});
</script>
