<template>
  <section class="max-w-6xl mx-auto">
    <!-- Top Section -->
    <SectionGrid>
      <SectionCard>
        <GitConnect width="100%" />
      </SectionCard>
      <SectionCard border>
        <Collaborate width="100%" />
      </SectionCard>
    </SectionGrid>

    <!-- Middle Section -->
    <Charts />

    <!-- Bottom Section -->
    <SectionGrid>
      <SectionCard>
        <Rollback width="100%" />
      </SectionCard>
      <SectionCard border>
        <Conformance width="100%" />
      </SectionCard>
    </SectionGrid>

    <!-- Footer CTA -->
    <FooterCTA />

    <!-- Deployment Section -->
    <DeploymentSection />
  </section>
</template>

<script setup>
import GitConnect from "@/assets/landing/sections/git-connect.vue";
import Collaborate from "@/assets/landing/sections/collaborate.vue";
import Rollback from "@/assets/landing/sections/rollback.vue";
import Conformance from "@/assets/landing/sections/conformance.vue";

import SectionGrid from "@/components/landing/sections/grid.vue";
import SectionCard from "@/components/landing/sections/card.vue";
import Charts from "~/components/landing/sections/charts.vue";
import FooterCTA from "@/components/landing/sections/cta.vue";
import DeploymentSection from "@/components/landing/sections/deployment.vue";
</script>
