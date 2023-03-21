/**
 * 专门用于导出所有的 action
 * 
 * {type:ADD,payload:val}
 */

import {ADD,SUB} from './action-type'
// export const addCountAction=(payload)=>{
//     return {type:ADD,payload:val}
// }

// 加 的action
export const addCountAction=val=>({type:ADD,payload:val})

// 减 的action
export const subCountAction=val=>({type:SUB,payload:val})


// 减的异步action
export const subAsyncAction=val=>{

    // 总结：异步action当中，往往都会开启一个同步action
    return (dispatch)=>{
        setTimeout(() => {
            // 同步
            dispatch(subCountAction(val))

        }, 2000);
    }

}