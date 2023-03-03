
<?php
//获取前端的数据
$user = $_GET['username'];
$pwd = $_GET['password'];

//1.创建数据库的连接
$con = mysqli_connect('localhost', 'root', '', 'code_datebase');

//判断数据库是否连接成功
if ($con) {
    //2.设置编码格式
    mysqli_query($con, "set names utf8");

    //3.sql语句
    //去数据库中查询账号和密码，有--登录成功；没有--登录失败
    $sql = "select * from userinfo where username='$user' and password='$pwd'";

    //4.发送sql
    $res = mysqli_query($con, $sql);
    // var_dump($res); //查询语句返回对象，对用有一个属性：num_rows  只要大于0，获取成功  获取对象的属性：对象->属性

    //判断是否查询成功
    if ($res->num_rows > 0) {
        //成功
        echo '登录成功';
    } else {
        //失败
        echo '账号或者密码错误';
    }
} else {
    echo "数据库连接失败";
}
