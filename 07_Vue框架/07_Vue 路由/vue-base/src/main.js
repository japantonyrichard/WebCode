// 'vue'改成'vue/dist/vue' 用vue.js，解决runtime报错  
// import Vue from 'vue/dist/vue' // 引入vue完整版本
import Vue from 'vue'
// import Vue from 'vue' // runtime 运行版本
import App from './App.vue' // 根组件

// 引入单独拎出来的router文件index.js
import router from './router/index'

// // 2.引入路由插件VueRouter
// import VueRouter from 'vue-router'

// // 3.引入路由组件
// import Home from './views/Home.vue'
// import News from './views/News.vue'


// // （2.）安装路由
// Vue.use(VueRouter)

// // 4.配置路由规则（定义路由表）
// const routes=[{
//   path:'/home',   // 地址：  / + 字母
//   component:Home
// },{
//   path:'/news',
//   component:News
// }]

// // 5.创建路由实例
// const router = new VueRouter({
//   // routes:routes
//   routes
// })


// 关闭提醒
Vue.config.productionTip = false






new Vue({
  // 6.挂载路由到项目中
  // router:router,
  router,
  render: h => h(App),
}).$mount('#app') // $mount 挂载 《==》 el
