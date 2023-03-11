//1.导入express
const express = require('express');
//2.创建服务
const app = express();

app.use(express.urlencoded({
    extended: true
}))
//放在所有路由上面，下面所有路由实现跨域
app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200); //让options尝试请求快速结束
    else
        next();
})

//3.路由
//3.1新闻
//导入新闻数据
const data = require('./news');
app.get('/news', (req, res) => {
    //设置允许跨域的域名，*代表允许任意域名跨域
    // res.header('Access-Control-Allow-Origin', '*')
    res.send({
        info: '新闻列表',
        status: 200,
        data
    })
})

//3.2登录
app.post('/login', (req, res) => {
    //设置允许跨域的域名，*代表允许任意域名跨域
    // res.header('Access-Control-Allow-Origin', '*')

    //接收前端的参数
    let user = req.body.user;
    let pwd = req.body.pwd;
    //返回给前端
    res.send({
        info: '账号信息',
        status: 200,
        user,
        pwd
    })
})

//4.监听
app.listen(3000, () => {
    console.log('ok');
})