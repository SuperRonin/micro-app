import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RootApp from '../views/root-app.vue'
import ErrorView from '../views/errorView.vue'

Vue.use(VueRouter)
let pathname = '/'
if (window.__MICRO_APP_BASE_ROUTE__) {
  pathname = window.__MICRO_APP_BASE_ROUTE__
}
console.log('pathname', pathname);

const routes = [
  {
    path: pathname,
    component: RootApp,
    children: [
      // 其他的路由都写到这里
      {
        path: 'home',
        name: 'home',
        component: HomeView
      },
      {
        path: 'about',
        name: 'About',
        // redirect: '/about/aboutChild',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import('../views/AboutView.vue'),
        component: () => import('../views/aboutChild.vue'),
        children: [
          {
            path: 'aboutChild',
            name: 'AboutChild',
            component: () => import('../views/aboutChild.vue'),
          }
        ]
      },
      // {
      //   path: 'aboutChild',
      //   name: 'AboutChild',
      //   component: () => import('../views/aboutChild.vue'),
      // },
      {
        path: '*',
        component: ErrorView
      }
    ],
  },

]

const router = new VueRouter({
  mode: 'hash',

  // mode: 'history',
  // base: window.__MICRO_APP_BASE_ROUTE__ || '/',
  routes
})

export default router
