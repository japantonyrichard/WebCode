<template>
  <div class="goods-list">
    <!-- 1、搜索区域 -->
    <div class="header">
      <!-- change	仅在输入框失去焦点或用户按下回车时触发	(value: string | number) -->
      <el-input v-model="keyword" placeholder="请输入内容" @change="toSearch"></el-input>
      <el-button type="primary">搜索</el-button>
      <el-button type="primary" @click="toAdd">
        页面添加
        <!-- <router-link to='/goods/goods-add'>页面添加</router-link> -->
      </el-button>
      <el-button type="primary" @click="addDialog">弹窗添加</el-button>
    </div>

    <!-- 2、表格展示 -->
    <!-- prop	对应列内容的字段名，也可以使用 property 属性	string 
        show-overflow-tooltip	当内容过长被隐藏时显示 tooltip	Boolean
    -->
    <div class="wrap">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="商品ID" width="80"></el-table-column>
        <el-table-column prop="title" label="商品名称" show-overflow-tooltip width="100"></el-table-column>
        <el-table-column prop="price" label="商品价格" width="100"></el-table-column>
        <el-table-column prop="num" label="商品数量" width="100"></el-table-column>
        <el-table-column prop="category" label="商品类目" width="100"></el-table-column>
        <el-table-column prop="image" label="商品图片" show-overflow-tooltip></el-table-column>
        <el-table-column prop="sellPoint" label="商品卖点" show-overflow-tooltip></el-table-column>
        <el-table-column prop="descs" label="商品描述" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">{{$t("content.edit")}}</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 3、分页功能 -->
    <MyPagination
      :total="total"
      :pageSize="pageSize"
      :currentPage="currentPage"
      @getPageNum="getCurrentPage"
    />
    <!-- 4、弹窗 -->
    <!-- 方式一：this.$refs -->
    <GoodsDialog ref="dialog"  :title="title" :rowData='rowData'/>
    <!-- 方式二：显示隐藏定义在父组件里 -->
    <!-- <GoodsDialog   :dialogVisible='dialogVisible' @change='changeVisible'/> -->
  </div>
</template>

<script>
import { getGoodsList, getSearchList, delGoods } from "@/api";
import MyPagination from "../../components/MyPagination.vue";
import GoodsDialog from "./GoodsDialog.vue";
export default {
  components: {
    MyPagination,
    GoodsDialog
  },
  data() {
    return {
      keyword: "",
      tableData: [],
      total: 1, //总条目数
      pageSize: 1, //一页显示多少条
      searchList: [], //搜索列表，所有数据
      type: 1, //1 全部商品列表分页；2 搜索的分页  ==》做个标记
      currentPage: 1, //让第几页高亮
      dialogVisible: false, //控制弹窗的显示隐藏
      title:'商品添加',//弹窗标题
      rowData:{}, //编译里一行数据
    };
  },
  created() {
    this.loadGoodsList(1);
  },
  methods: {
    /**
     * 加载商品列表
     * num:页码
     */
    loadGoodsList(num) {
      getGoodsList({ page: num })
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            this.tableData = res.data;
            this.total = res.total;
            this.pageSize = res.pageSize;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 父组件获取页码
    getCurrentPage(num) {
      console.log(num);
      // 父组件在接受到页码之后，让当前页成为高亮页
      this.currentPage = num;
      if (this.type == 1) {
        this.loadGoodsList(num); //全部商品分页
      } else {
        // 搜索分页，加载下一页数据  1： 0,1,2，   2： 3,4,5，      3：6,7,8
        // [].slice(,9)   (num-1)*3   num*3
        console.log("搜索分页");
        this.tableData = this.searchList.slice((num - 1) * 3, num * 3);
      }
    },
    /**
     * 去搜索
     */
    async toSearch(val) {
      this.currentPage = 1; //让第一页高亮
      // e.target.value
      // console.log(this.keyword);
      if (!this.keyword) {
        // 不输入内容，应该加载全部列表的第一页数据
        this.loadGoodsList(1);
        this.type = 1;
        return;
      }
      try {
        const res = await getSearchList({ search: this.keyword });
        console.log(res);
        // 假如拿到1000条数据，前端如何分页？=》一页显示3条  0,1,2，  3  =》[].slice
        if (res.status == 200 && res.result.length > 0) {
          this.searchList = res.result;
          // 渲染
          this.tableData = this.searchList.slice(0, 3); //第一页数据
          this.total = this.searchList.length; //总条目数
          this.pageSize = 3; //一页显示3条
          // 标记一下，是搜索分页
          this.type = 2;
        } else {
          // 无数据处理
          this.tableData = [];
          this.total = 0; //总条目数
          this.pageSize = 1;
          this.type = 1; //所有商品分页
        }
      } catch (error) {
        // 无数据处理
        this.tableData = [];
        this.total = 0; //总条目数
        this.pageSize = 1;
        this.type = 1; //所有商品分页
        console.log(error);
      }
    },
    /**
     * 跳转到添加页面
     */
    toAdd() {
      this.$router.push("/goods/goods-add");
    },
    /**
     * 弹窗添加
     */
    addDialog() {
      // 第一种方式：this.$refs 直接修改子组件里的属性的值
      this.$refs.dialog.dialogVisible = true;
      this.title='商品添加';
      // 第二种方式：显示弹窗
      // this.dialogVisible = true;
    },
    // 第二种：显示隐藏定义在父组件里
    changeVisible() {
      // 父组件关闭弹窗
      this.dialogVisible = false;
    },
    /**
     * 编辑
     * 1、显示弹窗
     * 2、弹窗上回显当行数据
     */
    handleEdit(index, row) {
      // console.log(index, row);
      //  1、显示弹窗
      this.$refs.dialog.dialogVisible=true;
      this.title='商品编辑';
      // 方式一：ref获取DOM元素，直接修改子组件属性
      // this.$refs.dialog.goodsForm=row;
      // 方式二：props     
      //原因：row 对象类型，this.rowData 、row 指向内存中同一块地址，两次点击同一条数据，地址不变，侦听器侦听不到，在子组件里不会重新赋值，子组件里 goodsForm 就没值了
      // 解决：每次开辟一个新空间来存放数据
      this.rowData={...row};  //一赋值， {}=== 》当行数据

    },
    /**
     * 删除
     */
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          // 删除  接口
          try {
            const res = await delGoods({id:row.id});
            console.log(res);
            if(res.status==200){
              // 1、友好提醒 删除成功  
              this.$message({
                type:'success',
                message:'删除成功!'
              })
              // 2、刷新当前页面
              this.loadGoodsList(1);

            }
          } catch (error) {
            console.log(error);
            this.$message.error('删除失败')
          }    
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style lang="less" scoped>
.goods-list {
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