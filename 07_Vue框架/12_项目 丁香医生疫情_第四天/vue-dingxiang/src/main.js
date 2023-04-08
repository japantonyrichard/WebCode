import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 第一处：引入初始化样式
import '@/assets/css/reset.css'

//执行下vant.js
import '@/plugins/vant.js'

// // 导入日期格式化的库
// import moment from "moment";
// // 挂原型上，任何组件都就可以使用
// Vue.prototype.$moment=moment;
// // 统一设置成中文
// Vue.prototype.$moment.locale('zh-cn');




// 2、引入
import echarts from "echarts";
Vue.prototype.$echarts=echarts;

// 引入自己写的插件
import Echarts from './plugins/echarts'
// 安装插件 install
Vue.use(Echarts)




import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入样式
import 'swiper/css/swiper.css'
// 安装Swiper 插件 
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
