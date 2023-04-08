
<template>
  <div>
    <el-dialog title="添加规格参数" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <TreeView @sendTreeData="getTreeData" />

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" :disabled="isDisabled" @click="innerVisible = true">确定并添加分组</el-button>
      </span>
      <!-- 内弹窗 start -->
      <el-dialog width="40%" title="商品规格参数配置" :visible.sync="innerVisible" append-to-body>
        <div>当前选择的节点：{{treeData.name}}</div>
        <el-button type="primary" @click="addDomain">新增域名</el-button>
        <hr />
        <!-- 表单开始 -->
        <!-- [{title:'',value:'',children:[{title:'',value:''}]}] -->
        <el-form :model="dyForm" ref="dynForm" label-width="100px" class="demo-dynamic">
          <el-form-item
            v-for="(domain, index) in dyForm.domains"
            :label="domain.title"
            :key="index"
            :prop="domain.title"
            :rules="{
                required: true, 
                message: '不能为空',
                trigger: 'blur'
                }"
          >
            <!-- 按钮 -->
            <div class="buttons">
              <el-input v-model="domain.title"></el-input>
              <el-button @click.prevent="addChildDomain(index)">添加子项</el-button>
              <el-button @click.prevent="removeDomain(index)">删除</el-button>
            </div>

            <!-- 内层表单项，遍历children -->
            <el-form-item
              v-for="(item, i) in domain.children"
              :label="item.title"
              :key="i"
              :prop="item.title"
            >
              <!-- 按钮 -->
              <div class="buttons">
                <el-input v-model="item.title"></el-input>
                <el-button @click.prevent="removeChildDomain(index,i)">删除子项</el-button>
              </div>
            </el-form-item>
          </el-form-item>
        </el-form>
        <!-- 表单结束 -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="resetForm">取 消</el-button>
          <el-button type="primary" :disabled="isDisabled" @click="submitForm">确定</el-button>
        </span>
      </el-dialog>

      <!-- 内弹窗 end -->
    </el-dialog>
  </div>
</template>

<script>
import { addParams } from "@/api";
import TreeView from "@/views/Goods/TreeView.vue";
export default {
  components: {
    TreeView
  },
  data() {
    return {
      dialogVisible: false, //外弹窗
      innerVisible: false, //内弹窗
      isDisabled: true, //是否可以点击  默认不可以点击 true
      treeData: {}, //点击的节点对象
      dyForm: {
        // [{title:'',value:'',children:[{title:'',value:''}]}]
        domains: []
      }
    };
  },
  methods: {
    /**
     * 表单提交
     */
    submitForm() {
      this.$refs.dynForm.validate(async valid => {
        if (valid) {
          try {
            // itemCatId,content,specsName
            const res = await addParams({
              itemCatId: this.treeData.cid,
              specsName: this.treeData.name,
              content: JSON.stringify(this.dyForm.domains)
            });
            console.log(res);
            if(res.status=='200'){
                // 1、友情提醒
                this.$message.success('添加成功！');
                // 2、关闭窗口 外 、内 窗口
                this.innerVisible=false;
                this.dialogVisible=false;
                // 3、刷新列表页面
                this.$parent.getParamsListByPageNum(1);
                // 4、清空动态表单
                this.dyForm.domains=[];
            }else{
                 this.$message.error('添加失败！');
            }

          } catch (error) {
            console.log(error);
          }
        } else {
          console.log("验证失败!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.dynForm.resetFields();
    },
    /**
     * 删除父项及子项
     * index :下标
     */
    removeDomain(index) {
      this.dyForm.domains.splice(index, 1);
    },
    // 新增规格参数 一级
    addDomain() {
      this.dyForm.domains.push({
        title: "",
        value: "",
        children: []
      });
    },
    /**
     * 删除子项
     * index:父项的下标
     * i: 要删除的下标
     */
    removeChildDomain(index, i) {
      this.dyForm.domains[index].children.splice(i, 1);
    },
    /**
     * 添加子项  二级
     * index 下标  往第几个domains对象上添加
     */
    addChildDomain(index) {
      this.dyForm.domains[index].children.push({ title: "", value: "" });
    },
    /**
     * 监听子组件点击的Tree节点
     */
    getTreeData(data) {
      console.log(data);
      // 【确定并添加分组】变成可点击的状态
      this.isDisabled = false;
      this.treeData = data;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style lang="less" scoped>
hr {
  margin: 10px 0;
}
.buttons {
  display: flex;
  input {
    flex: 1;
  }
  button {
    margin-left: 10px;
  }
}
</style>