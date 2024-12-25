<template>
  <header class="pt-32 pb-16 text-center">
    <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ title }}</h1>
    <p class="text-xl text-gray-600 max-w-2xl mx-auto">{{ description }}</p>
  </header>
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
  }
});
</script>