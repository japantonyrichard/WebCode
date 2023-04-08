<template>
  <div>
    <h2 class="title">登 录</h2>
    <div class="box">
      <!-- 
            el-form  
                model	表单数据对象	object
                status-icon	是否在输入框中显示校验结果反馈图标	boolean
                validate	对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise	Function(callback: Function(boolean, object))

                resetFields	对整个表单进行重置，将所有字段值重置为初始值并移除校验结果


            el-form-item
                prop	表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的	string	传入 Form 组件的 model 中的字段

      -->
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        class="ruleForm"
      >
        <el-form-item label="用户" prop="user">
          <el-input type="text" v-model="loginForm.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input type="password" v-model="loginForm.pwd"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm()">提交</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { toLogin } from "@/api";
import jwt from "jwt-decode";
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback(); //返回空，不往外抛错了
      }
    };
    var validatePwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      //表单数据对象
      loginForm: {
        user: "",
        pwd: ""
      },
      //   定义验证规则
      rules: {
        user: [{ validator: validateUser, trigger: "blur" }],
        pwd: [{ validator: validatePwd, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 登录提交
    submitForm() {
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          console.log("校验成功", this.loginForm);
          // 发送网络请求，
          try {
            const res = await toLogin(this.loginForm);
            if (res.msg == "success") {
              //   console.log(res.token);
              // 解密token
              //   console.log(jwt(res.token));
              let obj = {
                user: jwt(res.token).user,
                token: res.token
              };
              // 1、存 vuex
              console.log(this.$store);
              this.$store.commit('LoginModule/setUser',obj)
              // 2、存本地  数据持久化
              localStorage.setItem('user',JSON.stringify(obj))

              // 3、跳转到首页
              this.$router.push('/')
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log("校验失败");
          return false;
        }
      });
    },
    // 重置
    resetForm() {
      //   this.$refs.ruleForm.resetFields();
      this.loginForm = {
        user: "",
        pwd: ""
      };
    }
  }
};
</script>

<style lang="less" scoped>
.title {
  text-align: center;
  margin: 30px;
}
.box {
  width: 400px;
  height: 200px;
  background-color: #fff;
  margin: 20px auto;
  padding: 30px;
  box-shadow: 0 0 5px 5px #e9eaed;
}
</style>