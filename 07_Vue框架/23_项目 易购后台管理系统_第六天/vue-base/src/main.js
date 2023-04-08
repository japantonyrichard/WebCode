import Vue from 'vue/dist/vue' //引入vue 完整版本
// import Vue from 'vue' //运行时版本
import App from './App.vue' //根组件

// 关闭提醒
Vue.config.productionTip = false



import 'animate.css';


// 全局捕获
Vue.config.errorHandler = function (err, vm, info) {
  console.log(err, vm, info);
  console.log('全局的');
}

// 全局指令
Vue.directive("focus", {
  // 当被绑定的元素插入到 DOM 中时……  el：被绑定的元素 input
  inserted: function (el) {
    // 获取焦点
    el.focus();
  }
})

// 全局指令--带参数 
Vue.directive('color', {
  // 当被绑定的元素插入到 DOM 中时……  el：被绑定的元素 input
  inserted: function (el, binding) {
    console.log(binding.value.color);
    el.style.background = binding.value.color;
  }
})

// 全局过滤器
Vue.filter('upper', function (val) {
  if (!val) return '';
  // return val.toString().toUpperCase(); //全大写
  return val.toString().charAt(0).toUpperCase() + val.slice(1).toLowerCase(); //首字母大写
})




new Vue({
  data: {
    user: 'admin',
    age: 17
  },
  methods: {
    test() {
      console.log('全局方法');
    }
  },
  render: h => h(App),
}).$mount('#app') //$mount 挂载  《==》el