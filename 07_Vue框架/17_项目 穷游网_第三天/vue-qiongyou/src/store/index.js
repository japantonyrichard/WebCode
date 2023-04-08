import Vue from 'vue'
import Vuex from 'vuex'
// 导入登陆模块
import LoginModule from './modules/LoginModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    LoginModule,
  }
})