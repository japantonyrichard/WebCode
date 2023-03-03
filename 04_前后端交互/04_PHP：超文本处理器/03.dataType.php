<?php
//数据类型
//js:number string boolean null undefined object
//PHP:string int float boolean null object array
//判断数据类型：gettype()

//整数
$num1 = 10;
$num2 = -10;
var_dump($num1, $num2);
echo '<br/>';
echo gettype($num1); //integer
echo gettype($num2); //integer
echo '<br/>';

//浮点数
$num3 = 6.66;
$num4 = 6e6;
var_dump($num3, $num4);
echo '<br/>';
echo gettype($num3); //double
echo '<br/>';
echo gettype($num4); //double
echo '<br/>';

//布尔
var_dump(true, false);
echo '<br/>';
echo gettype(true); //boolean
echo '<br/>';
echo gettype(false); //boolean
echo '<br/>';

//null
var_dump(null); //NULL
echo '<br/>';
echo gettype(null); //NULL
echo '<br/>';

//数组
$arr = [10, 20, 30];
var_dump($arr);
echo '<br/>';
echo gettype($arr); //array
echo '<br/>';
//数组赋值
$arr[10] = 100;
var_dump($arr);
echo '<br/>';

$arr1 = array(10, 20, 'hell9', true);
var_dump($arr1);
echo '<br/>';

//字符串
$str1 = 'hello';
$str2 = "world";
echo $str1, $str2;
echo '<br/>';
echo gettype($str1); //string
echo '<br/>';
echo gettype($str2); //string
echo '<br/>';

//字符串拼接
$wen = '什么动物没有方向感?';
$da = '麋鹿';
echo '老师问' . $wen . '学生答' . $da;
echo '<br/>';
echo "老师问:{$wen} 学生答:$da";
echo '<br/>';
echo '老师问:{$wen} 学生答:$da';
