import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/claims.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/claims',
      name: 'claims',
      component: () => import('./pages/claims.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./pages/About.vue')
    },
    {
      path: '/fact',
      name: 'factWork',
      component: () => import('./pages/factWork.vue')
    }
  ]
})
