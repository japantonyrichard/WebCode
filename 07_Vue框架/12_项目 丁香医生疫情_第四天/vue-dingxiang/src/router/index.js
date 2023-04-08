import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
const Province = () => import('@/views/Province')
const Area = () => import('@/views/Area')
const Hesuan = () => import('@/views/Hesuan')
const Prevention = () => import('@/views/Prevention')
const Travel = () => import('@/views/Travel')


Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  // 动态路由
  path: '/province/:name',
  component: Province,
  props: true // 表示可以传递参数
}, {
  path: '/area',
  component: Area,
}, {
  path: '/hesuan',
  component: Hesuan
}, {
  path: '/prevention',
  component: Prevention
}, {
  path: '/travel',
  component: Travel
}]

const router = new VueRouter({
  routes
})

export default router