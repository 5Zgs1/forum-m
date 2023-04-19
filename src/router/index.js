import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/index'),
    children: [
      {
        path: '', // 子路由，默认有一个就行
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/question',
        name: 'question',
        component: () => import('@/views/question')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  }
]

// 路由表
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
