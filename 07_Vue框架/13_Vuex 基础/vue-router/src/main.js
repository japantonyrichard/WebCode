import Vue from 'vue'
import App from './App.vue'
// 导入路由实例
import router from './router'

// 导入仓库实例
import store from './store'

// ---------------------------------------------------------------------------------------
// // 2.导入Vuex，并且安装到项目中
// import Vuex from 'vuex'
// // 安装
// Vue.use(Vuex)

// // 3.创建Store实例
// const store = new Vuex.Store({
//   // 共享数据
//   state:{
//     count:0,
//     num:100
//   },
//   // mutation 变异、变更    改state数据的
//   mutations:{ 
//     // mutation是一个方法，在此可以定义多个mutation
//     // 1.定义 mutation      作用：修改state里的数据
//     add(state){
//       // 状态变更
//       state.count++;
//     },
//     // 带参数
//     addN(state,step){
//       state.count+=step;
//     },
//     // payload {step:5,info:''}
//     addN2(state,payload){  // payload 负载
//       state.count+=payload.step
//     },
//     sub(state){
//       state.count--;
//     },
//     subN(state,num){
//       state.count-=num;
//     }
//   }
// })
// 整体移到 store/index.js
// ------------------------------------------------------------------------------------------


Vue.config.productionTip = false

new Vue({
  // 6.挂载
  router,
  // store:store,
  store,
  render: h => h(App)
}).$mount('#app')
