

<template>
  <div class="params">
    <!-- 1、搜索区域 -->
    <div class="header">
      <el-input placeholder="请输入内容"></el-input>
      <el-button type="primary">搜索</el-button>

      <el-button type="primary" @click="add">添加</el-button>
    </div>

    <!-- 2、表格展示 -->
    <!-- prop	对应列内容的字段名，也可以使用 property 属性	string 
        show-overflow-tooltip	当内容过长被隐藏时显示 tooltip	Boolean
    -->
    <div class="wrap">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="规格参数ID" width="100"></el-table-column>
        <el-table-column prop="itemCatId" label="类目ID" width="100"></el-table-column>
        <el-table-column prop="specsName" label="规格名称" width="100"></el-table-column>
        <el-table-column prop="paramData" label="规格参数" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" label="操作" width="100">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 3、分页 -->
    <MyPagination
      :total="total"
      :pageSize="pageSize"
      :currentPage="currentPage"
      @getPageNum="getCurrentPage"
    />
    <!-- 弹窗 -->
    <ParamsDialog ref="dialog" />
  </div>
</template>

<script>
import { getParams } from "@/api";
import MyPagination from "@/components/MyPagination.vue";
import ParamsDialog from "./ParamsDialog.vue";
export default {
  components: {
    MyPagination,
    ParamsDialog
  },
  data() {
    return {
      tableData: [],
      total: 10, //总条目数
      pageSize: 1, //一页显示多少条
      currentPage: 1 //让第一页高亮
    };
  },
  created() {
    this.getParamsListByPageNum(1);
  },
  methods: {
    /**
     * 根据页码去查询第几页数据
     */
    async getParamsListByPageNum(page) {
      try {
        const res = await getParams({ page });
        if (res.status == 200) {
          this.tableData = res.data;
          console.log(res);
          this.total = res.total; //总条目数
          this.pageSize = res.pageSize;
        }
      } catch (error) {
        console.log(error);
      }
    },
    // 父组件监听自己出传递过来的页码
    getCurrentPage(page) {
      // console.log(page);
      this.getParamsListByPageNum(page);
    },
    // 点击显示弹窗
    add() {
      this.$refs.dialog.dialogVisible = true;
    }
  }
};
</script>

<style lang="less" scoped>
.params {
  padding: 20px;
  .header {
    display: flex;
    button {
      margin-left: 20px;
    }
  }
  .wrap {
    margin: 20px 0;
  }
}
</style>