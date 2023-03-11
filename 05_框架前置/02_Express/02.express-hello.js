//js写后台 -- 自己测试
//1.导入express模块
const express = require('express');

//2.创建服务
const app = express();

//3.配置路由
//路由 -- 页面走向
//'/' -- 访问：localhost:3000/
//'/news' -- 访问：localhost:3000/news
//'/sports' -- 访问：localhost:3000/sports
//3.1 首页的路由配置 -- get请求
app.get('/', (req, res) => {//形参--潜规则
    //req -- 接收前端的请求
    //res -- 给前端的响应

    //当服务成功后给前端响应数据  res.send()
    // res.send('hello 你好');
    res.send({
        message:'首页信息',
        status:200
    })
})

//3.2新闻页的路由配置
app.get('/news',(req,res)=>{
    res.send({
        message:'新闻数据',
        status:200
    })
})

//4.监听服务
app.listen(3000, () => {
    console.log('服务跑在3000端口上...');
})