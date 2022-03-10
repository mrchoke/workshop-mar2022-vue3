import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Countries from './pages/Countries.vue'

const routes = [
  { path: '/', name: "Home", component: Home },
  { path: '/countries', name: "Countries", component: Countries },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router