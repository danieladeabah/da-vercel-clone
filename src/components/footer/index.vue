<template>
  <footer class="p-8">
    <div
      class="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6"
    >
      <div>
        <h3 class="font-semibold text-lg mb-2">Products</h3>
        <ul class="space-y-1">
          <li>All</li>
          <li>Enterprise</li>
          <li>Fluid Compute</li>
          <li>Next.js</li>
          <li>Observability</li>
          <li>Previews</li>
          <li>Rendering</li>
          <li>Security</li>
          <li>Turbo</li>
          <li>v0</li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-2">Resources</h3>
        <ul class="space-y-1">
          <li>Community</li>
          <li>Docs</li>
          <li>Guides</li>
          <li>Help</li>
          <li>Integrations</li>
          <li>Pricing</li>
          <li>Resources</li>
          <li>Solution Partners</li>
          <li>Templates</li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-2">Company</h3>
        <ul class="space-y-1">
          <li>About</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Changelog</li>
          <li>Contact Us</li>
          <li>Customers</li>
          <li>Partners</li>
          <li>Privacy Policy</li>
          <li>Legal</li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-2">Social</h3>
        <ul class="space-y-1">
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>YouTube</li>
        </ul>
      </div>
    </div>

    <!-- Footer bottom section -->
    <div class="flex justify-between items-center mt-6 pt-4 text-sm">
      <span>All systems normal</span>
      <button
        @click="toggleDarkMode"
        class="flex items-center space-x-2 px-4 py-2 border rounded-full"
      >
        <span v-if="darkMode">🌙 Dark Mode</span>
        <span v-else>☀️ Light Mode</span>
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
};
</script>

<style scoped>
footer {
  font-family: Arial, sans-serif;
}
</style>
