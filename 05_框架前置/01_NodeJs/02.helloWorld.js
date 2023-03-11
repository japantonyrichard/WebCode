//ES6:导出--export {a,b}  导入：import {a as c,b} from "路径"

//node.js:用js写后台
//前端给后端发送请求，后端接收前端的请求，处理请求，给前端响应数据，前端渲染数据
//1.导入http模块
const http = require('http');//参数说明：第一个http，潜规则；第二个http，固定的模块名字
//2.创建服务
const server = http.createServer((req, res) => {//潜规则
    //req -- request -- 请求 -- 接收前端的请求
    //res -- response -- 响应 -- 给前端响应

    //2.0 设置成功响应的状态码
    res.statusCode = 200;

    //2.1 设置标头 -- 防止中文乱码 
    res.setHeader('Content-Type', 'text/plain;charset="utf-8"')

    //2.2 在关闭服务时给前端响应数据
    res.end('hello world 你好 世界');//接受一个字符串参数

});
//3.监听服务
server.listen(3000, () => {//第一个参数为自定义端口号，node习惯3000，第二个参数为回调函数
    console.log('服务成功时的输出');
})
