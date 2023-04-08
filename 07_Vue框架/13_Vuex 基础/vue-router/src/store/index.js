/**
 * ================ 分离仓库 ===============
 */

import Vue from 'vue'
// 2.导入Vuex，并且安装到项目中
import Vuex from 'vuex'
// 安装
Vue.use(Vuex)

// 引入提出去的state.js
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import cityModule from './module/cityModule'
import userModule from './module/userModule'


// 引入日志插件
import createLogger from 'vuex/dist/logger'

// 定义插件
const myPlugin = store => {
    // 当 store 初始化后调用
    store.subscribe((mutation, state) => {
        // 每次 mutation 之后调用
        // mutation 的格式为 { type, payload }
        console.log(mutation, state);// 作用：监听每一次操作触发哪个mutation和state
    })
}

// // 按需导入常量
// import { ADD_MUTATIOM, SUBN_MUTATION } from './mutation-types';

// 3.创建Store实例
const store = new Vuex.Store({
    // 使用插件
    plugins:[myPlugin,createLogger()], 
    // 开启严格模式
    strict:true,

    // 共享数据
    // state:state,
    state,
    // mutation 变异、变更    改state数据的
    mutations,
    /**
      * Action 用于处理异步任务。如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，但是在 Action 中还是要通过触发Mutation 的方式间接变更数据。
      * 在 actions 中，不能直接修改 state 中的数据；
      * 必须通过 context.commit() 触发某个 mutation 才行
      */
    actions,
    // 对列表进行过滤并计数
    getters,
    modules: {
        cityModule,
        // a:cityModule,
        userModule
        // b:userModule
    }
}
)

// 导出实例
export default store

