

import { DEL_USER, SET_USER } from "../action/action-type";

/**
 * reducer 函数
 * （1）初始化状态
 * （2）分支判断，处理状态
 * （3）返回新状态 
 * action:{type:'',payload:''}
 */
function user(prevState={username:'',token:''},action){
    const {type,payload}=action;
    const newState={...prevState};
    switch (type) {
        case SET_USER: //设置账户
            newState.username=payload
            return newState;
        case DEL_USER: //设置账户
            newState.username=''
            return newState;
        default:
            return newState;
    }
}

export default user