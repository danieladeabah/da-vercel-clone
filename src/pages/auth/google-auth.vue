<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div
      id="g_id_onload"
      :data-client_id="googleClientId"
      data-callback="handleCredentialResponse"
      data-auto_prompt="false"
    ></div>
    <div class="g_id_signin" data-type="standard"></div>
  </div>
</template>

<script setup>
import { useRuntimeConfig } from "#app";
import { loadGoogleSignIn, handleCredentialResponse } from "@/utils/auth";

const user = ref(null);
const config = useRuntimeConfig().public;

onMounted(() => {
  loadGoogleSignIn(config.googleClientId, (response) =>
    handleCredentialResponse(response, user),
  );
});
</script>
