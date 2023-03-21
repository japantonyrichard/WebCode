

import React from 'react'
import { connect } from 'react-redux'

function Login(props) {
    return (
        <div>
            <h2>Login</h2>
            <p>user:{props.login.user}</p>
            <p>
                <button onClick={()=>{props.addUser('三毛')}}>设置用户名</button>
            </p>
            <p>
                <button onClick={()=>{props.delUser()}}>清空用户名</button>
            </p>

        </div>
    )
}

// 高阶组件：增强原来组件的功能  connect(参数)(UI组件) 参数：两个回调函数
// 固定语法： export default connect()(UI组件)  参数：两个回调函数
// 1、 connect(参数)(UI组件)
// 2 、参数：两个回调函数
// 3、回调函数必须要有返回值，返给子组件


// connect((state)=>{
//     // 数据读取
//     return{

//     }
// },(dispatch)=>{

//     // 修改数据
//     return{
//         addUser:(name)=>{ 
//             dispatch({type:'add_user',payload:name}) 
//         }
//     }
// })(Login)

export default connect(state => {  // state 仓库里面的所有状态
    console.log(state);
    // 必须要有返回值，返给子组件
    return {
        login: state.login
    }

}, dispatch => { // dispatch 仓库的dispatch方法

    return {
        addUser:(name)=>{
            // 触发 添加用户的action
            dispatch({type:'login/add_user',payload:name})
        },
        delUser:()=>{
            // 触发 删除用户的action
            dispatch({type:'login/del_user'})
        }
    }

})(Login)