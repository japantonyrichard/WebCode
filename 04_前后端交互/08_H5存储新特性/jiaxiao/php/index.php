<?php
//解决跨域
$num = $_GET['num']; //后台的参数=前端的参数值
//PHP字符串拼接  1）.   2）""
$res = file_get_contents('https://mnks.jxedt.com/get_question?r=0.2544343069870654&index='.$num);
// $res = file_get_contents("https://mnks.jxedt.com/get_question?r=0.2544343069870654&index=$num");

echo $res;
