/**
 * 导出所有的action
 */

import { ADD_USER,DEL_USER } from "./action-type"

// 添加用户信息的action
export const addUserAction=(payload)=>{
    return {type:ADD_USER,payload}
}

// 清空用户信息的action
export const delUserAction=()=>{
    return { type: DEL_USER }
}