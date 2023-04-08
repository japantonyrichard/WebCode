// 直接导出 就不const了

export default {
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
}