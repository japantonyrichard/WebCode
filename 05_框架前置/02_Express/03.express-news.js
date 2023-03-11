//1.导入模块
const express = require('express');

//2.创建服务
const app = express();

//导入数据模块
const data = require('./news');//news.js

//3.路由配置
//3.1首页
app.get('/', (req, res) => {
    res.send({
        info: '首页'
    })
})
//3.2新闻列表
app.get('/news', (req, res) => {
    //3.1给前端响应数据
    res.send({
        message: '新闻列表',
        status: 200,
        data: data
    })
})

//4.监听服务
app.listen(3000, () => {
    console.log('成功');
})