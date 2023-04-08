import {
  createStore
} from 'vuex'
// 引入模块
import modules from './modules/index'

export default createStore({
  modules,
})