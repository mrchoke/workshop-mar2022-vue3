import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Api from './pages/Api.vue'

const routes = [
  { path: '/', name: "Home", component: Home },
  { path: '/api', name: "Api", component: Api },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router