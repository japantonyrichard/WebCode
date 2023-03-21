

// 2、引入redux
import {createStore,applyMiddleware} from 'redux'
// 支持异步
import thunk from 'redux-thunk'
// 引入中间件  检测redux修改过程
import logger from 'redux-logger'
import { TEST } from './actions/action-type';

// 引入合并之后的reducer
import rootReducer from './reducers/index'

// 3、创建仓库
const store= createStore(rootReducer,applyMiddleware(logger,thunk));


// 导出仓库
export default store;


// store.dispatch({type:TEST,payload:5})
// store.dispatch({type:'login/test',payload:'二毛'})
