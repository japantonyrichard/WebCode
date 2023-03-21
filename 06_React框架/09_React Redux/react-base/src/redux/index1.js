

// 2、引入redux
import {createStore} from 'redux'


// 3、创建仓库
const store= createStore(reducer);

// 4、定义reducer  执行者
// (1)初始化状态 （2）分支判断，处理状态 （3）返回新状态
// action {type:'',payload:4}
function reducer(prevState=10,action){
    let {type,payload}=action;
    let newState=prevState;

    switch (type) {
        case 'add':
            return newState+payload;
        case 'sub':
            return newState-payload;
        default:
            return newState;
    }

}

console.log(store);
// 获取仓库里的数据
console.log(store.getState());  //10

// 触发action  干什么事儿
store.dispatch({type:'add',payload:5})

console.log(store.getState());  //15