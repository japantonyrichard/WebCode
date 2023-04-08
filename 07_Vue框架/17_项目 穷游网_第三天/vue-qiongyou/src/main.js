import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入路由拦截
import '@/router/permission'

// 执行下里面的代码
import './plugins/element.js'


import '@/assets/css/base.css'


Vue.config.productionTip = false


// 获取本地存储数据
const user = localStorage.getItem('user');
if (user) {
  // 转成JSON对象
  let obj = JSON.parse(user)
  // 存到vuex
  store.commit('LoginModule/setUser', obj)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')