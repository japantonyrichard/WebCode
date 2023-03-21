import {createStore,applyMiddleware} from 'redux'
import rootReducer  from './reducers/index'
import logger from 'redux-logger'

// 创建仓库
const store=createStore(rootReducer,applyMiddleware(logger));


// 导出仓库
export default store