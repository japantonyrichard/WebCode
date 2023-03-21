const mysql = require('mysql');
const client = mysql.createConnection({
    host: 'localhost', //主机地址，也就是域名，本机地址
    user: 'root', //数据库的名字
    password: '', //不建议设置，容易忘
    database: 'sq319' //数据库名称
})

/**
 * query 执行数据库语句的方法
 * 三个参数：sql:数据库语句
 *         arr:数据库语句的参数
 *         callback:响应结果的回调函数 callback(error,reslut)
 */
// client.query();

function clientFn(sql, arr, callback) {
    client.query(sql, arr, (error, result) => {
        if (error) {
            console.log(error);
            return;
        }
        callback(result); //回调
    });
}

module.exports = clientFn