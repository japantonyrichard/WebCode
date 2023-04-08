<template>
  <div>
    <el-dialog title="查看合同" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <!-- 
            :page 显示第几页
            :rotate 旋转   只能旋转90的倍数
             @page-loaded   currentPage  当前页
              @num-pages  pageCount  总页数

      -->
      <!-- 第一种：预览当个页面 -->
      <!-- {{currentPage}} / {{pageCount}}
      <hr />
      <el-button @click="changePage(0)">上一页</el-button>
      <el-button @click="changePage(1)">下一页</el-button>
      <el-button @click="print">打印合同</el-button>


      <pdf
        ref='myPdf'
        src="./sxt.pdf"
        :page="num"
        @num-pages="pageCount = $event"
        @page-loaded="currentPage = $event"
      />-->

      <!-- 第二种：缩略图预览 -->
      <pdf
        v-for="i in numPages"
        :key="i"
        :src="src"
        :page="i"
        style="display: inline-block; width: 25%"
      ></pdf>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import pdf from "vue-pdf";
var loadingTask = pdf.createLoadingTask(
  "./sxt.pdf"
);
export default {
  components: {
    pdf
  },
  data() {
    return {
      dialogVisible: false,
      num: 1,
      currentPage: 0,
      pageCount: 0,
      src: loadingTask, //文件路径
      numPages: undefined, //总页数
    };
  },
  mounted() {
    this.src.promise.then(pdf => {
      this.numPages = pdf.numPages;
    }).catch(err=>{
      console.log(err);
    });
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    changePage(flag) {
      // 上一页
      if (flag == 0 && this.currentPage > 1) {
        this.num--;
      }
      if (flag == 1 && this.currentPage < this.pageCount) {
        this.num++;
      }
    },
    print() {
      this.$refs.myPdf.print();
    }
  }
};
</script>

<style lang="less" scoped>
</style>