import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/cors',
      name: 'cors',
      component: () => import('../pages/CorsPage.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginPage.vue'),
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../pages/todo/TodoPage.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/todo/detail/:id',
      name: 'todo/detail',
      component: () => import('@/pages/todo/TodoDetailPage.vue'),
      meta: { requiresAuth: true },
      props: true,
    },
    {
      path: '/todo/write',
      name: 'todo/write',
      component: () => import('@/pages/todo/TodoWritePAge.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/todo/edit/:id',
      name: 'todo/edit',
      component: () => import('@/pages/todo/TodoEditPiniaPage.vue'),
      meta: { requiresAuth: true },
      props: true,
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('@/pages/pinia/PiniaPage.vue'),
    },
    {
      path: '/pinia-ex',
      name: 'pinia-ex',
      component: () => import('@/pages/pinia/PiniaExPage.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('auth') !== 'true') {
      alert('로그인이 필요합니다');
      return next({ name: 'login' });
    }
  }

  next();
});

export default router;
