

<template>
  <div class="more">
    <a :href='path'>
        <span>查看全部</span> 
        <i class="iconfont icon-angle-right"></i>
    </a>
  </div>
</template>

<script>
export default {
  name:'AppMore',
  props: {
    path: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style lang="less" scoped>
.more{
    font-size: 16px;
    color: #ccc;
    &:hover{
        span,i{
            color: @primaryColor;
        }
    }
}
</style>