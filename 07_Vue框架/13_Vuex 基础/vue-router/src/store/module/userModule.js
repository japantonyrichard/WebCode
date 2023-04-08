export default {
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