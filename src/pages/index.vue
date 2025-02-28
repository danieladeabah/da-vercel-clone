<template>
  <NuxtLayout name="app-wrapper">
    <template #navbar>
      <Navbar />
    </template>
    <template #main>
      <Hero />
      <Sections />
    </template>
    <template #footer>
      <Footer />
    </template>
  </NuxtLayout>
</template>
