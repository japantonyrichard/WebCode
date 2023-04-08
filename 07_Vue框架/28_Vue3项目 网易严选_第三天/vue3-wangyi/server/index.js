const express= require('express')
const app= express();

// 轮播图
const banner=require('./data/banner.json')

// 人气推荐
const hot=require('./data/hot.json')

// 商品区块
const product=require('./data/product.json')

// 测试
app.get('/',(req,res)=>{
    res.send('成功')
})

// 首页轮播图
app.get('/home/banner',(req,res)=>{
    res.send(banner)
})


// 人气推荐
app.get('/home/hot',(req,res)=>{
    res.send(hot)
})

// 商品区块
app.get('/home/product',(req,res)=>{
    res.send(product)
})



app.listen('3000',()=>{
    console.log('服务器启动成功....');
    console.log('http://localhost:3000');
})