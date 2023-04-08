<template>
  <div>
    <ul class="gooos-list">
      <li class="item">
        <!-- 图片 -->
        <AppSkeleton width='265px' height='265px'/>
        <!-- 标题 -->
        <AppSkeleton width='100px' height='25px'/>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.gooos-list {
  display: flex;
  justify-content: space-between;
  .item {
    width: 265px;
    height: 365px;
    background-color: #f5f5f5;
  }
}
</style>