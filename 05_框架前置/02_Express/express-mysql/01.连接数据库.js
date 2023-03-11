//Node.js连接数据库
//1. 安装mysql模块
//2. 引入mysql模块
const mysql = require('mysql');
//3.连接数据库
const con = mysql.createConnection({
    host: 'localhost',//域名
    port: 3306,//端口号
    user: 'root',//数据库账号名
    password: '',//数据库密码
    database: 'code_datebase'//数据库名称
})
//4.sql语句
const sql = "select * from userinfo";
//5.执行sql语句
con.query(sql, (err, result) => {//err-失败的返回值，result-成功的返回值
    if (err) {
        console.log('数据库连接失败');
        return;//结束函数
    }
    //打印成功的结果
    console.log(result);
});
