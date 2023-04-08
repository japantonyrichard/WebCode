


const state = {
    userinfo: {
        user: '',
        token: ''
    }
}


/**
 * 唯一修改state数据的方式
 * 本质：方法
 * 特点：同步
 */
const mutations = {
    // 设置值
    setUser(state, payload) {
        state.userinfo = payload;
    },
    // 清空用户信息
    delUser(state) {
        state.userinfo = {
            user: '',
            token: ''
        }
    }
}

/**
 * 异步
 */
const actions = {
    // 发送网络请求，拿到数据，commit mustation  比如，登陆
}

/**
 * 对state加工处理，不会修改！！！
 */
const getters = {

}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}