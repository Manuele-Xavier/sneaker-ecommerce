import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Hard Sneaker',
    component: Home,
  },
  {
    path: '/item:id',
    name: 'Product',
    component: () => import( '../views/Product-Item.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
