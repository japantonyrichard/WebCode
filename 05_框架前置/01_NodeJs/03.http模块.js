//http模块 -- 处理前端请求
//1.导入http模块
const http = require('http');

//2.创建服务
const server = http.createServer((req, res) => {
    //2.1 成功响应的状态
    res.statusCode = 200;

    //2.2设置表头
    res.setHeader('Content-Type', 'text/plain;charset="UTF-8"')

    //2.3关闭服务给前端响应数据
    res.end('你好 世界');
})

//3.监听服务
server.listen(3000, () => {
    console.log('服务成功');
})