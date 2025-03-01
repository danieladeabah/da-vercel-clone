<template>
  <footer class="p-8">
    <div
      class="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6"
    >
      <FooterSection title="Products" :items="productItems" />
      <FooterSection title="Resources" :items="resourceItems" />
      <FooterSection title="Company" :items="companyItems" />
      <FooterSocialSection :socials="socialLinks" />
    </div>
    <FooterBottom />
  </footer>
</template>

<script setup>
import FooterSection from "@/components/common/footer/section.vue";
import FooterSocialSection from "@/components/common/footer/social.vue";
import FooterBottom from "@/components/common/footer/bottom.vue";
import {
  productItems,
  resourceItems,
  companyItems,
  socialLinks,
} from "@/constants/footer";
</script>

<style scoped>
footer {
  font-family: Arial, sans-serif;
}
button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
