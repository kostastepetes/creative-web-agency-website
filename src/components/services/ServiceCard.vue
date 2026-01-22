<template>
  <Card class="service-card">
    <template #header>
      <i :class="icon + ' text-4xl text-blue-600 p-6'"></i>
    </template>
    <template #title>{{ title }}</template>
    <template #content>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      <ul class="text-sm text-gray-500 space-y-2">
        <li v-for="feature in features" :key="feature" class="flex items-center gap-2">
          <i class="pi pi-check text-green-500"></i>
          {{ feature }}
        </li>
      </ul>
    </template>
  </Card>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    default: () => []
  }
});
</script>
