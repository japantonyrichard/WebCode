import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './assets/css/base.css'

// 全局引入：引入antd
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);