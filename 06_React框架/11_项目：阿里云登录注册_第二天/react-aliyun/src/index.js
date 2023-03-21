import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import './assets/css/base.css'
// 引入仓库
import store from './redux/store'
import {Provider} from 'react-redux'
import { ADD_USER } from './redux/actions/action-type';

// 本地数据存到redux
if(localStorage.getItem('user')){
  store.dispatch({
    type:ADD_USER,
    payload:JSON.parse(localStorage.getItem('user')) // JSON.parse() 把字符串转成对象
  })
}

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
   </Provider>,
  document.getElementById('root')
);

