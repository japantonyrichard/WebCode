<?php
//让php去请求服务器
$res = file_get_contents('https://m.qyer.com/z/zworld.php/search/ajaxGetProList?ajaxID=5c1b419a6e7d48653d90fd02&tag=535,146&page=1');
//把php请求的数据响应给前端
echo $res;
