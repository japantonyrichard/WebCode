<?php
//解决跨域问题
$num = $_GET['num'];
//php访问资源，然后把资源响应给前端
$res = file_get_contents('https://m.mafengwo.cn/?category=get_info_flow_list&page=' . $num);
echo $res;
