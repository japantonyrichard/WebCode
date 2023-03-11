const express = require('express');
const app = express();

//3.路由配置
//3.1get传参 -- req.query
app.get('/', (req, res) => {
    //接收前端的从参数
    console.log(req.query);//{ username: 'admin', password: '123' }
    let user = req.query.username;
    let pwd = req.query.password;

    //给前端响应数据
    res.send({
        info:'账号信息',
        status:200,
        user,//user:user
        pwd,//pwd:pwd
    })
})


app.listen(3000, () => {
    console.log('ok');
})