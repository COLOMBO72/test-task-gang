import { createRouter, createWebHistory } from 'vue-router';
import ItemsPage from '../pages/ItemsPage.vue';
import ItemPage from '../pages/ItemPage.vue';

const routes = [
  {
    path: '/',
    component: ItemsPage,
  },
  {
    path: '/item/:id',
    component: ItemPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
