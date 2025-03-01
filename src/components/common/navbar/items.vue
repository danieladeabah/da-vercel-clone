<template>
  <div class="relative group">
    <button
      class="hover:text-black dark:hover:text-white dark:text-gray-400 flex items-center"
    >
      {{ item.title }}
      <span class="ml-1">
        <ChevronDownIcon
          class="transition-transform duration-300 group-hover:rotate-180"
        />
      </span>
    </button>
    <div
      v-if="item.categories"
      class="absolute border left-0 top-full mt-2 w-[800px] bg-white dark:bg-black dark:border-[#3b3b3b] shadow-lg p-6 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
    >
      <div class="grid grid-cols-3 gap-4">
        <div v-for="(category, catIndex) in item.categories" :key="catIndex">
          <h4 class="font-semibold text-gray-500 mb-2">{{ category.title }}</h4>
          <div class="space-y-2">
            <a
              v-for="(subItem, subIndex) in category.items"
              :key="subIndex"
              href="#"
              class="flex items-center space-x-3 text-gray-700 group/item"
            >
              <component
                :is="subItem.icon"
                class="w-8 h-8 text-gray-400 dark:group-hover/item:bg-white group-hover/item:bg-black dark:group-hover/item:text-black transition-colors duration-300 p-2 font-bold rounded-lg"
              />
              <div>
                <span class="text-gray-500">{{ subItem.title }}</span>
                <span
                  v-if="subItem.description"
                  class="block text-sm text-gray-400"
                  >{{ subItem.description }}</span
                >
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ChevronDownIcon from "@/assets/icons/dropdown-icon.vue";

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
