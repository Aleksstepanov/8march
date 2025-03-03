import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('@/pages/page-home')
const GreetingPage = () => import('@/pages/page-greeting')

const routes = [
  { path: '/', redirect: '/greeting' },
  { path: '/home', component: HomePage },
  { path: '/greeting', component: GreetingPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
