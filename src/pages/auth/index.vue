<template>
  <NuxtLayout name="app-wrapper">
    <template #navbar>
      <CommonNavbar :userData="userData" />
    </template>
    <template #main>
      <GoogleAuth />
    </template>
    <template #footer>
      <CommonFooter />
    </template>
  </NuxtLayout>
</template>

<script setup>
import GoogleAuth from "@/pages/auth/google-auth.vue";
import { getUserAuthState, checkUserAndRedirect } from "@/utils/auth";

const router = useRouter();
const { userToken, userData } = getUserAuthState();

onMounted(() => {
  checkUserAndRedirect(router, userToken);
});
</script>
