const express = require('express');
//1.安装cors cnpm i cors -S
//2.导入cors模块
const cors = require('cors');

const app = express();

//3.使用cors模块
app.use(cors())

app.get('/', (req, res) => {
    res.send({
        status: 200,
        info: '后台返回的数据'
    })
})

app.listen(3000, () => {
    console.log(3000);
})