import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AboutView from '../views/Public/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Auth/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Auth/Register.vue')
  },
  {
    path: '/repository',
    name: 'repository',
    component: () => import('../views/Private/Repository.vue')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/Private/Video.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Private/Contact.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/NotFound.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
