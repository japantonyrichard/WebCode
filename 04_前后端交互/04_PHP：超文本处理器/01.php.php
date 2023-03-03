<?php
//php代码
#单行注释  注释的内容
/*多行注释*/


//语法：php代码行必须以分号结束


//php给前端返回数据的方式--打印方式
//echo--打印基本数据类型，多个数据使用逗号隔开
echo 10;
echo '<br/>';
echo '<h2>hello world</h2>';
echo '<br/>';
echo '你好', '世界', '我也挺好';
echo '<br/>';

//print--打印基本数据类型，一次只能打印一条数据
print 10;
print '<br/>';
print '<h2>hello world</h2>';
print '<br/>';
print '我也挺好';
echo '<br/>';

//var_dump()--打印复杂的数据类型，返回详细信息
var_dump('hello');
print '<br/>';
var_dump([10, 20, 30]);
print '<br/>';
var_dump(true);
print '<br/>';

//print_r()--打印复杂的数据类型，返回简单信息
print_r('hello');
print '<br/>';
print_r([10, 20, 30]);
print '<br/>';
print_r(true);
print '<br/>';







//结束可以省略
