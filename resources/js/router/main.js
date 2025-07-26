// main.js
import { createApp } from 'vue'
import App from '../components/App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Define your routes
const routes = [
  { path: '/', component: () => import('../pages/Home.vue') },
  { path: '/about', component: () => import('../pages/About.vue') },
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
