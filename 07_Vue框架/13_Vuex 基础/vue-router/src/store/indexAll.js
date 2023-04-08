/**
 * ================ 分离仓库 ===============
 */

import Vue from 'vue'
// 2.导入Vuex，并且安装到项目中
import Vuex from 'vuex'
// 安装
Vue.use(Vuex)

// 按需导入常量
import { ADD_MUTATIOM, SUBN_MUTATION } from './mutation-types';

// 3.创建Store实例
const store = new Vuex.Store({
    // 共享数据
    state: {
        count: 0,
        num: 100,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false },
            { id: 3, text: '...', done: true },
            { id: 4, text: '...', done: false }
        ]
    },
    // mutation 变异、变更    改state数据的
    mutations: {
        // mutation是一个方法，在此可以定义多个mutation
        // 1.定义 mutation      作用：修改state里的数据
        [ADD_MUTATIOM](state) {
            // 不让在mutation中写异步！！！ 用下面的写法！
            setTimeout(() => {
                state.count++;
            }, 2000)
        },
        // [ADD_MUTATIOM](state){
        //     // 状态变更
        //     state.count++;
        // },
        add(state) {
            // 状态变更
            state.count++;
        },
        // 带参数
        addN(state, step) {
            state.count += step;
        },
        // payload {step:5,info:''}
        addN2(state, payload) {  // payload 负载
            state.count += payload.step
        },
        sub(state) {
            state.count--;
        },
        // 传参
        // subN(state,num){
        //   state.count-=num;
        // }
        // 传参  SUBN_MUTATION 常量的值是mutation的名字
        [SUBN_MUTATION](state, num) {
            state.count -= num;
        }
    },
    /**
      * Action 用于处理异步任务。如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，但是在 Action 中还是要通过触发Mutation 的方式间接变更数据。
      * 在 actions 中，不能直接修改 state 中的数据；
      * 必须通过 context.commit() 触发某个 mutation 才行
      */
    actions: {
        // 每个action都是一个方法   context:就是 new Store 实例    context.commit('mutation名字')
        addAsync(context) {
            setTimeout(() => {
                // 在 actions 中，不能直接修改 state 中的数据；
                // 必须通过 context.commit() 触发某个 mutation 才行
                // action里写异步，本质还是同步触发某个mutation
                context.commit(ADD_MUTATIOM)

            }, 2000)
        },
        // 异步 +N
        // addNAsync(context,num){     // context.commit()  context={commit(){},msg}
        //     const { commit } = context; // 解构
        //     setTimeout(()=>{
        //         // // commit mutation   
        //         // context.commit('addN',num)
        //         commit('addN',num)
        //     },2000)
        // }
        // 异步 +N ES6解构
        addNAsync({ commit }, num) {     // context.commit()  context={commit(){},msg}
            setTimeout(() => {
                commit('addN', num)
            }, 2000)
        },
        // 异步 -N
        subNAsync({ commit }, num) {
            setTimeout(() => {
                // 同步触发mutation
                commit(SUBN_MUTATION, num)
            }, 2000)
        }
    },
    // 对列表进行过滤并计数
    getters: {
        // 相当于计算属性
        showCount: state => {
            return state.count * 2;
            // return '当前最新的数量是【'+ state.count +'】'
        },
        doneGetters: state => {
            // [].filter  ==> []
            return state.todos.filter(item => item.done)
        }
    },
    modules: {
        cityModule: {
            // namespaced:true,
            namespaced: true,
            state: {
                cityName: '东京',
                cityId: '001'
            },
            mutations: {
                changeCity(state, payload) {
                    state.cityName = payload;
                }
            },
            actions: {
                changeCityAsync({ commit }, payload) {
                    // 异步
                    setTimeout(() => {
                        // commit 某个mutation
                        commit('changeCity', payload)
                    }, 2000)
                },
                /**
                 * 可以：commit mutation
                 * dispatch action
                 * @param {*} context 
                 */
                // context      commit,dispatch,getters,rootGetters,rootState,state
                // someAction(context){
                someAction({dispatch,commit}){
                // someAction({commit,dispatch,getters,rootGetters,rootState,state}){
                    // console.log(context);
                    // 触发自己模块action
                    // dispatch('changeCityAsync','千叶')
                    // 触发根模块action
                    // dispatch('addAsync',null,{root:true})
                    // 触发根模块mutation
                    commit('addN',10,{root:true})
                }
            },
            getters: {
                showCity: (state) => {
                    return state.cityName + '，欢迎你啊~~~'
                },
                /**
                 * 8.3 在带命名空间的模块内访问全局内容
                 * @param {当前模块的状态} state 
                 * @param {当前模块的getters} getters 
                 * @param {根模块的状态（包括子模块的状态）} rootState 
                 * @param {根模块的getters和子模块的getters} rootGetters 
                 */
                someGetter(state, getters, rootState, rootGetters) {
                    console.log(state, getters, rootState, rootGetters);

                    return rootGetters['userModule/showUser'] + getters.showCity;
                }
            }
        },
        userModule: {
            // namespaced:true,
            namespaced: true,
            state: {
                uName: 'damao',
            },
            mutations: {
                changeuName(state, payload) {
                    state.uName = payload;
                }
            },
            actions: {
    
            },
            getters: {
                showUser: (state) => {
                    return state.uName + '，你好啊！'
                },
            }
    
        }
    }
}
)

// 导出实例
export default store

