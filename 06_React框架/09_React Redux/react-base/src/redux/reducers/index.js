import {combineReducers} from 'redux'

import login from './login'
import num from './num'

// 合并
export default combineReducers({
    login,
    num
})