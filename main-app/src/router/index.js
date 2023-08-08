import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyPage from '../views/my-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
  //   path: '/my-page', // vue-router@4.x path的写法为：'/my-page/:page*'
  //   name: 'my-page',
  //   component: MyPage,
  // },
  {
    // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
    path: '/my-page/*', // vue-router@4.x path的写法为：'/my-page/:page*'
    name: 'my-page',
    component: MyPage,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  // base: window.__MICRO_APP_BASE_ROUTE__ || '/',
  
  // mode: 'history',
  routes
})

export default router
