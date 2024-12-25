<template>
  <div class="group relative overflow-hidden rounded-xl">
    <!-- Project Image -->
    <img 
      :src="image" 
      :alt="title"
      class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
    />
    
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="absolute bottom-0 left-0 right-0 p-6">
        <h3 class="text-xl font-bold text-white mb-2">{{ title }}</h3>
        <p class="text-gray-200 text-sm mb-4">{{ description }}</p>
        
        <!-- Tags -->
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tag in tags" 
            :key="tag"
            class="px-3 py-1 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    default: () => []
  }
});
</script>