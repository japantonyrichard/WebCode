<?php
//1.接收前端的数据
$user = $_POST['username'];
$pwd = $_POST['password'];

//2.响应给前端
echo "用户名--$user,密码--$pwd";
