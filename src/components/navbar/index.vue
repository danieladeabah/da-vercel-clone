<template>
  <nav
    class="sticky top-0 z-50 bg-[#FAFAFA] flex justify-between items-center px-8 max-w-[100rem] mx-auto py-4"
  >
    <div class="flex items-center space-x-6">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <Logo />
      </div>

      <!-- Mobile Menu Icon -->
      <button @click="toggleMenu" class="absolute right-8 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <!-- Nav Links (Desktop) -->
      <div class="hidden lg:flex space-x-6 text-gray-700">
        <div
          class="relative group"
          v-for="(item, index) in navItems"
          :key="index"
        >
          <button class="hover:text-black flex items-center">
            {{ item.title }}
            <span class="ml-1">
              <ChevronDownIcon
                class="transition-transform duration-300 group-hover:rotate-180"
              />
            </span>
          </button>

          <!-- Dropdown with Icons -->
          <div
            class="absolute left-0 top-full mt-2 w-[500px] bg-white shadow-lg p-6 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
          >
            <div class="grid grid-cols-3 gap-4">
              <div
                v-for="(category, catIndex) in item.categories"
                :key="catIndex"
              >
                <h4 class="font-semibold text-gray-900 mb-2">
                  {{ category.title }}
                </h4>
                <div class="space-y-2">
                  <a
                    v-for="(subItem, subIndex) in category.items"
                    :key="subIndex"
                    href="#"
                    class="flex items-center space-x-3 text-gray-700 hover:text-black"
                  >
                    <component
                      :is="subItem.icon"
                      class="w-5 h-5 text-gray-600 group-hover:text-black"
                    />
                    <div>
                      <span>{{ subItem.title }}</span>
                      <span
                        v-if="subItem.description"
                        class="block text-sm text-gray-500 truncate"
                      >
                        {{ subItem.description }}
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="hover:text-black">Enterprise</a>
        <a href="#" class="hover:text-black">Docs</a>
        <a href="#" class="hover:text-black">Pricing</a>
      </div>
    </div>

    <!-- Auth Buttons (Desktop) -->
    <div class="hidden lg:flex space-x-4">
      <button class="border border-gray-300 px-4 py-1 rounded-lg shadow-sm">
        Log In
      </button>
      <button class="border border-gray-300 px-4 py-1 rounded-lg shadow-sm">
        Contact
      </button>
      <button class="bg-black text-white px-4 py-1 rounded-lg shadow-sm">
        Sign Up
      </button>
    </div>
  </nav>
</template>

<script setup>
import {
  CloudIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  CpuChipIcon,
  PhotoIcon,
  CommandLineIcon,
  PuzzlePieceIcon,
} from "@heroicons/vue/24/outline";
import Logo from "@/assets/icons/logo.vue";
import ChevronDownIcon from "@/assets/icons/dropdown-icon.vue";

const navItems = [
  {
    title: "Products",
    categories: [
      {
        title: "Hosting",
        items: [
          {
            title: "Vercel Edge",
            description: "Fast global deployment",
            icon: CloudIcon,
          },
          {
            title: "Serverless Functions",
            description: "API endpoints on demand",
            icon: CpuChipIcon,
          },
        ],
      },
      {
        title: "Optimization",
        items: [
          {
            title: "Next.js",
            description: "Build optimized React apps",
            icon: RocketLaunchIcon,
          },
          {
            title: "Image Optimization",
            description: "Speed up images on the web",
            icon: PhotoIcon,
          },
        ],
      },
      {
        title: "Developer Tools",
        items: [
          {
            title: "Vercel CLI",
            description: "Deploy via command line",
            icon: CommandLineIcon,
          },
          {
            title: "Integrations",
            description: "Connect to your stack",
            icon: PuzzlePieceIcon,
          },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    categories: [
      {
        title: "Use Cases",
        items: [
          {
            title: "AI Apps",
            description: "Deploy at the speed of AI",
            icon: CpuChipIcon,
          },
          {
            title: "Composable Commerce",
            description: "Power storefronts that convert",
            icon: RocketLaunchIcon,
          },
          {
            title: "Marketing Sites",
            description: "Launch campaigns fast",
            icon: CodeBracketIcon,
          },
        ],
      },
      {
        title: "Scalability",
        items: [
          {
            title: "Multi-tenant Platforms",
            description: "Scale apps with one codebase",
            icon: CloudIcon,
          },
          {
            title: "Web Apps",
            description: "Ship features, not infrastructure",
            icon: RocketLaunchIcon,
          },
        ],
      },
      {
        title: "Users",
        items: [
          {
            title: "Platform Engineers",
            description: "Automate away repetition",
            icon: CodeBracketIcon,
          },
          {
            title: "Design Engineers",
            description: "Deploy for every idea",
            icon: PhotoIcon,
          },
        ],
      },
    ],
  },
  {
    title: "Resources",
    categories: [
      {
        title: "Docs & Community",
        items: [
          {
            title: "Documentation",
            description: "Find guides and API references",
            icon: CodeBracketIcon,
          },
          {
            title: "Community",
            description: "Join our developer community",
            icon: PuzzlePieceIcon,
          },
        ],
      },
      {
        title: "Support",
        items: [
          {
            title: "Help Center",
            description: "Get support for your questions",
            icon: CloudIcon,
          },
          {
            title: "Contact Us",
            description: "Reach out to our team",
            icon: CpuChipIcon,
          },
        ],
      },
      {
        title: "More",
        items: [
          {
            title: "Blog",
            description: "Read the latest updates",
            icon: CommandLineIcon,
          },
          {
            title: "Changelog",
            description: "See what's new",
            icon: RocketLaunchIcon,
          },
        ],
      },
    ],
  },
];
</script>
