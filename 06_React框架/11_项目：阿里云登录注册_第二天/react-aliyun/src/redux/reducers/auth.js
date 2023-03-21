


import {ADD_USER,DEL_USER} from '../actions/action-type'
/**
 * reducer 作用：
 * 1）初始化状态
 * 2）分支判断，对状态进行处理
 * 3）返回新状态
 *
  */
 const initState={
     user:{},
 }
 /**
  * 用户信息
  * @param {初始状态} prevState 
  * @param {*} action 
  * @returns 
  */
function auth(prevState=initState,action){
    let {type,payload}=action;
    let newState={...prevState};
    // 分支判断
    switch (type) {
        case ADD_USER:
            newState.user=payload;
            return newState;
        case DEL_USER:
            newState.user={};
            return newState;
        default:
            return newState;
    }

}


export default auth