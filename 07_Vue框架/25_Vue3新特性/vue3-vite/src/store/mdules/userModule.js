const userModule = {
    // 开启命名空间
    namespaced: true,
    state: () => {
        return {
            user: '李通'
        }
    },
    mutations: {
        changeUser(state) {
            state.user = '大葱';
        }
    },
    actions: {

    },
    getters: {
        showUser(state) {
            return state.user + '，你好啊'
        }
    }
}

export default userModule;