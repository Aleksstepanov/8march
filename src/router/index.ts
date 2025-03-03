import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const HomePage = () => import('@/pages/page-home')
const GreetingPage = () => import('@/pages/page-greeting')

export enum AppRoutes {
  GREETING = 'greeting',
  HOME = 'home'
}

type RouteWithQuery<T extends Record<string, unknown>> = {
  query: Partial<T>
}

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: { name: AppRoutes.GREETING } },
  { path: '/greeting', name: AppRoutes.GREETING, component: GreetingPage },
  {
    path: '/home',
    name: AppRoutes.HOME,
    component: HomePage,
    props: (route: RouteWithQuery<{ name: string }>) => ({
      name: route.query.name ?? 'Незнакомка'
    })
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
