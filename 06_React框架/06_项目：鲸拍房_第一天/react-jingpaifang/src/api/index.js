/**
 * 封装所有的 请求方法
 */
import axios from "axios";
import base from './base'


const api = {
    /**
     * 获取城市切换列表
     */
    getCities() {
        return axios.get(base.host + base.city)
    },

}


export default api

// api无效