import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import './assets/css/base.css'
// 引入仓库
import store from './redux/store'
import {Provider} from 'react-redux'

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
   </Provider>,
  document.getElementById('root')
);

