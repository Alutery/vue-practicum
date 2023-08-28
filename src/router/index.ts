import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/why',
      name: 'why',
      component: () => import('../views/WhyView.vue')
    },
    {
      path: '/screencast',
      name: 'screencast',
      component: () => import('../views/ScreencastView.vue')
    }
  ]
})

export default router
