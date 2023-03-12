const express = require('express');
const app = express();
app.get('/', (req, res) => {    // 路径不重写的话（pathRewrite接空字符串），'/' → '/api' 也可以
    res.send({
        info: '后台的数据',
        status: 200
    })
})

app.listen(3000, () => {
    console.log(3000);
})