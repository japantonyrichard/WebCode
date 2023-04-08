export default {
    // 相当于计算属性
    showCount: state => {
        return state.count * 2;
        // return '当前最新的数量是【'+ state.count +'】'
    },
    doneGetters: state => {
        // [].filter  ==> []
        return state.todos.filter(item => item.done)
    }
}