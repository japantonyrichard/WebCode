<?php
//接受前端的参数
$user = $_GET['username'];
$pwd = $_GET['password'];

//给前端返回数据
echo "用户名--$user,密码--$pwd";
