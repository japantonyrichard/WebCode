export default {
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
}