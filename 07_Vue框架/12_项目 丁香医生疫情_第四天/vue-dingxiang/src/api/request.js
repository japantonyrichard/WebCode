

import Axios from 'axios'
import base from './base'

// 1、基础路径和超时时间
const instance= Axios.create({
    baseURL:base.baseURL,
    timeout:5000
})


// 2、请求拦截
instance.interceptors.request.use(config=>{
    // 开启进度条

    // token


    // post 

    return config;
},err=>{
    return Promise.reject(err)
})


// 3、响应拦截
instance.interceptors.response.use(res=>{
    // 成功之后返回

    return res.data
},err=>{


    return Promise.reject(err)
})


export default instance;