import Axios from 'axios'

const service = Axios.create({
    baseURL: '',
    timeout: 5000
})

// 请求拦截
service.interceptors.request.use(config => {
    // 统一处理post请求,开启进度条，token

    return config
})


// 相应拦截
service.interceptors.response.use(res => {
    // 成功  关闭进度条

    return res.data;
}, err => {
    // 如果后台只给你状态===》提示信息

    return Promise.reject(err)
})

// 导出
export default service;