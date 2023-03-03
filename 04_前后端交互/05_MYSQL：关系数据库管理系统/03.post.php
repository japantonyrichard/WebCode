<?php
//接收前端的数据
//$user--后台的变量
//username--前面input的name属性
$user = $_POST['username'];
//$age--后台的变量
//age--前端input的name属性
$age = $_POST['age'];

//响应客户端
echo "欢迎--$user";
echo '<br/>';
echo "你的年龄--$age";
