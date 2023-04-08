import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Login from '@/views/Login/Login.vue'
import Home from '@/views/Home/Home.vue'

const Goods = () => import('@/views/Goods/Goods.vue')
const GoodsList = () => import('@/views/Goods/GoodsList.vue')
const GoodsAdd = () => import('@/views/Goods/GoodsAdd.vue')
const Parmas = () => import('@/views/Pramas')
const Order = () => import('@/views/Order')
const User = () => import('@/views/User')


Vue.use(VueRouter)

const routes = [{
  path: '',
  component: Layout,
  // 路由元信息  只要给父路由配置，会拦截下面所有的组件
  meta:{
    isLogin:true,  //标记
  },
  // 二级路由
  children: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/goods',
    component: Goods,
    redirect:'/goods/goods-list',
    children: [{
      path: '/goods/goods-list',
      component: GoodsList
    }, {
      path: '/goods/goods-add',
      component: GoodsAdd
    }]
  }, {
    path: '/params',
    component: Parmas
  }, {
    path: '/order',
    component: Order
  }, {
    path: '/user',
    component: User
  }]
}, {
  path: '/login',
  component: Login
}]

const router = new VueRouter({
  routes
})

export default router