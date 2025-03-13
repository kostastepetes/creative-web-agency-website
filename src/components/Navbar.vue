<template>
  <Menubar :model="items" class="border-none shadow-sm backdrop-blur-sm fixed w-full z-50">
    <template #start>
      <router-link to="/" class="flex items-center gap-2 mr-4">
        <span class="font-bold text-xl bg-black text-[#EBED9E] p-2 rounded transition-transform transform hover:scale-110">Creative</span>
      </router-link>
    </template>
    <template #end>
      <router-link to="/contact">
        <Button label="Contact Us" icon="pi pi-send" class="p-button-rounded bg-[#4745C9] text-white p-3 hover:bg-[#3633A2] transition-all" />
      </router-link>
    </template>
  </Menubar>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const handleNavigation = (id) => {
  if (route.path === '/') {
    // On homepage - scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // On other pages - navigate to homepage then scroll
    router.push({
      path: '/',
      hash: `#${id}`
    });
  }
};

const items = [
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => router.push('/'),
    class: 'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#5A58E9] after:transition-all hover:after:w-full'
  },
  {
    label: 'Services',
    icon: 'pi pi-star',
    command: () => route.path === '/' ? handleNavigation('services') : router.push('/services'),
    class: 'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#5A58E9] after:transition-all hover:after:w-full'
  },
  {
    label: 'Portfolio',
    icon: 'pi pi-images',
    command: () => route.path === '/' ? handleNavigation('portfolio') : router.push('/portfolio'),
    class: 'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#5A58E9] after:transition-all hover:after:w-full'
  },
  {
    label: 'About',
    icon: 'pi pi-users',
    command: () => route.path === '/' ? handleNavigation('about') : router.push('/about'),
    class: 'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#5A58E9] after:transition-all hover:after:w-full'
  }
];
</script>
