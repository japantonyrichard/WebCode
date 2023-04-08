

<template>
  <div>
    <!-- 弹窗 ：
      visible	是否显示 Dialog，支持 .sync 修饰符	boolean	—	false
    -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="70%" :before-close="handleClose">
      <div class="myForm">
        <el-form
          :model="goodsForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="类目选择" prop="category">
            <el-button @click="innerVisible=true">类目选择</el-button>
            {{goodsForm.category}}
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
            <el-button @click="innerVisibleImg=true">上传图片</el-button>
            <!-- 展示图片 -->
            <img :src="goodsForm.image" width="100px" style="marginLeft:10px" alt />
          </el-form-item>

          <el-form-item label="商品描述" prop="descs">
            <!-- 富文本编辑器 -->
            <WangEditor ref="WangEditor" @sendEditor="getEditor" />
          </el-form-item>
          
          <!-- 规格参数 -->
          <el-form-item label="规格参数" prop="paramsInfo" v-if="isShowParams">
            <!-- 表单开始 -->
            <!-- [{title:'',value:'',children:[{title:'',value:''}]}] -->
            <el-form ref="dynForm" label-width="100px" class="demo-dynamic">
              <el-form-item
                v-for="(item, index) in paramsInfo"
                :label="item.title"
                :key="index"
                :prop="item.value"
              >
                <!-- 按钮 -->
                <div class="buttons">
                  <el-input v-model="item.value"></el-input>
                </div>

                <!-- 内层表单项，遍历children -->
                <el-form-item
                  v-for="(ele, i) in item.children"
                  :label="ele.title"
                  :key="i"
                  :prop="ele.value"
                >
                  <!-- 按钮 -->
                  <div class="buttons">
                    <el-input v-model="ele.value"></el-input>
                  </div>
                </el-form-item>
              </el-form-item>
            </el-form>
            <!-- 表单结束 -->
          </el-form-item>
        </el-form>
      </div>

      <!-- 底部 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>

        <!-- 第二种：显示隐藏定义在父组件里 -->
        <!-- <el-button @click="changeVisible">取 消</el-button>
        <el-button type="primary" @click="changeVisible">确 定</el-button>-->
      </span>

      <!-- 1、内层弹窗 类目选择 -->
      <el-dialog width="40%" title="类目选择" :visible.sync="innerVisible" append-to-body>
        <!-- 树形结构 -->
        <TreeView @sendTreeData="getTreeData" />

        <!-- 底部 -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="innerVisible = false">取 消</el-button>
          <el-button type="primary" @click="ShowTreeData">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 2、内弹窗  上传图片 -->
      <el-dialog width="40%" title="上传图片" :visible.sync="innerVisibleImg" append-to-body>
        <!-- 图片上传组件 -->
        <UploadImg @sendImg="getImgUrl" />
        <!-- 底部 -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="innerVisibleImg = false">取 消</el-button>
          <el-button type="primary" @click="showImgUrl">确 定</el-button>
        </span>
      </el-dialog>
    </el-dialog>
  </div>
</template>

