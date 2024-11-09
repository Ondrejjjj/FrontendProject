import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BlogDetail from '../views/BlogDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/blogs/:id', component: BlogDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
