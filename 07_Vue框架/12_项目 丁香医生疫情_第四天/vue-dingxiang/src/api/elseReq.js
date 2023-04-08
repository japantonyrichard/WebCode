// 二次封装  新浪 需要设置代理
import Axios from 'axios'
import base from './base'

const instance = Axios.create({
    baseURL: '',
    timeout: 5000
})

// 请求拦截
instance.interceptors.request.use(config => {
    // 开启进度条,token，post


    return config;
}, err => {
    return Promise.reject(err);
})


// 响应拦截
instance.interceptors.response.use(res => {
    // 成功处理
    // 关闭进度条，

    return res.data;
}, err => {
    // 失败处理


    return Promise.reject(err)
})



// 导出!!!!!
export default instance;