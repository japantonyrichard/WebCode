// 存储用户信息
function login(prevState={user:'zs',pwd:''},action){
    let {type,payload}=action;
    let newState={...prevState};

    switch (type) {
        case 'login/add_user':
            newState.user=payload;
            return newState;
        case 'login/del_user':
            newState.user='';
            return newState;
        case 'login/test':
            newState.user=payload;
            return newState;
        default:
            return newState;
    }
}

export default login