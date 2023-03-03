<?php
//1.创建数据的连接
$con = mysqli_connect('localhost', 'root', '', 'code_datebase');
// var_dump($con);

//判断是否连接成功
if ($con) {
    //2.设置编码格式，防止中文乱码
    mysqli_query($con, 'set names utf8');

    //3.sql语句--增删改查
    //3.1插入语句--增--页面注册
    //语法1：inset into 表名(字段1,字段2,...) values(值1,值2,...)
    // $sql = "insert into userinfo(username,password) values('涂成来','999') ";

    //语法2：insert into 表名 values(值1,值2,null,...)
    // $sql="insert into userinfo values(null,'汪洋','888')";

    //3.2修改语句--改--修改用户名、密码等
    //语法：update 表名 set 字段='新值',字段='新值' where 条件
    // $sql = "update userinfo set username='毕艳宁',password='5566' where id=7";

    //3.3删除语句--删--注销
    //语法：delete from 表名 where 条件
    // $sql = "delete from userinfo where id=4";

    //3.2查询语句--查--登录
    //语法：select 信息 from 表名 where 条件
    //信息：①*--表示查询所有字段  ②字段名--查询指定的字段，多个字段用逗号隔开
    //条件：①1--无条件查询  ②有条件查询--字段='值',多个字段使用and或者or连接

    // 查询表里面所有的信息
    //所以字段
    // $sql = "select * from userinfo where 1";

    // 查询表里面所有的账号和密码
    //指定字段
    // $sql="select username,password from userinfo where 1";

    // 查询名字叫朝阳的人的信息
    // $sql="select * from userinfo where username='朝阳'";

    // 查询账号='同同' 密码='222' 的信息  并且关系
    $sql = "select * from userinfo where username='同同' and password='222'";

    // 查询账号='同同' 密码='666' 的信息 或者关系 or
    $sql = "select * from userinfo where username='同同' or password='666'";

    // 查询不存在的数据
    $sql = "select * from userinfo where  id=4";


    //4.发送sql语句到数据库
    $res = mysqli_query($con, $sql);
    var_dump($res); //插入、修改、删除语句返回布尔值，查询语句返回对象  ["num_rows"]=> int(0) 数字大于0，表示查询到数据

} else {
    echo "数据库连接失败";
}

//5.关闭数据库
mysqli_close($con);
