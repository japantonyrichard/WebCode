<template>
  <div class="user">
    <el-button @click="viewPdf">查看合同</el-button>
    <pdfView ref="pdf" />
    <hr />
    <h2>用户数据</h2>
    <button @click="exportData">导出表格</button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import pdfView from "./pdfView.vue";
import { export2Excel } from "../../common/js/util";
export default {
  components: {
    pdfView
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      colunns: [
        { title: "日期", key: "date" },
        { title: "姓名", key: "name" },
        { title: "地址", key: "address" }
      ]
    };
  },
  methods: {
    viewPdf() {
      this.$refs.pdf.dialogVisible = true;
    },
    // 导出表格
    exportData() {
      export2Excel(this.colunns,this.tableData,'用户数据');
    }
  }
};
</script>

<style lang="less" scoped>
.user {
  padding: 10px;
  h2 {
    text-align: center;
    margin: 30px 0;
  }
}
</style>