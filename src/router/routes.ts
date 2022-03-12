import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/Home.vue')
  }, {
    path: '/groups',
    redirect: { name: 'home' }
  }, {
    path: '/groups/:groupId',
    name: 'groups',
    component: () => import('@/views/Groups/Groups.vue')
  }, {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'home' }
  }
]

export default routes
