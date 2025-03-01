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

const userToken = useState("userToken", () => null);
const userData = useState("userData", () => null);
const router = useRouter();

onMounted(() => {
  if (process.client) {
    const storedToken = localStorage.getItem("userToken");
    const storedUserData = localStorage.getItem("userData");

    if (storedToken) {
      userToken.value = storedToken;
    }

    if (storedUserData) {
      try {
        userData.value = JSON.parse(storedUserData);
      } catch (error) {
        console.error("Failed to parse userData:", error);
        userData.value = null;
      }
    }

    if (userToken.value) {
      router.push("/");
    }
  }
});
</script>
