const express = require('express');
const app = express();
// 导入路由
const router= require('./router')




// post 请求 处理表单数据
app.use(express.urlencoded({extended:true}))
// 静态文件托管   http://localhost:7878/图片名称.png
app.use(express.static('upload'))





app.use('/',router)

app.listen('7878', () => {
    console.log('服务器启动成功啦...');
    console.log('http://localhost:7878');
})