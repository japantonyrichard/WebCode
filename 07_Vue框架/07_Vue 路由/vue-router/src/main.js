import Vue from 'vue'
import App from './App.vue'
// 导入路由实例
import router from './router'

Vue.config.productionTip = false

new Vue({
  // 6.挂载
  router,
  render: h => h(App)
}).$mount('#app')
