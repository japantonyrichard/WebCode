// 'vue'改成'vue/dist/vue' 用vue.js，解决runtime报错  
import Vue from 'vue/dist/vue' // 引入vue完整版本
// import Vue from 'vue' // runtime 运行版本
import App from './App.vue' // 根组件

// 关闭提醒
Vue.config.productionTip = false

// 原型链
Vue.prototype.$title='我是原型对象上的属性';

new Vue({
  data:{
    user:'admin',
    age:17
  },
  methods: {
    test(){
      console.log('全局方法');
    }
  },
  render: h => h(App),
}).$mount('#app') // $mount 挂载 《==》 el
