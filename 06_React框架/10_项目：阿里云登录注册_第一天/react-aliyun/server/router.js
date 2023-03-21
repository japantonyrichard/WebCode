const express = require('express')
    // 路由
const router = express.Router()
const validator = require('validator')
    //引入lodash里的isEmpty
const isEmpty = require('lodash/isEmpty')
const url = require('url')
const jwt = require('jsonwebtoken')


const sqlFn = require('./mysql')


/**
 * 验证是否为空
 * 如果发生错误，返回错误信息，如果不发生错误，则返回 true
 * @param {*} data 
 * @returns 
 */
const validatorInput = (data) => {
        /**
         * validator.isEmpty 方法验证是否为空
         */
        let errors = {}
        if (validator.isEmpty(data.username)) {
            errors.username = '用户名不能为空'
        }
        if (validator.isEmpty(data.password)) {
            errors.password = '密码不能为空'
        }
        // isEmail:true不为空，false为空
        if (!validator.isEmail(data.email)) {
            errors.email = '不合法的邮箱格式'
        }
        /**
         * equals:比较字符串是否相等
         */
        if (!validator.equals(data.password, data.confirmPwd)) {
            errors.confirmPwd = '两次输入密码不同'
        }

        return {
            // 返回：状态和错误信息
            // 如果状态为空，不管；如果isValid为true,有错误,errors扔出去
            // isEmpty 如果value 为空，返回true,否则返回false
            isValid: !isEmpty(errors),
            errors
        }
    }
    /**
     * 两种情况：
     * {
     *    isValid:false,
     *    errors:{}
     * }
     * 
     *  {
     *    isValid:true,
     *    errors:{
     *         username:'用户名不能为空‘,
     *         password:'用户名不能为空‘,
     *         emial:'用户名不能为空‘
     *      }
     * }
     * 
     */



/**
 * 注册接口
 * /api/register
 * {
 * username:'',
 * email:'',
 * password:'',
 * confirmPwd:''
 * }
 */
router.post('/register', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPwd = req.body.confirmPwd;
    // 封装方法，判断是否为空
    const { isValid, errors } = validatorInput(req.body)
    if (isValid) { //验证失败了，发生异常
        res.send({
            status: 400,
            errors
        })
    } else { //验证成功
        const { username, password, email } = req.body;
        const sql = "insert into user values (null,?,?,?)";
        const arr = [username, password, email];
        sqlFn(sql, arr, result => {
            if (result.affectedRows > 0) {
                res.send({
                    msg: "注册成功",
                    status: 200
                })
            } else {
                res.send({
                    msg: "注册失败",
                    status: 401
                })
            }
        })
    }

})


/**
 * 用户名唯一性验证
 * /api/repeat/username
 */
router.get("/repeat/username", (req, res) => {
    const username = url.parse(req.url, true).query.username;
    const sql = "select * from user where username=?";
    const arr = [username];
    sqlFn(sql, arr, result => {
        if (result.length > 0) {
            res.send({
                status: 200,
                msg: "用户名重复",
                flag: false
            })
        } else {
            res.send({
                status: 200,
                msg: "用户名可用",
                flag: true
            })
        }
    })
})

/**
 * 登录接口
 */
 router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
        console.log(username);
        console.log(password);
        const sql = "select * from user where username=? and password=?"
        const arr = [username, password]
        sqlFn(sql, arr, result => {
            console.log(result);
            if (result.length > 0) {
                console.log(result);
                /**
                 * 生成token
                 */
                const token = jwt.sign({
                        uid: result[0].id,
                        username: result[0].username
                    }, "jwtsomekeys") // jwtsomekeys：密钥，随便生成定义的一个字段
                res.send({
                    status: 200,
                    token,
                    username: result[0].username
                })
            } else {
                res.send({
                    msg: "用户名密码错误",
                    status: 401
                })
            }
        })
    } else {
        res.send({
            msg: '参数未获取',
            status: 400
        })
    }
})






module.exports = router;