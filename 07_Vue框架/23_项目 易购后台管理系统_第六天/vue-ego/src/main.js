import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 引入路由拦截,执行一下
import '@/router/permission'

// 第一种方式：
// let userinfo = localStorage.getItem('user');
// if (userinfo) {
//   //  从本地取出来，再存到Vuex里==>修改state里的数据
//   store.commit('userModule/setUser', JSON.parse(userinfo))
// }

// 5.x 版本 不是这种导入方式
// import  echarts from 'echarts'
import * as echarts from 'echarts'

console.log(echarts);
Vue.prototype.$echarts=echarts;


// 引入初始化样式  
import '@/assets/css/reset.css'

// 导入 i18n
import i18n from '@/lang'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n, //挂载
  render: h => h(App)
}).$mount('#app')