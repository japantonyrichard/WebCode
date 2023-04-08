import {createStore} from 'vuex'
// 导入模块
import cityModule from  './mdules/cityModule'
import userModule from './mdules/userModule'
// 引入
import createPersistedstate  from 'vuex-persistedstate'

export default   createStore({
    plugins:[createPersistedstate({
        key:'info',  //键名
        paths:['cityModule','userModule']  //持久化哪个模块
    })],
    // 定义状态
    state:{
        name:'damao'
    },
    // 修改状态的方法
    mutations:{
        updateName(state,payload){
            state.name=payload;
        }
    },
    // 异步
    actions:{
        // context 上下文
        updateNameAsync({commit},payload){
            setTimeout(() => {
                // 触发
                commit('updateName',payload)
            }, 2000);
        }
    },
    // 对state数据加工，包装，绝对不会修改
    getters:{
        newName(state){
            return  state.name+'，欢迎你啊！';
        }
    },
    modules:{
        cityModule:cityModule,
        userModule
    }
})