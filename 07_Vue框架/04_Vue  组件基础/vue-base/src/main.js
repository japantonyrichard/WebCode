// 'vue'改成'vue/dist/vue' 用vue.js，解决runtime报错  
import Vue from 'vue/dist/vue' // 引入vue完整版本
// import Vue from 'vue' // runtime 运行版本
import App from './App.vue' // 根组件

// 关闭提醒
Vue.config.productionTip = false


// 一.注册全局组件(任何地方都可以用)
Vue.component('component-a',{
  // 视图、模板
  template:`<div><h2>compA组件---{{msg}}</h2></div>`,
  // 数据
  data(){
    return{
      msg:'123'
    }
  },
  computed:{},
  methods:{

  },
})




new Vue({
  render: h => h(App),
}).$mount('#app') // $mount 挂载 《==》 el
