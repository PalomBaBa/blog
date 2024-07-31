import { createRouter, createWebHistory } from 'vue-router'
import modules from './modules/modules';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/views/index.vue')
    },
    ...modules
  ]
})

export default router
