import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index')
  }
]

// 路由表
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
