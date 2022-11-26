import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/main/HomeView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/components/main/ProfileView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/components/main/NewsView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
