import Vue from 'vue'
import Vuex from 'vuex'
// 导入用户模块
import userModule from './modules/userModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userModule: userModule
  }
})