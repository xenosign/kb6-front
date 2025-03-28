import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutView.vue'),
    },
    {
      path: '/dynamic/:mood',
      name: 'dynamic',
      component: () => import('../pages/DynamicPage.vue'),
      props: true,
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../pages/UserPage.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('../pages/NotFound.vue'),
    },
  ],
});

export default router;
