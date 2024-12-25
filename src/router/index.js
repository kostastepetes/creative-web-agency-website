import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('@/views/Services.vue'),
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('@/views/Portfolio.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/Contact.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // If there's a saved scroll position (back/forward navigation), restore it
    if (savedPosition) {
      return savedPosition;
    }
    // Scroll to the top of the page for all other navigations
    return { top: 0 };
  },
});

export default router;
