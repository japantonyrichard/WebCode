const cityModule = {
    // 开启命名空间
    namespaced: true,
    state: () => {
        return {
            city: '北京'
        }
    },
    mutations: {
        changeCity(state) {
            state.city = '天津';
        }
    },
    actions: {

    },
    getters: {
        showCity(state) {
            return state.city + '，欢迎你啊'
        }
    }
}

export default cityModule;