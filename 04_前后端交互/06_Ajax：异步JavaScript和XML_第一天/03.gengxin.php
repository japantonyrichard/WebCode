<?php
// 2.接收前端的数据
$user = $_GET['username'];
$oldpwd = $_GET['oldpwd'];
$newpwd = $_GET['newpwd'];

//3.处理前端数据
//修改密码：1）查询  2）修改
//3.1连接数据库
$con = mysqli_connect('localhost', 'root', '', 'code_datebase');

if ($con) {
    //3.2设置编码格式
    mysqli_query($con, 'set names utf8');
    //3.3SQL语句
    //查询
    $sql = "select * from userinfo where username='$user' and password='$oldpwd'";
    //3.4发送到数据库
    $res = mysqli_query($con, $sql);
    //判断查询的结果
    if ($res->num_rows > 0) {
        //修改语句
        $sql = "update userinfo set password='$newpwd' where username='$user' ";
        //发送到数据库
        $res = mysqli_query($con, $sql);
        //判断
        if ($res) {
            echo '更新密码成功';
        } else {
            echo '更新密码失败';
        }
    } else {
        echo '此用户不存在';
    }
} else {
    echo '数据库连接失败';
}
