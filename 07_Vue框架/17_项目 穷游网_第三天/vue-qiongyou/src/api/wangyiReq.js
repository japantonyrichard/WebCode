// axios 二次封装
import Axios from 'axios'
import base from './base'

// 1、配置基础路径和超时时间
const instance = Axios.create({
    
    timeout: 5000
})



// 2、请求拦截
instance.interceptors.request.use(config => {


    return config;
}, err => {
    return Promise.reject(err);
})


// 3、响应拦截
instance.interceptors.response.use(res => {
    // 成功

    return res.data;
}, err => {

    return Promise.reject(err)
})


// 4、导出实例
export default instance;