//1.导入express
const express = require('express');
//2.创建服务
const app = express();

//静态资源托管
//localhost:2000/images/1.webp
//localhost:2000/css/base.css
// app.use(express.static('public'))

//localhost:2000/data/css/base.css
app.use('/data',express.static('public'))

//3.路由配置
app.get('/', (req, res) => {
    res.send({
        info: '首页'
    })
})
//4.监听
app.listen(2000, () => {
    console.log('ok');
})