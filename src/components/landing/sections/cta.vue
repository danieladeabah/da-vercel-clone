<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-center gap-2 mt-10 text-lg font-normal"
  >
    Scale your
    <UButton>
      <span class="flex items-center gap-2"><ConnectIcon /> Enterprise</span>
    </UButton>
    without compromising
    <UButton>
      <span class="flex items-center gap-2"><PrivacyIcon /> Security</span>
    </UButton>
  </div>
</template>

<script setup>
import ConnectIcon from "@/assets/icons/connect-icon.vue";
import PrivacyIcon from "@/assets/icons/privacy-icon.vue";
import UButton from "@/components/common/button.vue";
</script>
