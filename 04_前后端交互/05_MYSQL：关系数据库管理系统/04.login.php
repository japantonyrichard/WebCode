<?php
//1.接收前端的数据
$username = $_POST['username'];
$password = $_POST['password'];

//2.处理前端的请求
if ($username === 'admin' && $password === '123456') {
    //3.响应前端的请求
    echo '登录成功，进入首页';
} else {
    //3.响应前端的请求
    echo '账号或密码错误';
}
