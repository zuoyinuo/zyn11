import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyYd from '@/views/MyYd/MyYd'
// 微电影
import WeiDian from "../views/WeiDian/WeiDian.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // 微电影
  {
    path:"/WeiDian",
    name:"WeiDian",
    component:WeiDian
  }, 
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/MyYd',
    name: 'MyYd',
    component:MyYd,
  },
  {
    path: '/kepian',
    name: 'kepian',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/KePian.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
