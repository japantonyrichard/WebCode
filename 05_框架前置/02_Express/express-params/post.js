const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: true
}))

//post传参 -- req.body
app.post('/login', (req, res) => {
    //接收前端参数
    // console.log(req.body);//{ username: '王一博', password: '999' }
    let user = req.body.username;
    let pwd = req.body.password;

    //返回给前端数据
    res.send({
        info:'账号信息',
        user,
        pwd
    })
})

app.listen(3000, () => {
    console.log('成功');
})