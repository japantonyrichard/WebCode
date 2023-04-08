<template>
  <div class="page">
    <!-- 
        ayout	组件布局，子组件名用逗号分隔	String	sizes, prev, pager, next, jumper, ->, total, slot	'prev, pager, next, jumper, ->, total'
        total	总条目数	number
        page-size	每页显示条目个数，支持 .sync 修饰符	number	—	10
        一共有多少页 100页  相当于  total  :page-size='1'
        current-change	currentPage 改变时会触发	当前页
    -->
    <el-pagination
      background
      layout="prev, pager, next,jumper,total"
      :total="total"
      :page-size="pageSize"
      @current-change="changePage"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    // 总条目数
    total: {
      type: Number,
      default: 100
    },
    // 一页显示多少
    pageSize: {
      type: Number,
      default: 10
    }
  },
  methods: {
    changePage(num) {
      // 页码
      // console.log(num);
      //   把点击的页码传递给父组件  子=》父  自定义事件
      this.$emit('getPage',num)
    }
  }
};
</script>

<style lang="less" scoped>
.page {
  text-align: center;
  margin: 40px auto;
}
</style>