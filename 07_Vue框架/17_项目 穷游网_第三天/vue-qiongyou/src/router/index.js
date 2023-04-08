import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout.vue'
import Home from '@/views/Home'
const News = () => import('@/views/News/News.vue')
const About = () => import('@/views/About')
const Travel = () => import('@/views/Travel')
const Login = () => import('@/views/Login.vue')


Vue.use(VueRouter)

const routes = [{
    path: '',
    component: Layout,
    children: [{
      path: '/',
      component: Home
    }, {
      path: '/news',
      component: News,
      meta: {
        isLogin: true //需要登录
      }
    }, {
      path: '/about',
      component: About,
      meta: {
        isLogin: true //需要登录
      }
    }, {
      path: '/travel',
      component: Travel,
      meta: {
        isLogin: true //需要登录
      }
    }]
  }, {
    path: '/login',
    component: Login
  }

]

const router = new VueRouter({
  routes
})



export default router