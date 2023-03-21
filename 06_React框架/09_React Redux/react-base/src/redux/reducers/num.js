
import {ADD,SUB,TEST} from '../actions/action-type'

// 4、定义reducer  执行者
// (1)初始化状态 （2）分支判断，处理状态 （3）返回新状态
// action {type:'',payload:4}
function num(prevState=10,action){
    let {type,payload}=action;
    let newState=prevState;
    switch (type) {
        case ADD:
            return newState+payload;
        case SUB:
            return newState-payload;
        case TEST:
            return newState-payload;
        default:
            return newState;
    }
}

export default num;