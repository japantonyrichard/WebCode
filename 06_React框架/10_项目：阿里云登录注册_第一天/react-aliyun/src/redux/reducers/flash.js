

/**
 * reducer 作用：
 * 1）初始化状态
 * 2）分支判断，对状态进行处理
 * 3）返回新状态
 */
// const flashState=[{
//           msg:'注册成功',
//           type:'success',
//           id:10001
//       },
//      {
//           msg:'注册失败',
//           type:'danger',
//           id:10002
//       }]
const flashState=[];

function flash(prevState=flashState,action){
    let {type,payload}=action;
    let newState=[...prevState];
    switch(type){
        case 'add_flash':
            newState.push(payload)
            return newState;
        case 'del_flash':
            // newState.push(payload)
            return newState;
        default :
          return newState;
    }

}

export default flash;