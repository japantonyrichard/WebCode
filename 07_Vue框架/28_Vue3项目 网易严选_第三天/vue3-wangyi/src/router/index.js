import { createRouter, createWebHashHistory } from 'vue-router'
import Layout  from  '@/views/Layout.vue'
import Home from '@/views/Home'
const Login =()=>import('@/views/Login.vue')
const CategoryTop=()=>import('@/views/Category')


const routes = [
  {
    path:'/',
    component:Layout,
    children:[{
      path:'/',
      component:Home
    },{
      // 动态路由
      path:'/category/:id',
      component:CategoryTop
    }]
  },{
    path:'/login',
    component:Login
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
