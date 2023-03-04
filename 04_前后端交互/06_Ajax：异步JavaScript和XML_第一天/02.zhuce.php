<?php
// 2.接收前端提交的数据
$user = $_POST['username'];
$pwd = $_POST['password'];
// echo "$user $pwd";

//3.后台处理数据
//注册：1）先去数据库查询  2）没有，可以注册；有，不可以注册
//3.1连接数据库
//成功，返回对象；失败返回false
$con = mysqli_connect('localhost', 'root', '', 'code_datebase');

if ($con) {
    //3.2设置中文编码格式
    mysqli_query($con, 'set names utf8');
    //3.3sql语句
    $sql = "select * from userinfo where username='$user' and password='$pwd'";
    //3.4发送SQL语句
    $res = mysqli_query($con, $sql);
    // var_dump($res);
    //判断用户是否存在
    if ($res->num_rows > 0) {
        echo '用户名已存在';
    } else {
        //不存在，把数据添加到数据库
        $sql = "insert into userinfo (username,password) values ('$user','$pwd')";
        //发送到数据库
        $res = mysqli_query($con, $sql);
        //判断
        if ($res) {
            echo '添加用户成功';
        } else {
            echo '添加用户失败';
        }
    }
} else {
    echo '数据库连接失败';
}
