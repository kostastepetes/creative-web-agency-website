<template>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input
            v-model="form.firstName"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input
            v-model="form.lastName"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          v-model="form.email"
          type="email"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          v-model="form.message"
          rows="4"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        ></textarea>
      </div>
      <Button type="submit" label="Send Message" icon="pi pi-send" class="w-full p-button-lg" />
    </form>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', form);
    // Reset form
    form.firstName = '';
    form.lastName = '';
    form.email = '';
    form.message = '';
  };
  </script>