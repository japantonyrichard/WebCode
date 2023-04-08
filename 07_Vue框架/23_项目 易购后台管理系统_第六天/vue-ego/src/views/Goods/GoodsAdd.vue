<template>
  <div class="goods-add">
    <!-- 1、面包屑 -->
    <div class="title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item to="/goods/goods-list">商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品添加</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 2、表单 -->
    <!-- prop	表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的	string	传入 Form 组件的 model 中的字段 -->
    <div class="myForm">
      <el-form
        :model="goodsForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="类目选择" prop="category">
          <el-button>类目选择</el-button>
        </el-form-item>
        <el-form-item label="商品名称" prop="title">
          <el-input v-model="goodsForm.title"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="price">
          <el-input v-model="goodsForm.price"></el-input>
        </el-form-item>
        <el-form-item label="商品数量" prop="num">
          <el-input v-model="goodsForm.num"></el-input>
        </el-form-item>
        <el-form-item label="商品卖点" prop="sellPoint">
          <el-input v-model="goodsForm.sellPoint"></el-input>
        </el-form-item>
        <el-form-item label="商品图片" prop="image">
          <el-button>上传图片</el-button>
        </el-form-item>

        <el-form-item label="商品描述" prop="descs">
          <el-input type="textarea" v-model="goodsForm.descs"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">确定</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据对象
      goodsForm: {
        category: "", //类目
        title: "", //商品名称
        price: "", //商品价格
        num: "", //商品数量
        sellPoint: "", //商品卖点
        image: "", //商品图片
        descs: "" //商品描述
      },
      //   验证规则
      rules: {
        title: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        price: [{ required: true, message: "请输入商品价格", trigger: "blur" }],
        num: [
          {
            required: true,
            message: "请输入商品数量",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    /**
     * 提交表单
     */
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          // 提交表单
          alert("submit!");
        } else {
          console.log("验证失败");
          return false;
        }
      });
    },
    // 重置
    resetForm() {
      this.$refs.ruleForm.resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.goods-add {
  padding: 20px;
  .title {
    background-color: #fff;
    padding: 10px;
    border: 1px solid #f4f4f4;
  }
  .myForm {
    margin: 30px 0;
    background-color: #fff;
    padding: 20px;
  }
}
</style>