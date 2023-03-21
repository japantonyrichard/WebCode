

// 2、引入redux
import {createStore,applyMiddleware,combineReducers} from 'redux'
// 引入中间件  检测redux修改过程
import logger from 'redux-logger'


// 合并
const rooReducer= combineReducers({
    // reducer:reducer,
    reducer,
    reducer2
})

// 3、创建仓库
const store= createStore(rooReducer,applyMiddleware(logger));

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

// 存储用户信息
function reducer2(prevState={user:'',pwd:''},action){
    let {type,payload}=action;
    let newState={...prevState};

    switch (type) {
        case 'add_user':
            newState.user=payload;
            return newState;
        case 'del_user':
            newState.user='';
            return newState;
        default:
            return newState;
    }
}

// 触发action  干什么事儿
store.dispatch({type:'add',payload:5})

store.dispatch({type:'add_user',payload:'大毛'})