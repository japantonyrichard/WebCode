const express = require("express");
const app = express(); //创建服务器
const router = require("./router");  //路由配置
// post请求接受参数
const bodyParser = require("body-parser"); //注意：body-parser不需要安装
// const cors = require("cors");   //允许跨域

// app.use(cors()); // 解决跨域
/**
 * post请求参数的处理方案
 * 后端要求传输数据的headers为application/x-www-form-urlencoded方式
 * 属性名=属性值&属性名=属性值
 */
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use("/api", router);

app.listen(7788, () => {
    console.log("服务器启动成功啦....");
    console.log('http://localhost:7788')
        // http://localhost:7788/api/repeat/username?usename=admin
        // debug()
})