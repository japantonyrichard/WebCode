<template>
  <div class="page">
    <!-- layout	组件布局，子组件名用逗号分隔	String	sizes, prev, pager, next, jumper, ->, total, slot	'prev, pager, next, jumper, ->, total'

    current-change	currentPage 改变时会触发	当前页

    current-page	当前页数，支持 .sync 修饰符	number	—	1  父组件主动告诉子组件，让第几页高亮
    
    -->
    <el-pagination
      background
      layout="total,prev, pager, next,jumper"
      :total="total"
      :page-size="pageSize"
      @current-change="changePage"
      :current-page="currentPage"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    // 总条目数， 当一页显示1条时，total 相当于总页数
    total: {
      type: Number,
      default: 10
    },
    // 一页显示多少条
    pageSize: {
      type: Number,
      default: 1
    },
    // 父组件告诉子组件，让第几页高亮
    currentPage: {
      type: Number,
      default: 1
    }
  },
  methods: {
    changePage(num) {
      // 通知父组件去查询当前页数据  自定义事件
      this.$emit("getPageNum", num);
    }
  }
};
</script>

<style lang="less" scoped>
.page {
  text-align: center;
}
</style>