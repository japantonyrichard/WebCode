import {combineReducers} from 'redux'
import flash from './flash' 
import auth from './auth'

// 合并所有 reducer
export default  combineReducers({
    flash,
    auth
})