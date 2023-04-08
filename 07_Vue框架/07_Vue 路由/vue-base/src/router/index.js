import Vue from 'vue'

// 2.引入路由插件VueRouter
import VueRouter from 'vue-router'

// 3.引入路由组件
import Home from '../views/Home.vue'
import News from '../views/News.vue'


// （2.）安装路由
Vue.use(VueRouter)

// 4.配置路由规则（定义路由表）
const routes=[{
  path:'/home',   // 地址：  / + 字母
  component:Home
},{
  path:'/news',
  component:News
}]

// 5.创建路由实例
const router = new VueRouter({
  // routes:routes
  routes
})


// 导出路由实例
export default router