<?php
//2.接收前端的数据
$user = $_POST['username'];
$pwd = $_POST['password'];

//3.处理前端的请求
//注销：1）查询  2）删除
//3.1连接数据库
$con = mysqli_connect('localhost', 'root', '', 'code_datebase');

// 判断
if ($con) {
    //3.2设置编码格式
    mysqli_query($con, 'set names utf8');

    //3.3SQL语句
    //查询语句
    $sql = "select * from userinfo where username='$user' and password='$pwd'";

    //3.4发送到数据库
    $res = mysqli_query($con, $sql);

    //判断
    if ($res->num_rows > 0) {
        //删除语句
        $sql = "delete from userinfo where username='$user' and password='$pwd'";
        //同步发送到数据库
        $res = mysqli_query($con, $sql);
        //判断
        if ($res) {
            echo '删除成功';
        } else {
            echo '注销失败';
        }
    } else {
        echo '此用户不存在';
    }
} else {
    echo '数据库连接失败';
}

mysqli_close($con);
