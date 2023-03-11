//1.导入
const express = require('express');

//2.创建服务
const app = express();

//3.路由配置
/* app.get('/', (req, res) => {
    res.send({
        info: '首页'
    })
})
app.post('/login', (req, res) => {
    res.send({
        info: '登录页'
    })
}) */
//3.1导入路由配置文件
const router = require('./router');
//3.2使用路由
app.use('/',router);
app.use('/login',router);


//4.监听
app.listen(3002, () => {
    console.log('成功');
})