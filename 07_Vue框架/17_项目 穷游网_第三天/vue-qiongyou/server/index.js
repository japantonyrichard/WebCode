// 创建服务器
const express = require('express')
const cors=require('cors')  
const jwt=require('jsonwebtoken')
const secert=require('./secert')

const app = express();

app.use(cors()) //配置资源共享，前端就不需要设置代理了

app.get('/',(req,res)=>{
    res.send('测试成功')
})


// 登录接口
app.get('/login',(req,res)=>{
    let user=req.query.user;
    let pwd=req.query.pwd;
    // 查询数据库-------略过
    // 成功 生成token 令牌
    const token=jwt.sign({user:user,id:123},secert.key,{expiresIn:'1h'})
    res.send({
        status:200,
        msg:'success',
        token
    })

})


app.listen('7788',()=>{
    console.log('服务器启动成功了.....');
    console.log('http://localhost:7788');
})