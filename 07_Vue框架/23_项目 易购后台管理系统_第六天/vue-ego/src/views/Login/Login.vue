<template>
  <div class="contaner">
    <div class="login">
      <div class="logo">
        <img src="../../assets/logo.png" height="120px" alt />
      </div>
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="50px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>



<script>
import { mapActions } from "vuex";
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
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
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePwd, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 映射成当前组件所需要的方法
    ...mapActions("userModule", ["toLogin"]),
    async submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          // 触发action username,password
          // this.$store.dispatch('userModule/toLogin',{username:'admin',password:'123'})
          // console.log(payload);
          // 第二种方式：'
          console.log(this.loginForm);
          this.toLogin(this.loginForm);
        } else {
          this.$message.error("账号或密码不合法！");
          return false;
        }
      })
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    }
  }
};
</script>


<style lang="less" scoped>
.contaner {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #104468;
  .login {
    width: 400px;
    height: 260px;
    padding: 30px;
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .logo {
      position: absolute;
      width: 120px;
      height: 120px;
      background: #f5f5f5;
      border-radius: 50%;
      overflow: hidden;
      top: -80px;
      left: 50%;
      margin-left: -60px;
      padding: 8px;
      img {
        background: #fff;
      }
    }
  }
}
.el-form {
  margin-top: 60px;
}
.el-form-item--feedback {
  margin-bottom: 33px;
  text-align: center;
}
.el-button {
  margin-right: 10px;
}
</style>