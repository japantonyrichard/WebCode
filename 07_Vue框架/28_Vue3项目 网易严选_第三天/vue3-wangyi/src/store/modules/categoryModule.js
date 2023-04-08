

// 引入静态常量资源
import {
    topCategory
} from '@/utils/constants'

// 引入接口请求函数
import {
    getCategoryList
} from '@/api'
export default {
    namespaced: true,
    state: () => {
        return {
            // 设置默认值，万一请求不到数据，或者网络突然出问题，不至于白屏
            cateList: topCategory
        }
    },
    mutations: {
        // 修改
        setCateList(state,payload){
            state.cateList=payload;
        }
    },
    actions: {
        // 发送网络请求  
        getList({commit}) {
            getCategoryList().then(res => {
                console.log(res);
                if(res.code==='200'){
                    // 保存，commit mutations 
                commit('setCateList',res.data.cateList)
                }
                
            }).catch(err => {
                console.log(err);
            })
        }
    }
}