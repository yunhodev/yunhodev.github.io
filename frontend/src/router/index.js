import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  /*{
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" '../views/AboutView.vue')
  },*/
  {
    path: '/docs',
    name: 'docs',
    component: () => import('../views/DocsView.vue')
  },
  {
    path: '/tools',
    name: 'tools',
    component: () => import('../views/ToolsView.vue')
  },
  {
    path: '/sitemap',
    name: 'sitemap',
    component: () => import('../views/SiteMapView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
