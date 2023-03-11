const express = require('express');
const cors = require('cors');

//1.下载mysql  npm i mysql -S
//2.导入mysql模块
const mysql = require('mysql');
//3.连接数据库
const con = mysql.createConnection({
    host: 'localhost',//域名
    port: 3306,//端口号
    user: 'root',//账号
    password: '',//密码
    database: 'code_datebase'//数据库
})

const app = express();
app.use(cors());

//post请求需要转换表单的数据格式
app.use(express.urlencoded({
    extended: true
}))

app.post('/login', (req, res) => {
    //1）接收前端的参数
    let user = req.body.user;
    let pwd = req.body.pwd;

    //2）处理前端的请求 -- 去数据库查找

    //4.sql语句
    let sql = `select * from userinfo where username='${user}' and password='${pwd}'`;
    //5.发送sql语句
    con.query(sql, (error, result) => {
        //error-数据库连接失败的返回值，result-成功的返回值
        if (error) {
            console.log('数据库连接失败');
            return;
        }
        //成功给前端返回数据
        res.send({
            status: 200,
            info: '账号信息',
            result//成功的数据返回给前端
        })
    })
})

app.listen(3000, () => {
    console.log('服务跑在3000上...');
})
