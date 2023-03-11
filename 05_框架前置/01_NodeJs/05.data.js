let a = 10;
let name = '易烊千玺';
let obj = {
    name: '迪丽热巴',
    age: 30
}
//导出数据、暴露数据
//单独导出 -- 只能导出一条数据，后面的导出会覆盖前面
// module.exports = a;
// module.exports = name;

//导出多条数据，使用一个对象  推荐
module.exports ={
    /* a:a,
    name:name,
    obj:obj */

    a,name,obj
}