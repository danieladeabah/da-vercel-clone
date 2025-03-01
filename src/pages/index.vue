<template>
  <NuxtLayout name="app-wrapper">
    <template #navbar>
      <CommonNavbar />
    </template>
    <template #main>
      <LandingHero />
      <LandingSections />
    </template>
    <template #footer>
      <CommonFooter />
    </template>
  </NuxtLayout>
</template>
