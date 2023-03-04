<?php
//1.接收前端的参数
$user = $_GET['user'];
$pwd = $_GET['pwd'];

echo "用户名--$user,密码--$pwd";

//2.判断
/* if ($user === '李通' && $pwd === '666') {
    echo '1'; //成功
} else {
    echo '0'; //失败
} */
