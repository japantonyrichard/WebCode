<?php
//PHP连接数据库
//1.创建数据库的连接
//mysqli_connect("域名|IP地址", "DB用户名", "DB密码", "数据库名称","端口号");
//连接成功，返回对象；否则返回false
$con = mysqli_connect("localhost", "root", "", "code_datebase");
var_dump($con);

//判断数据库连接是否成功
if ($con) {
    //成功
    //2.设置编码格式，防止插入数据时中文乱码
    //mysqli_query(数据库的连接,字符串)
    mysqli_query($con, "set names utf8");

    //3.SQL语句
    //往数据库中插入数据
    //                   表名     字段名    字段名
    $sql = "insert into userinfo(username,password) values ('张昊','444')";
    // INSERT INTO `userinfo`(`id`, `username`, `password`) VALUES ('[value-1]','[value-2]','[value-3]')

    //4.发送sql语句到数据库
    mysqli_query($con, $sql);
} else {
    //失败
    echo "数据库连接失败";
}

//5.关闭数据库--可以省略--后面不可以继续操作数据库
mysqli_close($con);





