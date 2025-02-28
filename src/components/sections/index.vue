<template>
  <section class="max-w-6xl mx-auto">
    <!-- Top Section -->
    <div class="grid md:grid-cols-2  border-t border-b gap-8">
      <!-- Left Card -->
      <div class="p-6 shadow-sm">
        <h3 class="text-gray-500 text-sm">→ Git-connected Deploys</h3>
        <h2 class="text-xl font-semibold mt-2">
          From localhost to https, in seconds.
        </h2>
        <p class="text-gray-600 mt-2">Deploy from Git or your CLI.</p>
        <GitConnect />
      </div>

      <!-- Right Card -->
      <div class="p-6 border-l shadow-sm">
        <h3 class="text-gray-500 text-sm">◉ Collaborative pre-production</h3>
        <h2 class="text-xl font-semibold mt-2">Every deploy is remarkable.</h2>
        <p class="text-gray-600 mt-2">
          Chat with your team on real, production-grade UI, not just designs.
        </p>
        <Collaborate />
      </div>
    </div>

    <!-- Middle Section -->
    <div class="mt-10 p-6 border-t border-b shadow-sm">
      <h3 class="text-gray-500 text-sm">→ Frontend Observability</h3>
      <h2 class="text-xl font-semibold mt-2">
        Privacy-friendly, lightweight Analytics.
      </h2>
      <p class="text-gray-600 mt-2">
        Upgrade your post-launch workflow with actionable, real-time insights.
      </p>
      <div class="mt-4">
        <Charts />
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="grid md:grid-cols-2 border-t border-b gap-8 mt-10">
      <!-- Left Card -->
      <div class="p-6  shadow-sm">
        <h3 class="text-gray-500 text-sm">→ Instant Rollbacks</h3>
        <h2 class="text-xl font-semibold mt-2">Go ahead, deploy on Friday.</h2>
        <p class="text-gray-600 mt-2">
          Instantly rollback to a working deployment.
        </p>
        <Rollback />
      </div>

      <!-- Right Card -->
      <div class="p-6 border-l shadow-sm">
        <h3 class="text-gray-500 text-sm">◉ Conformance</h3>
        <h2 class="text-xl font-semibold mt-2">
          Move fast, don’t break things.
        </h2>
        <p class="text-gray-600 mt-2">
          Keep quality high while maintaining velocity with Enterprise
          Monorepos.
        </p>
        <Conformance />
      </div>
    </div>

    <!-- Footer CTA -->
    <div class="text-center mt-10 text-lg font-semibold">
      Scale your <span class="text-blue-600">Enterprise</span> without
      compromising <span class="text-gray-700">Security</span>.
    </div>

    <!-- Left Section -->
    <div class="mt-10 md:flex items-center  border-t border-b gap-10">
      <div class="flex-1 px-8">
        <h2 class="text-lg font-semibold">
          <span class="text-black">Ready to deploy?</span>
          <span class="text-gray-600">Start building with a free account.</span>
        </h2>
        <p class="text-gray-600 mt-2">
          Speak to an expert for your
          <span class="text-blue-500 font-semibold">Pro</span> or
          <span class="text-purple-500 font-semibold">Enterprise</span> needs.
        </p>
        <div class="mt-4 flex gap-4">
          <button class="bg-black text-white px-4 py-2 rounded-lg">
            Start Deploying
          </button>
          <button class="border-t border-b border-gray-300 px-4 py-2 rounded-lg">
            Talk to an Expert
          </button>
        </div>
      </div>

      <!-- Right Section -->
      <div
        class="mt-6 md:mt-0 md:ml-10 p-4 border-l px-8 shadow-sm"
      >
        <p class="text-gray-800 font-medium">Explore Vercel Enterprise</p>
        <p class="text-gray-600 text-sm mt-1">
          with an interactive product tour, trial, or a personalized demo.
        </p>
        <button class="mt-3 px-4 py-8 rounded-lg">
          Explore Enterprise
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import GitConnect from "@/assets/sections/git-connect.vue";
import Collaborate from "@/assets/sections/collaborate.vue";
import Charts from "@/assets/sections/charts.vue";
import Rollback from "@/assets/sections/rollback.vue";
import Conformance from "@/assets/sections/conformance.vue";
</script>
