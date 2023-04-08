import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 执行plugins/vant.js
import '@/plugins/vant'

// 引入axios
import axios from 'axios'

Vue.config.productionTip = false

// 挂载原型对象上
Vue.prototype.$axios=axios;

// Vue.prototype.$bus=Vue;


new Vue({
  router,
  beforeCreate(){
    Vue.prototype.$bus=this; // 1.配置事件总线，把Vue实例挂载到vue的原型对象上，因此，所有组件都能访问$bus，并且能看到他身上的 $emit 和 $on
  },
  render: h => h(App)
}).$mount('#app')
