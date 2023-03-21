/**
 * 导出所有action
 */
import {DEL_USER, SET_CITY, SET_USER} from './action-type'

// 设置当前城市的action
export const setCityAction=(name)=>({type:SET_CITY,payload:name})

// 导出设置用户名的action {type:'',payload:username}
export const setUserAction=(payload)=>({type:SET_USER,payload})

// 导出删除用户名的action {type:''}
export const delUserAction=()=>({type:DEL_USER})

