import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import apiPage from '@/views/apiPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/api',
      name: 'api',
      component: apiPage
    }
  ]
})

export default router
