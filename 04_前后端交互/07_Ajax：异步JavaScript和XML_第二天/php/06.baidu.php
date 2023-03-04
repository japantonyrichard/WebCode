<?php
$res = file_get_contents('https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=31254,34812,36421,36166,34584,35979,36055,36292,36232,26350,36301,36311&wd=%E7%8E%8B%E4%B8%80&req=2&bs=%E7%A9%B7%E6%B8%B8%E7%BD%91&pbs=%E7%A9%B7%E6%B8%B8%E7%BD%91&csor=2&pwd=%E7%8E%8B%E4%B8%80%E5%8D%9A&cb=jQuery1102020060072689413544_1652863121691&_=1652863121702');
// $res = file_get_contents("https://m.qyer.com/z/zworld.php/search/ajaxGetProList?ajaxID=5c1b419a6e7d48653d90fd02&tag=535,146&page=1");

echo $res;