<script>
import TreeView from "./TreeView.vue";
import UploadImg from "./UploadImg.vue";
import WangEditor from "@/components/WangEditor.vue";
import { addGoods, updateGoods, getCategoryData } from "@/api";
export default {
  // props: ["dialogVisible"],
  components: {
    TreeView,
    UploadImg,
    WangEditor
  },
  props: {
    // 标题
    title: {
      type: String,
      default: "商品添加"
    },
    // 列表中当行数据
    rowData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  // this 当编辑再赋值的时候，生命周期不会再走一遍了，所以说，值是赋值不上去的。
  created() {
    // console.log('===================',this.rowData);  //{}
  },
  // 侦听器
  watch: {
    rowData(val) {
      console.log("侦听到数据变了了。。。", val);
      this.goodsForm = this.rowData;
      // 处理富文本编辑器
      // 在挂载之前就已经监听到数据变化，那在挂载之前DOM元素是拿不到的。==》data,props，computed、 watch  数据代理 Object.defineproperty() ,此时，获取不到DOM元素
      // console.log(this.$refs.WangEditor);  //undefined
      // 延迟操作DOM
      this.$nextTick(() => {
        this.$refs.WangEditor.editor.txt.html(val.descs);
      });
      // 是否显示规格参数配置
      if(val.paramsInfo){
        // 显示
        this.isShowParams=true;
        this.paramsInfo=JSON.parse(val.paramsInfo);
      }
    }
  },
  data() {
    return {
      dialogVisible: false, //控制弹窗的显示隐藏
      innerVisible: false, //内弹窗显示隐藏
      innerVisibleImg: false, //图片上传 内弹窗显示隐藏
      treeData: {}, //节点对象
      imgUrl: "", // 上传图片的地址
      isShowParams: false, //规格参数 隐藏
      paramsInfo: [], //保存规格参数配置
      // 表单数据对象
      goodsForm: {
        id: "", //商品id
        cid: "", //类目id
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
    // 关闭弹窗之前的提示框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          // done();
          this.resetForm();
        })
        .catch(_ => {});
    },
    // 第二种：显示隐藏定义在父组件里
    changeVisible() {
      // 通知父组件修改 显示隐藏
      this.$emit("change");
    },
    /**
     * 父组件监听拿到点击的节点对象
     */
    getTreeData(val) {
      // 保存数据对象
      this.treeData = val;
    },
    /**
     * 显示选择的类目
     */
    async ShowTreeData() {
      // 1、展示类目
      this.goodsForm.category = this.treeData.name;
      this.goodsForm.cid = this.treeData.cid;

      // 2、隐藏内弹窗
      this.innerVisible = false;

      // 是否展示规格参数，请求后端，看是否配置了
      try {
        const res = await getCategoryData({ cid: this.treeData.cid });
        console.log(res);
        if (res.status == 200 && res.result.length > 0) {
          this.isShowParams = true; //显示
          // 后台没有做去重处理，可多次添加，最终得到一个数组，这里取最后一条数据
          let info = res.result[res.result.length - 1];
          console.log(info);
          this.paramsInfo = JSON.parse(info.paramData);
        } else {
          this.isShowParams = false; //隐藏
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * 父组件监听自定义事件，获取图片地址
     */
    getImgUrl(imgUrl) {
      this.imgUrl = imgUrl;
    },
    /**
     * 上传图片，点击确定
     *
     */
    showImgUrl() {
      // 1、显示图片
      this.goodsForm.image = this.imgUrl;
      // 2、隐藏内弹窗
      this.innerVisibleImg = false;
    },
    /**
     * 接受富文本框传递过来的值
     */
    getEditor(val) {
      this.goodsForm.descs = val;
    },

    /**
     * 提交表单（一个按钮两个功能：添加、修改
     * 参数： title cid  category sellPoint price num descs paramsInfo image
     * paramsInfo:'[{title:'',value:'',children:[]}]'
     */
    submitForm() {
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          // 提交表单
          // console.log(paramsInfo:JSON.stringify(this.paramsInfo));
          //对象合并  let targetObj = Object.assign(targetObj, originObj);
          // {name:'zs',age:18}  {gender:'nan'}   {name:'zs',age:18,gender:'nan'}
          Object.assign(this.goodsForm, {
            paramsInfo: JSON.stringify(this.paramsInfo)
          });
          console.log(this.goodsForm);


          if (this.title == "商品添加") {
            try {
              const res = await addGoods(this.goodsForm);
              console.log(res);
              if (res.status == 200) {
                // 1、成功提醒
                this.$message({
                  type: "success",
                  message: "恭喜你,添加成功"
                });

                // 3、刷新商品列表
                this.$parent.loadGoodsList(1);
                // 清空、关闭弹窗处理
                this.resetForm();
              }
            } catch (error) {
              this.$message.error("添加失败！");
              console.log(error);
            }
          } else {
            //
            // console.log('商品编辑');
            try {
              // {id:'',.........}
              const res = await updateGoods(this.goodsForm);
              console.log(res);
              // 1、提醒
              this.$message({
                type: "success",
                message: "修改成功！"
              });
              //2、刷新列表页
              this.$parent.loadGoodsList(1);
              // 3、重置表单
              this.resetForm();
            } catch (error) {
              this.$message.error("修改失败！");
              console.log(error);
            }
          }
        } else {
          console.log("验证失败");
          return false;
        }
      });
    },
    // 清空表单
    resetForm() {
      // 1、弹窗隐藏
      this.dialogVisible = false;
      // 2、清空表单数据
      this.goodsForm = {
        category: "", //类目
        title: "", //商品名称
        price: "", //商品价格
        num: "", //商品数量
        sellPoint: "", //商品卖点
        image: "", //商品图片
        descs: "" //商品描述
      };
      // 清空规格参数配置
      this.paramsInfo=[];
      // 隐藏
      this.isShowParams=false;
      // 单独处理富文本框   this.editor.txt.clear();
      this.$refs.WangEditor.editor.txt.clear();
    }
  }
};
</script>

<style lang="less" scoped>
</style>