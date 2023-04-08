


export default {
    namespaced:true,
    // 数据
    state:()=>{
        return{
            userinfo:{
                token:'123123',
                username:'zhangsan'
            }
        }
    },
    mutations:{
        // 修改state
        updateName(state,payload){
            state.userinfo=payload
        }
    },
    actions:{
        // 登录
        loginAction(context,payload){
            // 发网络请求，调用接口 api/index.js
            // commit  往state存用户信息
            // commit('updateName')
        }
    },
    getters:{
        
    }
}