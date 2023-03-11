//1.导入express模块
const express = require('express');

//2.创建服务
const app = express();

//3.路由配置
//3.1首页 -- get
app.get('/', (req, res) => {
    res.send({
        info: '首页信息',
        status: 200
    })
})

//3.2登录 -- post
app.post('/login', (req, res) => {
    res.send({
        info: '登录成功'
    })
})

//3.3删除 -- delete
app.delete('/del', (req, res) => {
    res.send({
        info: '删除成功'
    })
})

//3.4修改 -- put
app.put('/update',(req,res)=>{
    res.send({
        info:'修改成功'
    })
})

//4.监听服务
app.listen(3000, () => {
    console.log('成功');
})