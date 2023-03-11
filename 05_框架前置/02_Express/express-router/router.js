//1.导入express模块
const express = require('express');
//2.创建路由
const router = express.Router();
//3.配置路由
router.get('/', (req, res) => {
    res.send({
        info: '首页'
    })
})
router.post('/login', (req, res) => {
    res.send({
        info: '登录页'
    })
})
//4.导出路由
module.exports = router;