<template>
  <main>
    <PageHeader
      title="Our Services"
      description="Comprehensive digital solutions tailored to your business needs"
    />
    
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            v-for="service in services"
            :key="service.title"
            v-bind="service"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import PageHeader from '@/components/shared/PageHeader.vue';
import ServiceCard from '@/components/services/ServiceCard.vue';
import { services } from '@/data/services';
</script>