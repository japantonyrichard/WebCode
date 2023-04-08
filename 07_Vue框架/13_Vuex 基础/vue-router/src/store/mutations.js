// 按需引入常量
import {ADD_MUTATIOM,SUBN_MUTATION} from './mutation-types'

const mutations = {
    // mutation是一个方法，在此可以定义多个mutation
    // 1.定义 mutation      作用：修改state里的数据
    [ADD_MUTATIOM](state) {
        // 不让在mutation中写异步！！！ 用下面的写法！
        setTimeout(() => {
            state.count++;
        }, 2000)
    },
    // [ADD_MUTATIOM](state){
    //     // 状态变更
    //     state.count++;
    // },
    add(state) {
        // 状态变更
        state.count++;
    },
    // 带参数
    addN(state, step) {
        state.count += step;
    },
    // payload {step:5,info:''}
    addN2(state, payload) {  // payload 负载
        state.count += payload.step
    },
    sub(state) {
        state.count--;
    },
    // 传参
    // subN(state,num){
    //   state.count-=num;
    // }
    // 传参  SUBN_MUTATION 常量的值是mutation的名字
    [SUBN_MUTATION](state, num) {
        state.count -= num;
    },
    // 修改msg
    changeMsg(state,payload){
        state.msg=payload;
    }
}

export default mutations